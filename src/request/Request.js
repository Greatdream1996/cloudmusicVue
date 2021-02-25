import axios from 'axios'
const $http = axios.create({
  baseURL: 'http://localhost:3000'
})
export default function Request() {
  console.log(1)
  $http.get('/login/cellphone', {
    params: {
      phone: 12345,
      password: 132465
    }
  }).then(function(res) {
    console.log(res)
  })
}
