import React from 'react'
import { Alert } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

function Message({ variant, children }) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

export default withTranslation('translations')(Message)
