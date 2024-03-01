import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {render_currency} from "../utils";

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function ProductScreen({ match, history, t }) {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    const current_language = get("current_language");
    return (
        <div className={"product_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Link to='/' className='btn btn-light my-3'><strong>{t("Go Back")}</strong></Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{t(error)}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={6}>
                                    <Image src={BACKEND_URL + product.image} alt={product.name} fluid />
                                </Col>


                                <Col md={3} className='product_details'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} ${t(product.numReviews > 1 ? "reviews" : "review")}`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <span>{t("Price")}: </span><span>{product.price}</span><span>{t(render_currency())}</span>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            {t("Description")}: {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>


                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>{t("Price")}:</Col>
                                                    <Col>
                                                        <strong style={{display: "flex"}}><span>{product.price}</span><span>{t(render_currency())}</span></strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>{t("Status")}:</Col>
                                                    <Col>
                                                        {t(product.countInStock > 0 ? 'In Stock' : 'Out of Stock')}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>{t("Qty")}</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    type='button'>
                                                    {t("Add to Cart")}
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className='reviews_row'>
                                <Col md={6}>
                                    <h4>{t("Reviews")}</h4>
                                    {product.reviews.length === 0 && <Message variant='info'>{t("No Reviews")}</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>{t("Write a review")}</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>{t("Review Submitted")}</Message>}
                                            {errorProductReview && <Message variant='danger'>{t(errorProductReview)}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>{t("Rating")}</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>{t("Select...")}</option>
                                                            <option value='1'>{t("1 - Poor")}</option>
                                                            <option value='2'>{t("2 - Fair")}</option>
                                                            <option value='3'>{t("3 - Good")}</option>
                                                            <option value='4'>{t("4 - Very Good")}</option>
                                                            <option value='5'>{t("5 - Excellent")}</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>{t("Review")}</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        {t("Submit")}
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>{t("Please ")}<Link to='/login'>{t(" login ")}</Link> {t("to write a review")}</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    )

            }


        </div >
    )
}

export default withTranslation('translations')(ProductScreen)
