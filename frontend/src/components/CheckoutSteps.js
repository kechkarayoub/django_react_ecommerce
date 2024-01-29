import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withTranslation } from 'react-i18next';

function CheckoutSteps({ step1, step2, step3, step4, t }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>{t("Login")}</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>{t("Login")}</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>{t("Shipping")}</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>{t("Shipping")}</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>{t("Payment")}</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>{t("Payment")}</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>{t("Place Order")}</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>{t("Place Order")}</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default withTranslation('translations')(CheckoutSteps)
