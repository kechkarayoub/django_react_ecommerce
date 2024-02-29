import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder, deliverOrder, setOrderPaymentDetails } from '../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {render_currency, get_currency_iso, get_cmi_hash, get_random_str, submit_cmi_modal} from "../utils";
import {PAYMENTS_METHODS_CHOICES} from "../app_config"

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function OrderScreen({ match, history, t }) {
    const orderId = match.params.id
    const dispatch = useDispatch()


    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [orderData, setOrderData] = useState(null);
    var queryParams = new URLSearchParams(window.location.search);
    // Access specific query parameters
    const payment_failure = queryParams.get('payment_failure');
    const payment_success = queryParams.get('payment_success');
    if((payment_failure || payment_success) && !orderData){
        var order_id = queryParams.get("oid");
        setOrderData({
            TRANID: queryParams.get("TRANID"),
            amount: queryParams.get("amount"),
            ProcReturnCode: queryParams.get("ProcReturnCode"),
            mdStatus: queryParams.get("mdStatus"),
            order_id: order_id,
            payment_failure: payment_failure,
            payment_success: payment_success,
        });
    }

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }


    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AeDXja18CkwFUkL-HQPySbzZsiTrN52cG13mf9Yz7KiV2vNnGfTDP0wDEN9sGlhZHrbb_USawcJzVDgn'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {

        if (!userInfo) {
            history.push('/login')
        }
        if(process.env.REACT_APP_CODE_MODE === "local_dev" && orderData){
            if(orderData.order_id){
                var data = {
                    action: "payment_result",
                    from_user_navigator: true,
                    order_id: orderData.order_id,
                    payment_success: orderData.payment_success,
                    payment_failure: orderData.payment_failure,
                    TRANID: orderData.TRANID,
                    amount: orderData.amount,
                    ProcReturnCode: orderData.ProcReturnCode,
                    mdStatus: orderData.mdStatus,
                };
                dispatch(setOrderPaymentDetails(data));
            }
        }
        else if (!order || successPay || order._id !== Number(orderId) || successDeliver) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch({ type: ORDER_DELIVER_RESET })

            dispatch(getOrderDetails(orderId))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, order, orderId, successPay, successDeliver])


    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }
    const current_language = get("current_language");
    const paymentMethod = get("paymentMethod");
    const cmiStoreKey = process.env.REACT_APP_CMI_STORE_KEY;
    const cmiClientId = process.env.REACT_APP_CMI_CLIENT_ID;

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger' class_name={"custom_message " + (current_language == "ar" ? 'rtl' : 'ltr')}>{error}</Message>
    ) : (
                <div className={"order_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
                    <h1>{t("Order")}: {order.Id}</h1>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>{t("Shipping")}</h2>
                                    <p><strong>{t("Name")}: </strong> {order.user.name}</p>
                                    <p><strong>{t("Email")}: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                                    <p>
                                        <strong>{t("Shipping")}: </strong>
                                        {order.shippingAddress.address},  {order.shippingAddress.city}
                                        {'  '}
                                        {order.shippingAddress.postalCode},
                                {'  '}
                                        {order.shippingAddress.country}
                                    </p>

                                    {order.isDelivered ? (
                                        <Message variant='success'>{t("Delivered on")} {order.deliveredAt}</Message>
                                    ) : (
                                            <Message variant='warning'>{t("Not Delivered")}</Message>
                                        )}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <h2>{t("Payment Method")}</h2>
                                    <p>
                                        <strong>{t("Method")}: </strong>
                                        {t(PAYMENTS_METHODS_CHOICES[order.paymentMethod] || order.paymentMethod)}
                                    </p>
                                    {order.isPaid ? (
                                        <Message variant='success'>{t("Paid on")} {order.paidAt}</Message>
                                    ) : (
                                            <Message variant='warning'>{t("Not Paid")}</Message>
                                        )}

                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <h2>{t("Order Items")}</h2>
                                    {order.orderItems.length === 0 ? 
                                        <Message variant='info'>
                                        {t("Order is empty")}
                                        </Message> 
                                    : (
                                        <ListGroup variant='flush'>
                                            {order.orderItems.map((item, index) => (
                                                <ListGroup.Item key={index}>
                                                    <Row>
                                                        <Col md={1}>
                                                            <Image src={BACKEND_URL + item.image} alt={item.name} fluid rounded />
                                                        </Col>

                                                        <Col>
                                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                        </Col>

                                                        <Col md={5} style={{direction: "ltr"}}>
                                                            <span>{item.qty}</span><span> X </span><span>{item.price}</span><span>{t(render_currency())}</span><span> = </span><span>{(item.qty * item.price).toFixed(2)}</span><span>{t(render_currency())}</span>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}
                                </ListGroup.Item>

                            </ListGroup>

                        </Col>

                        <Col md={4}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h2>{t("Order Summary")}</h2>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Items")}:</Col>
                                            <Col style={current_language == 'ar' ? {} : {}}><span>{order.itemsPrice}</span><span>{t(render_currency())}</span></Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Shipping")}:</Col>
                                            <Col style={current_language == 'ar' ? {} : {}}><span>{order.shippingPrice}</span><span>{t(render_currency())}</span></Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Tax")}:</Col>
                                            <Col style={current_language == 'ar' ? {} : {}}><span>{order.taxPrice}</span><span>{t(render_currency())}</span></Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Total")}:</Col>
                                            <Col style={current_language == 'ar' ? {} : {}}><span>{order.totalPrice}</span><span>{t(render_currency())}</span></Col>
                                        </Row>
                                    </ListGroup.Item>


                                    {!order.isPaid && (
                                        <ListGroup.Item>
                                            {loadingPay && <Loader />}

                                            {(order.paymentMethod || paymentMethod) == "cmi" ?
                                                <>
                                                    <button className='pay' onClick={evt => {
                                                        
                                                        var rnd = get_random_str();
                                                        var data = {
                                                          clientid: cmiClientId,
                                                          storetype: "3D_PAY_HOSTING",
                                                          TranType: "PreAuth",
                                                          oid: order.crypted_id + "",
                                                          amount: order.totalPrice + "",
                                                          currency: get_currency_iso(),
                                                          okUrl: process.env.REACT_APP_URL_FRONTEND + window.location.pathname + "?payment_success=true",
                                                          failUrl: process.env.REACT_APP_URL_FRONTEND + window.location.pathname + "?payment_failure=true",
                                                          CallbackResponse: process.env.REACT_APP_CODE_MODE !== "local_dev",
                                                          callbackUrl: process.env.REACT_APP_URL_BACKEND + "/order/cmi_callback_api",
                                                          lang: current_language,
                                                          hashAlgorithm: "ver3",
                                                          redirectGet: "TRUE",
                                                        //   rnd: rnd,
                                                        }
                                                        data.encoding = "UTF-8";
                                                        data.hash = get_cmi_hash(data, cmiStoreKey);
                                                        data.storeKey = cmiStoreKey;
                                                        var data_ = "";
                                                        var data_keys = Object.keys(data).length;
                                                        Object.keys(data).map((key, idx) => {
                                                          data_ += key + "=" + data[key] + (idx < data_keys - 1 ? "&" : "");
                                                        });
                                                        submit_cmi_modal(data, process.env.REACT_APP_CODE_MODE == "prod");
                                                    }}>
                                                        {t("Pay")}
                                                    </button>
                                                </>
                                            :
                                                <>
                                                    {(order.paymentMethod || paymentMethod) == "cod" ?
                                                        <>
                                                            <div className='cash_on_delivery'>
                                                                {t("Cash on delivery")}
                                                            </div>
                                                        </>
                                                    :
                                                        <>
                                                            {!sdkReady ? (
                                                                <Loader />
                                                            ) : (
                                                                    <PayPalButton
                                                                        amount={order.totalPrice}
                                                                        onSuccess={successPaymentHandler}
                                                                    />
                                                                )}
                                                        </>
                                                    }
                                                </>
                                            }

                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                                {loadingDeliver && <Loader />}
                                {userInfo && userInfo.isAdmin && (order.isPaid || order.paymentMethod == "cod") && !order.isDelivered && (
                                    <ListGroup.Item>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                            onClick={deliverHandler}
                                        >
                                            {t("Mark As Delivered")}
                                        </Button>
                                    </ListGroup.Item>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
}

export default withTranslation('translations')(OrderScreen)
