import axios from './config.js'

export const getProductList = () => {
    return axios.get('/teaHouse/getProductList')
}

export const getProductIcon = () => {
    return axios.get('/teaHouse/getProductIcon')
}

export const getProductTag = () => {
    return axios.get('/teaHouse/getProductTag')
}

export const getProductIndex = () => {
    return axios.get('/teaHouse/getCarIndex')
}