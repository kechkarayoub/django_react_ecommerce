import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function SearchBox({t}) {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    const current_language = get("current_language");
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className={current_language == "ar" ? 'ml-sm-2 mr-sm-5' : 'mr-sm-2 ml-sm-5'}
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                {t("Submit")}
            </Button>
        </Form>
    )
}

export default withTranslation('translations')(SearchBox)
