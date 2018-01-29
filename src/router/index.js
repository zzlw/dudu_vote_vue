import Vue from 'vue'
import Router from 'vue-router'

import Activity from '@/pages/activity'
import ActivityHome from '@/pages/activity/home'
import ActivityPlayer from '@/pages/activity/player'
import ActivityPlayerHome from '@/pages/activity/player/home'
import ActivityPlayerGift from '@/pages/activity/player/gift'
import ActivityPlayerCard from '@/pages/activity/player/card'

import ActivityRanking from '@/pages/activity/ranking'
import ActivityPrize from '@/pages/activity/prize'
import ActivityPersonal from '@/pages/activity/personal'
import ActivityEnter from '@/pages/activity/enter'
import ActivityPrizeExchange from '@/pages/activity/prize/exchange'

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
import OperatorActivity from '@/pages/operator/activity'
import OperatorActivitySettingHome from '@/pages/operator/activity/setting/home'

import OperatorActivitySettingFollow from '@/pages/operator/activity/setting/follow'
import OperatorActivitySettingShare from '@/pages/operator/activity/setting/share'
import OperatorActivitySettingPrize from '@/pages/operator/activity/setting/prize/index'
import OperatorActivitySettingPrizeAdd from '@/pages/operator/activity/setting/prize/add'
import OperatorActivitySettingPrizeAddRank from '@/pages/operator/activity/setting/prize/add-rank'
import OperatorActivitySettingPrizeEdit from '@/pages/operator/activity/setting/prize/edit'
import OperatorActivitySettingPrizeEditRank from '@/pages/operator/activity/setting/prize/edit-rank'

import OperatorActivitySettingPlayer from '@/pages/operator/activity/setting/player'
import OperatorActivitySettingPlayerAdd from '@/pages/operator/activity/setting/player/add'
import OperatorActivitySettingPlayerEdit from '@/pages/operator/activity/setting/player/edit'
import OperatorActivitySettingPlayerAdmin from '@/pages/operator/activity/setting/player/admin'
import OperatorActivitySettingPlayerLimit from '@/pages/operator/activity/setting/player/limit'
import OperatorActivitySettingPlayerLimitNumber from '@/pages/operator/activity/setting/player/limitNumber'

import OperatorWithdrawals from '@/pages/operator/withdrawals'
import OperatorWithdrawalsLog from '@/pages/operator/withdrawals/log'
import OperatorWithdrawalsTotal from '@/pages/operator/withdrawals/Total'

import OperatorData from '@/pages/operator/activity/data'
import OperatorDataChildren from '@/pages/operator/activity/data/children'
import OperatorDataChildrenAdmin from '@/pages/operator/activity/data/children/admin'
import OperatorDataChildrenLog from '@/pages/operator/activity/data/children/log'
// 活动设置

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/operator',
    },
    {
      path: '/activity/:activity_id',
      component: Activity,
      children: [
        {
          path: '',
          component: ActivityHome,
          meta: {index: 0},
        },
        {
          path: 'player/:player_id',
          component: ActivityPlayer,
          children: [
            { // 选手主页
              path: '',
              component: ActivityPlayerHome,
              meta: {notNav: true},
            },
            { // 推广卡
              path: 'card',
              component: ActivityPlayerCard,
              meta: {notNav: true},
            },
            { // 赠送礼物
              path: 'gift',
              component: ActivityPlayerGift,
              meta: {notNav: true},
            },
          ],
        },
        {
          path: 'prize-exchange',
          component: ActivityPrizeExchange,
          meta: {notNav: true},
        },
        {
          path: 'ranking',
          component: ActivityRanking,
          meta: {index: 1},
        },
        {
          path: 'prize',
          component: ActivityPrize,
          meta: {index: 2},
        },
        {
          path: 'personal',
          component: ActivityPersonal,
          meta: {index: 3},
        },
        {
          path: 'enter', // 报名
          component: ActivityEnter,
          meta: {notNav: true},
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
          path: 'activity/:activity_id', // 活动编辑
          component: OperatorActivity,
          children: [
            {
              path: 'edit', // 活动编辑
              component: OperatorActivityEdit,
            },
            {
              path: 'settings',
              component: OperatorActivitySettingHome,
            },
            {
              path: 'settings/prize',
              component: OperatorActivitySettingPrize,
            },
            {
              path: 'settings/prize-add',
              component: OperatorActivitySettingPrizeAdd,
            },
            {
              path: 'settings/prize-add-rank',
              component: OperatorActivitySettingPrizeAddRank,
            },
            {
              path: 'settings/prize-edit/:prize_id',
              component: OperatorActivitySettingPrizeEdit,
            },
            {
              path: 'settings/prize-edit-rank/:prize_id',
              component: OperatorActivitySettingPrizeEditRank,
            },
            {
              path: 'settings/player',
              component: OperatorActivitySettingPlayer,
            },
            {
              path: 'settings/player-add',
              component: OperatorActivitySettingPlayerAdd,
            },
            {
              path: 'settings/player-edit/:player_id',
              component: OperatorActivitySettingPlayerEdit,
            },
            {
              path: 'settings/player-admin',
              component: OperatorActivitySettingPlayerAdmin,
            },
            {
              path: 'settings/player-limit',
              component: OperatorActivitySettingPlayerLimit,
            },
            {
              path: 'settings/player-limit-number',
              component: OperatorActivitySettingPlayerLimitNumber,
            },
            {
              path: 'settings/share',
              component: OperatorActivitySettingShare,
            },
            {
              path: 'settings/follow',
              component: OperatorActivitySettingFollow,
            },
            {
              path: 'data',
              component: OperatorData,
              children: [
                {
                  path: '',
                  redirect: 'children',
                },
                {
                  path: 'children',
                  component: OperatorDataChildren,
                  meta: {index: 0},
                },
                {
                  path: 'children-admin',
                  component: OperatorDataChildrenAdmin,
                  meta: {index: 2},
                },
                {
                  path: 'children-log',
                  component: OperatorDataChildrenLog,
                  meta: {index: 1},
                },
              ],
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
