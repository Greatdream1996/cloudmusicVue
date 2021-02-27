import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$get = get

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

function get (url, params) {
  return new Promise((resolve, reject) => {
    // Object.assign(params, { timestamp: new Date().getTime() })
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log(1)
      reject(err.data)
    })
  })
}
