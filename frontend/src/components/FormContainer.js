import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

function FormContainer({ children, class_name }) {
    return (
        <Container className={class_name}>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default withTranslation('translations')(FormContainer)
