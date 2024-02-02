import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { withTranslation } from 'react-i18next';
import {get_site_infos} from "../utils";
import {ACTIVATE_TRANSLATONS} from "../app_config";
import LanguageSelect from "./LanguageSelect"; 
import {get} from "../storage";

function Header({t}) {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const current_language = get("current_language");
    return (
        <header className={current_language == "ar" ? 'rtl' : 'ltr'}>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>{get_site_infos().site_name}</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className={current_language == "ar" ? 'mr-auto' : 'ml-auto'}>

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>{t("Cart")}{cartItems.length ? "(" + cartItems.length + ")" : ""}</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>{t("Profile")}</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>{t("Logout")}</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>{t("Login")}</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>{t("Users")}</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>{t("Products")}</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>{t("Orders")}</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
                            
                            {ACTIVATE_TRANSLATONS &&
                                <LanguageSelect />
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default withTranslation('translations')(Header)
