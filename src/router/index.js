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
import OperatorPlayerAdmin from '@/pages/operator/player/admin'
import OperatorPlayerLimit from '@/pages/operator/player/limit'
import OperatorPlayerLimitNumber from '@/pages/operator/player/limitNumber'

import OperatorShare from '@/pages/operator/share'
import OperatorFollow from '@/pages/operator/moreSetting/follow'

import OperatorWithdrawals from '@/pages/operator/withdrawals'
import OperatorWithdrawalsLog from '@/pages/operator/withdrawals/log'
import OperatorWithdrawalsTotal from '@/pages/operator/withdrawals/Total'

import OperatorData from '@/pages/operator/data'
import OperatorDataChildren from '@/pages/operator/data/children'
import OperatorDataChildrenAdmin from '@/pages/operator/data/children/admin'
import OperatorDataChildrenLog from '@/pages/operator/data/children/log'



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
                {
                    path: 'player-add',
                    component: OperatorPlayerAdd
                },
                {
                    path: 'player-admin',
                    component: OperatorPlayerAdmin
                },
                {
                    path: 'player-limit',
                    component: OperatorPlayerLimit
                },
                {
                    path: 'player-limit-number',
                    component: OperatorPlayerLimitNumber
                },
                {
                    path: 'share',
                    component: OperatorShare
                },
                {
                    path: 'follow',
                    component: OperatorFollow
                },
                {
                    path: 'withdrawals',
                    component: OperatorWithdrawals
                },
                {
                    path: 'withdrawals-log',
                    component: OperatorWithdrawalsLog
                },
                {
                    path: 'withdrawals-total',
                    component: OperatorWithdrawalsTotal
                },
                {
                    path: 'data',
                    component: OperatorData,
                    children:[
                        {
                            path: '',
                            redirect: 'children'
                        },
                        {
                            path: 'children',
                            component: OperatorDataChildren,
                            meta: { index: 0 }
                        },
                        {
                            path: 'children-admin',
                            component: OperatorDataChildrenAdmin,
                            meta: { index: 2 }
                        },
                        {
                            path: 'children-log',
                            component: OperatorDataChildrenLog,
                            meta: { index: 1 }
                        }
                    ]
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
