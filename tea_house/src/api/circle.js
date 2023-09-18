import axios from './config.js'

export const getCircleTabList = () => {
    return axios.get('/teaHouse/getCircleTabList')
}

export const getCircleList = () => {
    return axios.get('/teaHouse/getCircleList')
}

export const getCircleDetail = (params) => {
    return axios.post('/teaHouse/getCircleDetail', params)
}

export const addCircleComments = (params) => {
    return axios.post('/teaHouse/addCircleComments', params)
}

export const addCircleReplys = (params) => {
    console.log(params, 'addCircleReplys')
    return axios.post('/teaHouse/addCircleReplys', params)
}