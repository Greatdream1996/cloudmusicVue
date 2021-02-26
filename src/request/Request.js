import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$get = get

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})
function get (url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
