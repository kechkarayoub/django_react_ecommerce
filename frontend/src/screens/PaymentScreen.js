import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function PaymentScreen({ history, t }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('cmi')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    const current_language = get("current_language");

    return (
        <FormContainer class_name={"custom_form_container payment_form " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>{t("Select Method")}</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked={paymentMethod == "PayPal"}
                            value={"PayPal"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label='CMI'
                            id='cmi'
                            name='paymentMethod'
                            checked={paymentMethod == "cmi"}
                            value={"cmi"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label={t('Cash on delivery')}
                            id='cod'
                            name='paymentMethod'
                            checked={paymentMethod == "cod"}
                            value={"cod"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    {t("Continue")}
                </Button>
            </Form>
        </FormContainer>
    )
}

export default withTranslation('translations')(PaymentScreen)
