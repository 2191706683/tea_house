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

// 登录 发送post请求
// 对//backend-api-01.newbee.ltd/api/v1/user/login接口发送post请求并传参，返回状态码
export const login = (params) => {
    return axios.post('/teaHouse/login', params)
}
// 注册 发送post请求
// 对//backend-api-01.newbee.ltd/api/v1/user/register接口发送post请求并传参，返回状态码
export const register = (params) => {
    return axios.post('/teaHouse/register', params)
}
// 注册 发送post请求
// 对//backend-api-01.newbee.ltd/api/v1/user/register接口发送post请求并传参，返回状态码
export const putUserInfo = (params) => {
    return axios.post('/teaHouse/putUserInfo', params)
}
