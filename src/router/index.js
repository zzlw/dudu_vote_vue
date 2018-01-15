import Vue from 'vue'
import Router from 'vue-router'

import OperatorLogin from '@/pages/operator/login'
import OperatorJoin from '@/pages/operator/join'
import OperatorJoinForm from '@/pages/operator/join/form'

import Operator from '@/pages/operator/index'
import OperatorHome from '@/pages/operator/home'
import OperatorActivityCreate from '@/pages/operator/activity/create'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/operator'
        },
        {
            path: '/operator',
            component: Operator,
            children: [
                {
                    path: '',
                    component: OperatorHome
                },
                {
                    path: 'join',
                    component: OperatorJoin
                },
                {
                    path: 'join-form',
                    component: OperatorJoinForm
                },
                {
                    path: 'activity-create',
                    component: OperatorActivityCreate
                }
            ]
        },
        {
            path: '/operator-login',
            component: OperatorLogin
        }
    ]
})

export default router
