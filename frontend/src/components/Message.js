import React from 'react'
import { Alert } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function Message({ variant, children, class_name, style }) {
    const current_language = get("current_language");
    return (
        <Alert variant={variant} className={class_name} style={{...(style || {}), ...(current_language == "ar" ? {textAlign: "right"} : {})}}>
            {children}
        </Alert>
    )
}

export default withTranslation('translations')(Message)
