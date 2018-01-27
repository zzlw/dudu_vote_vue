import Vue from 'vue'
import Router from 'vue-router'

import Activity from '@/pages/activity'
import ActivityHome from '@/pages/activity/home'
import ActivityMatch from '@/pages/activity/match'
import ActivityRanking from '@/pages/activity/ranking'
import ActivityPrize from '@/pages/activity/prize'
import ActivityPersonal from '@/pages/activity/personal'
import ActivityEnter from '@/pages/activity/enter'
import ActivityEnterGift from '@/pages/activity/enter/gift'
import ActivityExtensionCard from '@/pages/activity/extensionCard'
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
// 活动设置
import OperatorActivitySetting from '@/pages/operator/activity/setting'
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
import OperatorActivitySettingPlayerAdmin from '@/pages/operator/activity/setting/player/admin'
import OperatorActivitySettingPlayerLimit from '@/pages/operator/activity/setting/player/limit'
import OperatorActivitySettingPlayerLimitNumber from '@/pages/operator/activity/setting/player/limitNumber'

import OperatorWithdrawals from '@/pages/operator/withdrawals'
import OperatorWithdrawalsLog from '@/pages/operator/withdrawals/log'
import OperatorWithdrawalsTotal from '@/pages/operator/withdrawals/Total'

import OperatorData from '@/pages/operator/data'
import OperatorDataChildren from '@/pages/operator/data/children'
import OperatorDataChildrenAdmin from '@/pages/operator/data/children/admin'
import OperatorDataChildrenLog from '@/pages/operator/data/children/log'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
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
          redirect: 'home'
        },
        {
          path: 'home',
          component: ActivityHome,
          meta: { index: 0 },
        },
        {
          path: 'match',
          component: ActivityMatch,
          meta: { index: 0 },
        },
        {
          path: 'ranking',
          component: ActivityRanking,
          meta: { index: 1 }
        },
        {
          path: 'prize',
          component: ActivityPrize,
          meta: { index: 2 }
        },
        {
          path: 'personal',
          component: ActivityPersonal,
          meta: { index: 3 }
        },
        {
          path: 'enter',
          component: ActivityEnter,
          meta: { notNav: true }
        },
        {
          path: 'gift',
          component: ActivityEnterGift,
          meta: { notNav: true }
        },
        {
          path: 'extension-card',
          component: ActivityExtensionCard,
          meta: { notNav: true }
        },
        {
          path: 'prize-exchange',
          component: ActivityPrizeExchange,
          meta: { notNav: true }
        }
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
          path: 'activity/:activity_id/edit', // 活动编辑
          component: OperatorActivityEdit,
        },
        {
          path: 'activity/:activity_id/settings', // 活动设置(更多设置)
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
              path: 'prize-add-rank',
              component: OperatorActivitySettingPrizeAddRank,
            },
            {
              path: 'prize-edit/:prize_id',
              component: OperatorActivitySettingPrizeEdit,
            },
            {        
              path: 'prize-edit-rank/:prize_id',
              component: OperatorActivitySettingPrizeEditRank,
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
        {
          path: 'data',
          component: OperatorData,
          children: [
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
      ],
    },
    {
      path: '/operator-login',
      component: OperatorLogin,
    },
  ],
})
export default router
