import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {render_currency} from "../utils";

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function ProductCarousel({t}) {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    const current_language = get("current_language");
    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{t(error)}</Message>
            : (
                <Carousel pause='hover' className={'bg-dark ' + (current_language == "ar" ? 'rtl' : 'ltr')}>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={BACKEND_URL + product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>
                                        <span style={current_language == "ar" ? {marginLeft: 5} : {marginRight: 5}}>{product.name}</span> (<span>{product.price}</span><span>{t(render_currency())}</span>)
                                    </h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )

    )
}

export default withTranslation('translations')(ProductCarousel)
