import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';
import { listSocialNetworkPages } from '../actions/socialNetworkPageActions'
import { createNewsletter } from '../actions/newsletterActions'
import moment from "moment";
import { Form, Image, Button } from 'react-bootstrap'
import {get_site_infos, validateEmail} from "../utils";
import {ACTIVATE_SOCIAL_NETWORK_PAGES, ACTIVATE_NEWSLETTER} from "../app_config";
import {get} from "../storage";
import Loader from '../components/Loader'
import SocialNetworkPage from './SocialNetworkPage'

function Footer({t}) {
    const dispatch = useDispatch()
    const socialNetworkPageList = useSelector(state => state.socialNetworkPageList)
    const { error, loading, social_network_pages } = socialNetworkPageList
    useEffect(() => {
        dispatch(listSocialNetworkPages())

    }, [dispatch])
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(!name){
            setNameError(t("This field is required!"));
        }
        if(!email){
            setEmailError(t("This field is required!"));
        }
        else if(!validateEmail(email)){
            setEmailError(t("This email is invalid!"));
        }
        else if(name){
            setSubmiting(true);
            dispatch(createNewsletter({
                name, email
            }, () => {
                setName("");
                setEmail("");
                setSubmiting(false);
            }))
        }
    }
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [submiting, setSubmiting] = useState(false)
    const current_language = get("current_language");
    return (
        <footer className={"bg-dark " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Container>
                <Row className='footer_sides'>
                    {ACTIVATE_NEWSLETTER && 
                        <Col  md={4} sm={12} className="newsletter_subscription">
                            <div className='title'>
                                {t("Stay connected: Subscribe to our newsletter")}:
                            </div>
                            <div className='newsletter_form'>
                                <Form onSubmit={submitHandler}>

                                    <Form.Group controlId='name'>
                                        <Form.Label>{t("Name")}</Form.Label>
                                        <Form.Control

                                            type='name'
                                            placeholder={t('Enter name')}
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setNameError("");
                                            }}
                                            isInvalid={!!nameError}
                                        >
                                        </Form.Control>
                                        {nameError &&
                                            <Form.Control.Feedback type="invalid">
                                                {nameError}
                                            </Form.Control.Feedback>
                                        }
                                    </Form.Group>


                                    <Form.Group controlId='email'>
                                        <Form.Label>{t("Email")}</Form.Label>
                                        <Form.Control

                                            type='email'
                                            placeholder={t('Enter Email')}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                setEmailError("");
                                            }}
                                            isInvalid={!!emailError}
                                        >
                                        </Form.Control>
                                        {emailError &&
                                            <Form.Control.Feedback type="invalid">
                                                {emailError}
                                            </Form.Control.Feedback>
                                        }
                                    </Form.Group>
                                    {submiting ? 
                                        <Loader />
                                    :
                                        <Button type='submit' variant='primary'>
                                            {t("Subscribe")}
                                        </Button>
                                    }

                                </Form>
                            </div>
                        </Col>
                    }
                    {ACTIVATE_SOCIAL_NETWORK_PAGES && 
                        <Col  md={4} sm={12} className="social_network_pages">
                            <div className='title'>
                                {t("Follow us on")}:
                            </div>
                            {loading ? <Loader />
                            :
                            <>
                                {social_network_pages.length == 0 &&
                                    <div className='no_social_network_page'>
                                        {t("Our social media pages are being implemented.")}
                                    </div>
                                }
                                {social_network_pages.map(snp => {
                                    return <SocialNetworkPage key={snp.id} social_network_page={snp} />
                                })}
                            </>
                            }
                        </Col>
                    }
                </Row>
                <Row>
                    <Col className="text-center py-3 footer_content">
                        <span>{t("Copyright")}</span>
                        <span> &copy; </span>
                        <span>{t("All rights reserved")}</span>
                        <span>{moment().format("YYYY")}</span>
                        <span>{get_site_infos().site_name}</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default withTranslation('translations')(Footer)
