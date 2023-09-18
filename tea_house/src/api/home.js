import axios from './config.js'

export const getArticleList = () => {
    return axios.get('/teaHouse/getArticleList')
}

export const getArticleDetail = (params) => {
    return axios.post('/teaHouse/getArticleDetail', params)
}
