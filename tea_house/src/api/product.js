import axios from './config.js'

export const getProductList = (params) => {
    return axios.post('/teaHouse/getProductList', params)
}

export const getProductDetail = (params) => {
    return axios.post('/teaHouse/getProductDetail', params)
}

export const getProductIcon = () => {
    return axios.get('/teaHouse/getProductIcon')
}

export const getProductTag = () => {
    return axios.get('/teaHouse/getProductTag')
}

export const getProductIndex = () => {
    return axios.get('/teaHouse/getProductIndex')
}