import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function LoginScreen({ location, history, t }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    const current_language = get("current_language");
    return (
        <FormContainer class_name={"custom_form_container login_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <h1>{t("Sign In")}</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>{t("Email Address")}</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder={t('Enter Email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>{t("Password")}</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder={t('Enter Password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    {t("Sign In")}
                </Button>
            </Form>

            <Row className='py-3'>
                    <Col>
                        {t("New Customer?")} <Link
                            to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                            {t("Register")}
                            </Link>
                    </Col>
            </Row>

        </FormContainer>
    )
}

export default withTranslation('translations')(LoginScreen)
