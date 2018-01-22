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
// 活动设置
import OperatorActivitySetting from '@/pages/operator/activity/setting'
import OperatorActivitySettingHome from '@/pages/operator/activity/setting/home'

import OperatorActivitySettingFollow from '@/pages/operator/activity/setting/follow'
import OperatorActivitySettingShare from '@/pages/operator/activity/setting/share'
import OperatorActivitySettingPrize from '@/pages/operator/activity/setting/prize/index'
import OperatorActivitySettingPrizeAdd from '@/pages/operator/activity/setting/prize/add'

import OperatorActivitySettingPlayer from '@/pages/operator/activity/setting/player'
import OperatorActivitySettingPlayerAdd from '@/pages/operator/activity/setting/player/add'
import OperatorActivitySettingPlayerAdmin from '@/pages/operator/activity/setting/player/admin'
import OperatorActivitySettingPlayerLimit from '@/pages/operator/activity/setting/player/limit'
import OperatorActivitySettingPlayerLimitNumber from '@/pages/operator/activity/setting/player/limitNumber'

import OperatorWithdrawals from '@/pages/operator/withdrawals'
import OperatorWithdrawalsLog from '@/pages/operator/withdrawals/log'
import OperatorWithdrawalsTotal from '@/pages/operator/withdrawals/Total'

Vue.use(Router)

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
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
          path: 'activity/:id/edit', // 活动编辑
          component: OperatorActivityEdit,
        },
        {
          path: 'activity/:id/settings', // 活动设置(更多设置)
          component: OperatorActivitySetting,
          children: [
            {
              path: '',
              component: OperatorActivitySettingHome,
            },
            {
              path: 'prize',
              component: OperatorActivitySettingPrize,
            },
            {
              path: 'prize-add',
              component: OperatorActivitySettingPrizeAdd,
            },
            {
              path: 'player',
              component: OperatorActivitySettingPlayer,
            },
            {
              path: 'player-add',
              component: OperatorActivitySettingPlayerAdd,
            },
            {
              path: 'player-admin',
              component: OperatorActivitySettingPlayerAdmin,
            },
            {
              path: 'player-limit',
              component: OperatorActivitySettingPlayerLimit,
            },
            {
              path: 'player-limit-number',
              component: OperatorActivitySettingPlayerLimitNumber,
            },
            {
              path: 'share',
              component: OperatorActivitySettingShare,
            },
            {
              path: 'follow',
              component: OperatorActivitySettingFollow,
            },
          ],
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
