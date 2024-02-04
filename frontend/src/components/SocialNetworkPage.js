import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {get_currency} from "../utils";

const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

function SocialNetworkPage({ social_network_page, t }) {
    const current_language = get("current_language");
    return (
        <Card className={" " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Link to={{ pathname: social_network_page.url }} target="_blank">
                <Card.Body>
                    <Card.Text as="span" >
                        {social_network_page.icon_url ?
                            <img src={social_network_page.icon_url} />
                            :
                            <i className={social_network_page.font_icon || ""} />
                        }
                    </Card.Text>
                    <Card.Text as="div">
                        <div className="">
                            {social_network_page.name}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default withTranslation('translations')(SocialNetworkPage)
