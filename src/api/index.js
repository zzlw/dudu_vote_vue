import axios from 'axios'

const callApi = (action, method, data) => {
    let url = Window.AppConfig.basePath + '?action=' + action

    let headers = {}

    if (process.env.NODE_ENV === 'development') {
        headers['Token'] = 'VWRLM0hwOUFrMGhXOGJjMDNGbXRTU1VQZkZXTFVHZW1QdmRERUhSSUdSST0.'
    }

    return axios({
        url,
        headers: headers,
        method,
        params: method === 'get' ? data : {},
        data: method !== 'get' ? data : {},
        withCredentials: true
    })
}

const http = {
    get: (action, data = {}) => callApi(action, 'get', data),
    post: (action, data = {}) => callApi(action, 'post', data),
    put: (action, data = {}) => callApi(action, 'put', data),
    delete: (action, data = {}) => callApi(action, 'delete', data)
}

const apis = {
    async login () {
    }
}

export default Object.assign({}, http, apis)
