import Vue from 'vue'
import Router from 'vue-router'
import loginView from '@/components/login/loginView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'loginView',
            component: loginView
        }
    ]
})
