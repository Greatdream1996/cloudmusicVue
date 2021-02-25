import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})
export default function request (url, data) {
  console.log(data)
  instance.get(url, {
    params: data
  }).then(res => {
    return res.data
  })
}
