import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { withTranslation } from 'react-i18next';
import {get} from "../storage";
import {images} from "../_resources";


function ProductEditScreen({ match, history, t }) {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate
    const BACKEND_URL = process.env.REACT_APP_URL_BACKEND;

    const instance_backend = axios.create({ baseURL: process.env.REACT_APP_URL_BACKEND });

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)

            }
        }



    }, [dispatch, product, productId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await instance_backend.post('/api/products/upload/', formData, config)


            setImage(data.image)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }
    const handleRemoveImage = async (e) => {
        const formData = new FormData()

        formData.append('image', null)
        formData.append('product_id', productId)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await instance_backend.post('/api/products/upload/', formData, config)


            setImage(data.image)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }

    const current_language = get("current_language");
    return (
        <div className={"product_edit_screen " + (current_language == "ar" ? 'rtl' : 'ltr')}>
            <Link to='/admin/productlist'>
                {t("Go Back")}
            </Link>

            <FormContainer>
                <h1>{t("Edit Product")}</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>{t("Name")}</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>{t("Price")}</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='image'>
                                <Form.Label>{t("Image")}</Form.Label>
                                {/* <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control> */}
                                <Form.Group controlId="formImagePreview" className='image_preview'>
                                    <Image src={image ? BACKEND_URL + image : images.noImage} thumbnail />
                                    <div className='actions'>
                                        <Form.Group controlId="formSelectButton">
                                            <Form.File
                                                id='image-file'
                                                label={t(image ? 'Update image' : 'Choose image')}
                                                custom
                                                accept="image/*"
                                                onChange={uploadFileHandler}
                                            >

                                            </Form.File>
                                        </Form.Group>
                                        {image &&
                                            <Form.Group controlId="formRemoveButton">
                                                <Button variant="danger" onClick={handleRemoveImage}>
                                                    {t("Remove Image")}
                                                </Button>
                                            </Form.Group>
                                        }
                                    </div>
                                </Form.Group>
                                {/* <Form.File
                                    id='image-file'
                                    label={t(image ? 'Update image' : 'Choose image')}
                                    custom
                                    accept="image/*"
                                    onChange={uploadFileHandler}
                                >

                                </Form.File> */}
                                {uploading && <Loader />}

                            </Form.Group>


                            <Form.Group controlId='brand'>
                                <Form.Label>{t("Brand")}</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter brand'
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='countinstock'>
                                <Form.Label>{t("Stock")}</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter stock'
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='category'>
                                <Form.Label>{t("Category")}</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description'>
                                <Form.Label>{t("Description")}</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                {t("Update")}
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default withTranslation('translations')(ProductEditScreen)