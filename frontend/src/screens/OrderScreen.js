import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

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

        if (!order || successPay || order._id !== Number(orderId) || successDeliver) {
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
                                        {order.paymentMethod}
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

                                                        <Col md={4}>
                                                            {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
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
                                            <Col>${order.itemsPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Shipping")}:</Col>
                                            <Col>${order.shippingPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Tax")}:</Col>
                                            <Col>${order.taxPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{t("Total")}:</Col>
                                            <Col>${order.totalPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>


                                    {!order.isPaid && (
                                        <ListGroup.Item>
                                            {loadingPay && <Loader />}

                                            {!sdkReady ? (
                                                <Loader />
                                            ) : (
                                                    <PayPalButton
                                                        amount={order.totalPrice}
                                                        onSuccess={successPaymentHandler}
                                                    />
                                                )}
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                                {loadingDeliver && <Loader />}
                                {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
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
