import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {render_currency} from "../utils";

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function CartScreen({ match, location, history, t }) {
    const current_language = get("current_language");
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row className={"cart_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Col md={8}>
                <h1>{t("Shopping Cart")}</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                            <>
                                {t("Your cart is empty")} <Link to='/'><strong>{t("Go Back")}</strong></Link>
                            </>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={BACKEND_URL + item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2} style={current_language == "ar" ? {} : {}}>
                                            <span>{item.price}</span><span>{t(render_currency())}</span>
                                        </Col>

                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {

                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>

                                        <Col md={2}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                                <h2>{t("Subtotal")} ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) {t(cartItems.reduce((acc, item) => acc + item.qty, 0) > 1 ? "items" : "item")}</h2>
                            <div style={current_language == "ar" ? {display: "flex", flexDirection: "row-reverse"} : {}}><span>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span><span>{t(render_currency())}</span></div>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            {t("Proceed To Checkout")}
                        </Button>
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
    )
}

export default withTranslation('translations')(CartScreen)