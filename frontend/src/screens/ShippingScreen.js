import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { withTranslation } from 'react-i18next';

function ShippingScreen({ history, t }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>{t("Shipping")}</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>{t("Address")}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={t('Enter address')}
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>{t("City")}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={t('Enter city')}
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>{t("Postal Code")}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={t('Enter postal code')}
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>{t("Country")}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={t('Enter country')}
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    {t("Continue")}
                </Button>
            </Form>
        </FormContainer>
    )
}

export default withTranslation('translations')(ShippingScreen)
