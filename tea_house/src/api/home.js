import axios from './config.js'

export const getArticleList = () => {
    return axios.get('/teaHouse/getArticleList')
}

export const getArticleDetail = () => {
    return axios.get('/teaHouse/getArticleDetail')
}