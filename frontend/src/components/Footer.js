import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';
import moment from "moment";
import {get_site_infos} from "../utils";
import {get} from "../storage";

function Footer({t}) {
    const current_language = get("current_language");
    return (
        <footer className={current_language == "ar" ? 'rtl' : 'ltr'}>
            <Container>
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
