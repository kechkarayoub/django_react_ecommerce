import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers, deleteUser } from '../actions/userActions'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";

function UserListScreen({ history, t }) {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, successDelete, userInfo])


    const deleteHandler = (id) => {

        if (window.confirm(t('Are you sure you want to delete this user?'))) {
            dispatch(deleteUser(id))
        }
    }

    const current_language = get("current_language");
    return (
        <div className={"user_list_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <h1>{t("Users")}</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{t(error)}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>{t("ID")}</th>
                                    <th>{t("NAME")}</th>
                                    <th>{t("EMAIL")}</th>
                                    <th>{t("ADMIN")}</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isAdmin ? (
                                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}</td>

                                        <td>
                                            <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>

                                            <Button variant='danger' className='btn-sm' style={current_language == "ar" ? {marginRight: 10} : {marginLeft: 10}} onClick={() => deleteHandler(user._id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>
    )
}

export default withTranslation('translations')(UserListScreen)
