import axios from 'axios'
const baseURL = "http://localhost:8888/api/private/v1/"
// 设置请求的根路径
axios.defaults.baseURL = baseURL

axios.interceptors.request.use(function (config) {
  // 取出localStorage中存储的token值
  let token = localStorage.getItem('mytoken')
  // 设置到请求头中 Authorization这个名字是后台规定的
  config.headers['Authorization'] = token
  return config
}, function (error) {
  return Promise.reject(error)
})

// 登录验证
export const checkLogin = params => {
   return axios.post('login',params).then(res => res.data)
}

// 获取用户列表
export const getUserList = params => {
    return axios.get('users',params).then(res => res.data)
}
