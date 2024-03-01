import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { withTranslation } from 'react-i18next';
import CustomTSNotice from "../components/CustomTSNotice"
import {get} from "../storage";

function RegisterScreen({ location, history, t }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    const registration_label = t("Register");

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage(t('Passwords do not match'))
        } else {
            dispatch(register(name, email, password))
        }

    }
    const current_language = get("current_language");

    return (
        <FormContainer class_name={"custom_form_container sign_in_form " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <h1>{t("Sign Up")}</h1>
            {message && <Message variant='danger'>{t(message)}</Message>}
            {error && <Message variant='danger'>{t(error)}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>{t("Name")}</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder={t('Enter name')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>{t("Email Address")}</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder={t('Enter Password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>{t("Confirm Password")}</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder={t('Confirm Password')}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                  <CustomTSNotice added_class="col-12 col-md-12" registration_label={registration_label}/>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    {registration_label}
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    {t("Have an Account?")} <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        {t("Sign In")}
                        </Link>
                </Col>
            </Row>
        </FormContainer >
    )
}

export default withTranslation('translations')(RegisterScreen)
