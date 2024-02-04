import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';
import { listSocialNetworkPages } from '../actions/socialNetworkPageActions'
import moment from "moment";
import {get_site_infos} from "../utils";
import {ACTIVATE_SOCIAL_NETWORK_PAGES} from "../app_config";
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
    const current_language = get("current_language");
    return (
        <footer className={"bg-dark " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Container>
                <Row className='footer_sides'>
                    {ACTIVATE_SOCIAL_NETWORK_PAGES && 
                        <Col  md={4} sm={12} className="social_network_pages">
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
