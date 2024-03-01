import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";


function HomeScreen({ history, t }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    const current_language = get("current_language");

    return (
        <div className={"home_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            {!keyword && <ProductCarousel />}

            <h1>{t('Latest products')}</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{t(error)}</Message>
                    :
                    <div className='products_list'>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default withTranslation('translations')(HomeScreen)
