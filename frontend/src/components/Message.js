import React from 'react'
import { Alert } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

function Message({ variant, children, class_name, style }) {
    return (
        <Alert variant={variant} className={class_name} style={style || style}>
            {children}
        </Alert>
    )
}

export default withTranslation('translations')(Message)
