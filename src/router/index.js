import Vue from 'vue'
import Router from 'vue-router'

import Activity from '@/pages/activity'
import ActivityHome from '@/pages/activity/home/index'

import OperatorLogin from '@/pages/operator/login'
import OperatorJoin from '@/pages/operator/join'
import OperatorJoinForm from '@/pages/operator/join/form'

import Operator from '@/pages/operator/index'
import OperatorHome from '@/pages/operator/home'
import OperatorActivityCreate from '@/pages/operator/activity/create'
import OperatorActivityEdit from '@/pages/operator/activity/edit'

import OperatorSetting from '@/pages/operator/setting/index'
import OperatorSettingMobile from '@/pages/operator/setting/mobile'
import OperatorSettingPassword from '@/pages/operator/setting/password'
import OperatorSettingLogout from '@/pages/operator/setting/logout'

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

Vue.use(Router)

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/operator',
    },
    {
      path: '/activity/:id',
      component: Activity,
      children: [
        {
          path: '',
          component: ActivityHome,
        },
      ],
    },
    {
      path: '/operator',
      component: Operator,
      children: [
        {
          path: '',
          component: OperatorHome,
        },
        {
          path: 'join',
          component: OperatorJoin,
        },
        {
          path: 'join-form',
          component: OperatorJoinForm,
        },
        {
          path: 'setting/change-password',
          component: OperatorSettingPassword,
        },
        {
          path: 'setting/bind-mobile',
          component: OperatorSettingMobile,
        },
        {
          path: 'setting/logout',
          component: OperatorSettingLogout,
        },
        {
          path: 'setting',
          component: OperatorSetting,
        },
        {
          path: 'activity/create', // 活动添加
          component: OperatorActivityCreate,
        },
        {
          path: 'activity/edit/:id', // 活动编辑
          component: OperatorActivityEdit,
        },
        {
          path: 'activity/settings/:id', // 活动设置(更多设置)
          component: OperatorMoreSetting,
        },
        {
          path: 'prize',
          component: OperatorPrize,
        },
        {
          path: 'prize-add',
          component: OperatorPrizeAdd,
        },
        {
          path: 'player',
          component: OperatorPlayer,
        },
        {
          path: 'player-add',
          component: OperatorPlayerAdd,
        },
        {
          path: 'player-admin',
          component: OperatorPlayerAdmin,
        },
        {
          path: 'player-limit',
          component: OperatorPlayerLimit,
        },
        {
          path: 'player-limit-number',
          component: OperatorPlayerLimitNumber,
        },
        {
          path: 'share',
          component: OperatorShare,
        },
        {
          path: 'follow',
          component: OperatorFollow,
        },
        {
          path: 'withdrawals',
          component: OperatorWithdrawals,
        },
        {
          path: 'withdrawals-log',
          component: OperatorWithdrawalsLog,
        },
        {
          path: 'withdrawals-total',
          component: OperatorWithdrawalsTotal,
        },
      ],
    },
    {
      path: '/operator-login',
      component: OperatorLogin,
    },
  ],
})
export default router
