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

// 不需要登录的界面php
const OperatorLogin = () => import(/* webpackChunkName: "Operator" */ '@/pages/operator/login')
const OperatorJoin = () => import(/* webpackChunkName: "Operator" */ '@/pages/operator/join')
const OperatorJoinForm = () => import(/* webpackChunkName: "OperatorJoin" */ '@/pages/operator/join/form')

// 运营商主页
const Operator = () => import(/* webpackChunkName: "Operator" */ '@/pages/operator/index')
const OperatorHome = () => import(/* webpackChunkName: "Operator" */ '@/pages/operator/home')

// 运营商设置相关
const OperatorSetting = () => import(/* webpackChunkName: "OperatorSetting" */ '@/pages/operator/setting/index')
const OperatorSettingMobile = () => import(/* webpackChunkName: "OperatorSetting" */ '@/pages/operator/setting/mobile')
const OperatorSettingPassword = () => import(/* webpackChunkName: "OperatorSetting" */ '@/pages/operator/setting/password')
const OperatorSettingLogout = () => import(/* webpackChunkName: "OperatorSetting" */ '@/pages/operator/setting/logout')

// 活动配置相关
const OperatorActivity = () => import(/* webpackChunkName: "OperatorActivity" */ '@/pages/operator/activity')

const OperatorActivityCreate = () => import(/* webpackChunkName: "OperatorActivity" */ '@/pages/operator/activity/create')
const OperatorActivityEdit = () => import(/* webpackChunkName: "OperatorActivity" */ '@/pages/operator/activity/edit')

const OperatorActivitySettingHome = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/home')

const OperatorActivitySettingFollow = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/follow')
const OperatorActivitySettingShare = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/share')
const OperatorActivitySettingPrize = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/prize/index')
const OperatorActivitySettingPrizeAdd = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/prize/add')
const OperatorActivitySettingPrizeAddRank = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/prize/add-rank')
const OperatorActivitySettingPrizeEdit = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/prize/edit')
const OperatorActivitySettingPrizeEditRank = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/prize/edit-rank')

const OperatorActivitySettingPlayer = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player')
const OperatorActivitySettingPlayerAdd = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player/add')
const OperatorActivitySettingPlayerEdit = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player/edit')
const OperatorActivitySettingPlayerAdmin = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player/admin')
const OperatorActivitySettingPlayerLimit = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player/limit')
const OperatorActivitySettingPlayerLimitNumber = () => import(/* webpackChunkName: "OperatorActivitySetting" */ '@/pages/operator/activity/setting/player/limitNumber')

// 活动数据统计
const OperatorActivityData = () => import(/* webpackChunkName: "OperatorActivityData" */ '@/pages/operator/activity/data')
const OperatorActivityDataChildren = () => import(/* webpackChunkName: "OperatorActivityData" */ '@/pages/operator/activity/data/children')
const OperatorActivityDataChildrenAdmin = () => import(/* webpackChunkName: "OperatorActivityData" */ '@/pages/operator/activity/data/children/admin')
const OperatorActivityDataChildrenLog = () => import(/* webpackChunkName: "OperatorActivityData" */ '@/pages/operator/activity/data/children/log')

// 提现
const OperatorWithdrawals = () => import(/* webpackChunkName: "OperatorWithdrawals" */ '@/pages/operator/withdrawals')
const OperatorWithdrawalsLog = () => import(/* webpackChunkName: "OperatorWithdrawals" */ '@/pages/operator/withdrawals/log')
const OperatorWithdrawalsTotal = () => import(/* webpackChunkName: "OperatorWithdrawals" */ '@/pages/operator/withdrawals/Total')

const routers = [
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
            component: OperatorActivityData,
            children: [
              {
                path: '',
                redirect: 'children',
              },
              {
                path: 'children',
                component: OperatorActivityDataChildren,
                meta: {index: 0},
              },
              {
                path: 'children-admin',
                component: OperatorActivityDataChildrenAdmin,
                meta: {index: 2},
              },
              {
                path: 'children-log',
                component: OperatorActivityDataChildrenLog,
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
]

export default routers
