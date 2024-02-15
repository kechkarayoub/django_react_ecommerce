import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listOrders } from '../actions/orderActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {render_currency} from "../utils";

function OrderListScreen({ history, t }) {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])

    const current_language = get("current_language");

    return (
        <div className={"order_list_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <h1>{t("Orders")}</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>{t("ID")}</th>
                                    <th>{t("USER")}</th>
                                    <th>{t("DATE")}</th>
                                    <th>{t("Total")}</th>
                                    <th>{t("PAID")}</th>
                                    <th>{t("DELIVERED")}</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.user && order.user.name}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td style={{display: "inline-flex", border: 0}}><span>{order.totalPrice}</span><span>{t(render_currency())}</span></td>
                                        <td>{order.isPaid ? (
                                            order.paidAt.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>{order.isDelivered ? (
                                            order.deliveredAt.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>
                                            <LinkContainer to={`/order/${order._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    {t("Details")}
                                                </Button>
                                            </LinkContainer>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>
    )
}

export default withTranslation('translations')(OrderListScreen)