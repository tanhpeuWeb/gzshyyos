import axios from 'axios'
const instance = axios.create();
axios.defaults.baseURL = 'https://api.gzshyyos.com';
axios.defaults.headers.common['Authorization'] = "123456";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.defaults.timeout = 30000;

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    });
}