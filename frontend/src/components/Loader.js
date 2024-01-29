import React from 'react'
import { Spinner } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

function Loader({t}) {
    return (
        <Spinner
            animation='border'
            role='status'
            style={{
                height: '100px',
                width: '100px',
                margin: 'auto',
                display: 'block'
            }}
        >
            <span className='sr-only'>{t("Loading...")}</span>
        </Spinner>
    )
}

export default withTranslation('translations')(Loader)
