import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Admin from '@/components/admin'
import Axios from 'axios'
import Auth from '../package/auth'

Vue.prototype.$http = Axios
// Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

Vue.use(Router)
Vue.use(Auth)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Admin,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        forAuth: true
      }
    }
  ]
})

router.beforeEach(
	(to, from, next) => {
		if(to.matched.some(record => record.meta.forVisitors)) {
			if(Vue.auth.isAuthenticated()) {
				next({
					path: '/'
				})
			} else next()
		}
		else if(to.matched.some(record => record.meta.forAuth)) {
			if(!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else next()
		}
		else next()
	}
)

export default router

