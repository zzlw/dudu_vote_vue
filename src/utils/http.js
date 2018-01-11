import axios from 'axios'
import config from './config'
const callApi = (url, method, data, ctx) => {
    let options = {}
    if (ctx.isServer) {
        options.headers = serializeHeaders(ctx)
    }
    return axios(Object.assign({}, {
        baseURL: ctx.isServer ? config.apiHost : config.apiUrl,
        url,
        method,
        params: method === 'get' ? data : {},
        data: method !== 'get' ? data : {},
        withCredentials: true
    }, options))
}
export const serializeCookies = cookie => {
    let cookies = {}
    cookie && cookie.split(';').map(i => {
        cookies[i.split('=')[0].trim()] = i.split('=')[1].trim()
    })
    return cookies
}
export const serializeQuery = queryString => {
    let query = {}
    queryString && queryString.split('&').map(n => {
        query[n.split('=')[0].trim()] = n.split('=')[1].trim()
    })
    return query
}
export const serializeHeaders = ctx => ({
    'AgentId': ctx.req.headers['host'].split('.')[0],
    'User-Agent': ctx.req.headers['user-agent'],
    'Token': serializeCookies(ctx.req.headers.cookie)['token'] || '',
    'X-Real-IP': ctx.req.headers['x-real-ip']
})
export default {
    get: (url, data = {}, ctx = {}) => callApi(url, 'get', data, ctx),
    post: (url, data = {}, ctx = {}) => callApi(url, 'post', data, ctx),
    put: (url, data = {}, ctx = {}) => callApi(url, 'put', data, ctx),
    delete: (url, data = {}, ctx = {}) => callApi(url, 'delete', data, ctx),
    serializeCookies,
    serializeHeaders,
    serializeQuery
}
