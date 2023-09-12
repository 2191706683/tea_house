import axios from './config.js'

export const getCircleList = () => {
    return axios.get('/teaHouse/getCircleList')
}