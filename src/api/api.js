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

// 修改用户状态
export const changeUserState = params => {
  return axios.put(`users/${params.uId}/state/${params.type}`).then(res => res.data)
}

// 添加用户
export const addUser = params => {
  return axios.post('users',params).then(res => res.data)
}

// 根据ID查询用户信息
export const getUserInfo = params => {
  return axios.get(`users/${params}`).then(res => res.data)
}

// 编辑用户
export const editUser = params => {
  return axios.put(`users/${params.id}`,params).then(res => res.data)
}

// 删除用户
export const deleteUser = params => {
  return axios.delete(`users/${params}`).then(res => res.data)
}