import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {get_currency} from "../utils";

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function Product({ product, t }) {
    const current_language = get("current_language");
    return (
        <Card className={"my-3 p-3 rounded " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={BACKEND_URL + product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} ${t(product.numReviews > 1 ? "reviews" : "review")}`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3"  style={current_language == "ar" ? {display: "flex"} : {}}>
                    <span>{product.price}</span><span>{t(get_currency())}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default withTranslation('translations')(Product)
