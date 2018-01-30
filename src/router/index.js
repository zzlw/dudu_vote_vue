import Vue from 'vue'
import Router from 'vue-router'

const Activity = r => require.ensure([], () => r(require('@/pages/activity')), 'Activity')
const ActivityHome = r => require.ensure([], () => r(require('@/pages/activity/home')), 'Activity')
const ActivityPlayer = r => require.ensure([], () => r(require('@/pages/activity/player')), 'Activity')
const ActivityPlayerHome = r => require.ensure([], () => r(require('@/pages/activity/player/home')), 'Activity')
const ActivityPlayerGift = r => require.ensure([], () => r(require('@/pages/activity/player/gift')), 'Activity')
const ActivityPlayerCard = r => require.ensure([], () => r(require('@/pages/activity/player/card')), 'Activity')

const ActivityRanking = r => require.ensure([], () => r(require('@/pages/activity/ranking')), 'Activity')
const ActivityPrize = r => require.ensure([], () => r(require('@/pages/activity/prize')), 'Activity')
const ActivityPersonal = r => require.ensure([], () => r(require('@/pages/activity/personal')), 'Activity')
const ActivityEnter = r => require.ensure([], () => r(require('@/pages/activity/enter')), 'Activity')
const ActivityPrizeExchange = r => require.ensure([], () => r(require('@/pages/activity/prize/exchange')), 'Activity')

const OperatorLogin = r => require.ensure([], () => r(require('@/pages/operator/login')), 'OperatorLogin')
const OperatorJoin = r => require.ensure([], () => r(require('@/pages/operator/join')), 'OperatorJoin')
const OperatorJoinForm = r => require.ensure([], () => r(require('@/pages/operator/join/form')), 'OperatorJoinForm')

const Operator = r => require.ensure([], () => r(require('@/pages/operator/index')), 'Operator')
const OperatorHome = r => require.ensure([], () => r(require('@/pages/operator/home')), 'OperatorHome')
const OperatorActivityCreate = r => require.ensure([], () => r(require('@/pages/operator/activity/create')), 'OperatorActivityCreate')
const OperatorActivityEdit = r => require.ensure([], () => r(require('@/pages/operator/activity/edit')), 'OperatorActivityEdit')

const OperatorSetting = r => require.ensure([], () => r(require('@/pages/operator/setting/index')), 'OperatorSetting')
const OperatorSettingMobile = r => require.ensure([], () => r(require('@/pages/operator/setting/mobile')), 'OperatorSettingMobile')
const OperatorSettingPassword = r => require.ensure([], () => r(require('@/pages/operator/setting/password')), 'OperatorSettingPassword')
const OperatorSettingLogout = r => require.ensure([], () => r(require('@/pages/operator/setting/logout')), 'OperatorSettingLogout')
const OperatorActivity = r => require.ensure([], () => r(require('@/pages/operator/activity')), 'OperatorActivity')
const OperatorActivitySettingHome = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/home')), 'OperatorActivitySettingHome')

const OperatorActivitySettingFollow = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/follow')), 'OperatorActivitySettingFollow')
const OperatorActivitySettingShare = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/share')), 'OperatorActivitySettingShare')
const OperatorActivitySettingPrize = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/prize/index')), 'OperatorActivitySettingPrize')
const OperatorActivitySettingPrizeAdd = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/prize/add')), 'OperatorActivitySettingPrizeAdd')
const OperatorActivitySettingPrizeAddRank = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/prize/add-rank')), 'OperatorActivitySettingPrizeAddRank')
const OperatorActivitySettingPrizeEdit = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/prize/edit')), 'OperatorActivitySettingPrizeEdit')
const OperatorActivitySettingPrizeEditRank = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/prize/edit-rank')), 'OperatorActivitySettingPrizeEditRank')

const OperatorActivitySettingPlayer = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player')), 'OperatorActivitySettingPlayer')
const OperatorActivitySettingPlayerAdd = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player/add')), 'OperatorActivitySettingPlayerAdd')
const OperatorActivitySettingPlayerEdit = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player/edit')), 'OperatorActivitySettingPlayerEdit')
const OperatorActivitySettingPlayerAdmin = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player/admin')), 'OperatorActivitySettingPlayerAdmin')
const OperatorActivitySettingPlayerLimit = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player/limit')), 'OperatorActivitySettingPlayerLimit')
const OperatorActivitySettingPlayerLimitNumber = r => require.ensure([], () => r(require('@/pages/operator/activity/setting/player/limitNumber')), 'OperatorActivitySettingPlayerLimitNumber')

const OperatorWithdrawals = r => require.ensure([], () => r(require('@/pages/operator/withdrawals')), 'OperatorWithdrawals')
const OperatorWithdrawalsLog = r => require.ensure([], () => r(require('@/pages/operator/withdrawals/log')), 'OperatorWithdrawalsLog')
const OperatorWithdrawalsTotal = r => require.ensure([], () => r(require('@/pages/operator/withdrawals/Total')), 'OperatorWithdrawalsTotal')

const OperatorData = r => require.ensure([], () => r(require('@/pages/operator/activity/data')), 'OperatorData')
const OperatorDataChildren = r => require.ensure([], () => r(require('@/pages/operator/activity/data/children')), 'OperatorDataChildren')
const OperatorDataChildrenAdmin = r => require.ensure([], () => r(require('@/pages/operator/activity/data/children/admin')), 'OperatorDataChildrenAdmin')
const OperatorDataChildrenLog = r => require.ensure([], () => r(require('@/pages/operator/activity/data/children/log')), 'OperatorDataChildrenLog')

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
