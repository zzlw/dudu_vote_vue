import Vue from 'vue'
import Router from 'vue-router'

const Activity = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity')
const ActivityHome = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/home')
const ActivityPlayer = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/player')
const ActivityPlayerHome = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/player/home')
const ActivityPlayerGift = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/player/gift')
const ActivityPlayerCard = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/player/card')

const ActivityRanking = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/ranking')
const ActivityPrize = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/prize')
const ActivityPersonal = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/personal')
const ActivityEnter = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/enter')
const ActivityPrizeExchange = () => import(/* webpackChunkName: "Activity" */ '@/pages/activity/personal/exchange')

const OperatorLogin = () => import(/* webpackChunkName: "OperatorLogin" */ '@/pages/operator/login')
const OperatorJoin = () => import(/* webpackChunkName: "OperatorJoin" */ '@/pages/operator/join')
const OperatorJoinForm = () => import(/* webpackChunkName: "OperatorJoinForm" */ '@/pages/operator/join/form')

const Operator = () => import(/* webpackChunkName: "Operator" */ '@/pages/operator/index')
const OperatorHome = () => import(/* webpackChunkName: "OperatorHome" */ '@/pages/operator/home')
const OperatorActivityCreate = () => import(/* webpackChunkName: "OperatorActivityCreate" */ '@/pages/operator/activity/create')
const OperatorActivityEdit = () => import(/* webpackChunkName: "OperatorActivityEdit" */ '@/pages/operator/activity/edit')

const OperatorSetting = () => import(/* webpackChunkName: "OperatorSetting" */ '@/pages/operator/setting/index')
const OperatorSettingMobile = () => import(/* webpackChunkName: "OperatorSettingMobile" */ '@/pages/operator/setting/mobile')
const OperatorSettingPassword = () => import(/* webpackChunkName: "OperatorSettingPassword" */ '@/pages/operator/setting/password')
const OperatorSettingLogout = () => import(/* webpackChunkName: "OperatorSettingLogout" */ '@/pages/operator/setting/logout')
const OperatorActivity = () => import(/* webpackChunkName: "OperatorActivity" */ '@/pages/operator/activity')
const OperatorActivitySettingHome = () => import(/* webpackChunkName: "OperatorActivitySettingHome" */ '@/pages/operator/activity/setting/home')

const OperatorActivitySettingFollow = () => import(/* webpackChunkName: "OperatorActivitySettingFollow" */ '@/pages/operator/activity/setting/follow')
const OperatorActivitySettingShare = () => import(/* webpackChunkName: "OperatorActivitySettingShare" */ '@/pages/operator/activity/setting/share')
const OperatorActivitySettingPrize = () => import(/* webpackChunkName: "OperatorActivitySettingPrize" */ '@/pages/operator/activity/setting/prize/index')
const OperatorActivitySettingPrizeAdd = () => import(/* webpackChunkName: "OperatorActivitySettingPrizeAdd" */ '@/pages/operator/activity/setting/prize/add')
const OperatorActivitySettingPrizeAddRank = () => import(/* webpackChunkName: "OperatorActivitySettingPrizeAddRank" */ '@/pages/operator/activity/setting/prize/add-rank')
const OperatorActivitySettingPrizeEdit = () => import(/* webpackChunkName: "OperatorActivitySettingPrizeEdit" */ '@/pages/operator/activity/setting/prize/edit')
const OperatorActivitySettingPrizeEditRank = () => import(/* webpackChunkName: "OperatorActivitySettingPrizeEditRank" */ '@/pages/operator/activity/setting/prize/edit-rank')

const OperatorActivitySettingPlayer = () => import(/* webpackChunkName: "OperatorActivitySettingPlayer" */ '@/pages/operator/activity/setting/player')
const OperatorActivitySettingPlayerAdd = () => import(/* webpackChunkName: "OperatorActivitySettingPlayerAdd" */ '@/pages/operator/activity/setting/player/add')
const OperatorActivitySettingPlayerEdit = () => import(/* webpackChunkName: "OperatorActivitySettingPlayerEdit" */ '@/pages/operator/activity/setting/player/edit')
const OperatorActivitySettingPlayerAdmin = () => import(/* webpackChunkName: "OperatorActivitySettingPlayerAdmin" */ '@/pages/operator/activity/setting/player/admin')
const OperatorActivitySettingPlayerLimit = () => import(/* webpackChunkName: "OperatorActivitySettingPlayerLimit" */ '@/pages/operator/activity/setting/player/limit')
const OperatorActivitySettingPlayerLimitNumber = () => import(/* webpackChunkName: "OperatorActivitySettingPlayerLimitNumber" */ '@/pages/operator/activity/setting/player/limitNumber')

const OperatorWithdrawals = () => import(/* webpackChunkName: "OperatorWithdrawals" */ '@/pages/operator/withdrawals')
const OperatorWithdrawalsLog = () => import(/* webpackChunkName: "OperatorWithdrawalsLog" */ '@/pages/operator/withdrawals/log')
const OperatorWithdrawalsTotal = () => import(/* webpackChunkName: "OperatorWithdrawalsTotal" */ '@/pages/operator/withdrawals/Total')

const OperatorData = () => import(/* webpackChunkName: "OperatorData" */ '@/pages/operator/activity/data')
const OperatorDataChildren = () => import(/* webpackChunkName: "OperatorDataChildren" */ '@/pages/operator/activity/data/children')
const OperatorDataChildrenAdmin = () => import(/* webpackChunkName: "OperatorDataChildrenAdmin" */ '@/pages/operator/activity/data/children/admin')
const OperatorDataChildrenLog = () => import(/* webpackChunkName: "OperatorDataChildrenLog" */ '@/pages/operator/activity/data/children/log')

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
