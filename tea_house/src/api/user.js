import axios from './config.js'

export const getUserList = () => {
    return axios.get('/teaHouse/getUserList')
}


export const test = () => {
    return axios.get('/teaHouse/test')
}

export const evaluate = () => {
    return axios.get('/teaHouse/evaluate')
}
