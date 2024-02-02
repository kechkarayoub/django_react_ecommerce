import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    const current_language = get("current_language");
    return (pages > 1 && (
        <Pagination className={current_language == "ar" ? 'rtl' : 'ltr'}>
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer
                    key={x + 1}
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=${x + 1}`
                        : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
                    }
                >
                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
    )
}

export default withTranslation('translations')(Paginate)
