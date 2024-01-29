import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next';
import moment from "moment";
import {get_site_infos} from "../utils";
import {get} from "../storage";

function Footer({t}) {
    const current_language = get("current_language");
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">{t("Copyright")} &copy; {moment().format("YYYY")} {get_site_infos().site_name}</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default withTranslation('translations')(Footer)
