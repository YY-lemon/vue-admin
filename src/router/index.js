import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'


Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:'Home',
      component:Home
    }
  ]
})




// 路由导航守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('mytoken')
  if(token) {
    next()
  } else {
    if(to.path !== '/login') {
      next({path:'/login'})
    } else {
      next()
    }
  }
  
})

export default router