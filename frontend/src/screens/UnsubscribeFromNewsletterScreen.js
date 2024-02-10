import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { unsubscribeFromNewsletter } from '../actions/newsletterActions'
import { withTranslation } from 'react-i18next';
import {ACTIVATE_NEWSLETTER} from "../app_config";
import {get} from "../storage";
import {validateEmail} from "../utils";


function UnsubscribeFromNewsletterScreen({ match, history, t }) {
    const [unsubscribed, setUnsubscribed] = useState(false)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(!email){
            setEmailError(t("This field is required!"));
        }
        else if(!validateEmail(email)){
            setEmailError(t("This email is invalid!"));
        }
        else{
            dispatch(unsubscribeFromNewsletter(email, () => {
                setEmail("");
                setUnsubscribed(true);
            }));
        }
    }

    const current_language = get("current_language");
    return (
        <div className={"unsubscribe_from_newsletter_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Link to='/' className='go_home btn btn-light my-3'><strong>{t("Go to home")}</strong></Link>
            {ACTIVATE_NEWSLETTER ? 
                <>
                    {unsubscribed ? 
                        <>
                            <div className='unsubscribed_message'>
                                {t("You are now unsubscribed from our newsletter.")}
                            </div>
                        </>
                    : (
                        <Form onSubmit={submitHandler}>

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


                            <Button type='submit' variant='primary'>
                                {t("Unsubscribe")}
                        </Button>

                        </Form>
                    )}
                </>
                :
                <>
                    <div className='no_service_message'>
                        {t("The newsletter is currently not available!")}
                    </div>
                </>
            }
        </div >
    )
}

export default withTranslation('translations')(UnsubscribeFromNewsletterScreen)
