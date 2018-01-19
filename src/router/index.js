import Vue from 'vue'
import Router from 'vue-router'

import OperatorLogin from '@/pages/operator/login'
import OperatorJoin from '@/pages/operator/join'
import OperatorJoinForm from '@/pages/operator/join/form'

import Operator from '@/pages/operator/index'
import OperatorHome from '@/pages/operator/home'
import OperatorActivityCreate from '@/pages/operator/activity/create'

import OperatorUpData from '@/pages/operator/upData'
import OperatorUpTel from '@/pages/operator/upData/tel'
import OperatorUpPass from '@/pages/operator/upData/upPass'

import OperatorMoreSetting from '@/pages/operator/moreSetting'

import OperatorPrize from '@/pages/operator/prize'
import OperatorPrizeAdd from '@/pages/operator/prize/add'

import OperatorPlayer from '@/pages/operator/player'
import OperatorPlayerAdd from '@/pages/operator/player/add'



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
                    path: 'up-data',
                    component: OperatorUpData
                },
                {
                    path: 'up-tel',
                    component: OperatorUpTel
                },
                {
                    path: 'up-pass',
                    component: OperatorUpPass
                },
                {
                    path: 'activity-create',
                    component: OperatorActivityCreate
                },
                {
                    path: 'more-setting',
                    component: OperatorMoreSetting
                },
                {
                    path: 'prize',
                    component: OperatorPrize
                },
                {
                    path: 'prize-add',
                    component: OperatorPrizeAdd
                },
                {
                    path: 'player',
                    component: OperatorPlayer
                },
                ,
                {
                    path: 'player-add',
                    component: OperatorPlayerAdd
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
