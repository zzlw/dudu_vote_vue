<template>
  <div>
    <div class="bg-deepblue">
      <div class="flex-wrp flex-center ptb60">
        <div class="size60 color1">{{(+operator.balance).toFixed(2)}}</div>
        <div class="border border-radius5 ptb5 plr20 ml20 color1 size16">立即提现</div>
      </div>

      <base-data-three :data="stats.total">
        <div slot="number" slot-scope="{ number }" class="bold size26 color1 lh200">{{(+number)}}
        </div>
        <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
      </base-data-three>

      <div class="plr40 ptb20">

        <div class="flex-wrp flex-between overflow-hidden bg-alpha"
             :style="{'border-radius': '50px','border-top-right-radius':'10px','border-bottom-right-radius':'10px'}">
          <router-link to="/operator/setting" class="flex-wrp">
            <base-avatar :src="operator.headimgurl" size="small"/>
            <div class="color1 pl5 flex-wrp flex-cell flex-middle overflow-hidden" :style="{width: rem(150)}">
              <div class="size22 color1 text-nowrap">{{operator.name}}</div>
              <div class="size16 color1 text-nowrap">个人中心</div>
            </div>
          </router-link>
          <div class="ptb10 flex-wrp flex-center">
            <div class="flex-wrp flex-center plr20 border-l">
              <div class="size22 color1 pr15 text-nowrap">{{`推荐码：${(operator.recommended_code).toUpperCase()}`}}</div>
              <div class="size16 border border-radius5 ptb5 plr10 bg-grey overflow-hidden lh150 color2 text-nowrap" @click="show_recommended=true">邀请好友</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <base-title icon="icon-qushi" title="今日数据" class="border-b"/>

    <div class="ptb15 bg-white">
      <base-data-three :data="item" v-for="(item, index) in cateGroup" :key="index" class="ptb5">
        <div slot="number" slot-scope="{ number }" class="size26 color2 lh200">{{(+number)}}</div>
        <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
      </base-data-three>
    </div>

    <!--活动公告-->
    <base-activity-swiper :data="swiperList"/>

    <base-title v-if="activities.length>0" title="我的活动" icon="icon-qushi" class="mt20 border-b"/>

    <!--我的活动-->
    <base-activity-list
      v-for="(activity, index) in activities" :key="index"
      :activity="activity"
      @on-delete="onActivityDelete"
      class="mb20"/>

    <base-title title="添加活动" class="border-b mt20"/>

    <base-man-template :number="89"/>

    <divider>我是有底线的</divider>

    <!--二维码-->
    <x-dialog :show.sync="show_recommended" :hide-on-blur="true" :dialog-style="{width: '100%'}">
      <div class="pt30 pb60 plr30">
        <div class="color2 size32 flex-wrp flex-middle pb20">推广二维码</div>
        <div class="flex-wrp flex-middle">
          <img class="bg-cover block" src="~/assets/img/s.gif"
               :style="{width: rem(250), height: rem(250),backgroundImage:`url(${operator.recommended_qrcode})`}"/>
        </div>
        <div class="size22 color2 flex-wrp flex-middle pd10">长按保存二维码</div>
        <div class="size22 color2 mt30 text-left">推广链接：</div>
        <div class="size12 color2 text-left break-word">{{operator.recommended_link}}</div>
        <div class="flex-wrp flex-middle pt20">
          <div class="link-btn-main" @click="doCopy">复制链接</div>
        </div>
        <div class="size22 color4 flex-wrp flex-middle pt20">复制不成功可长按链接进行选择复制</div>
        <div class="fixed-button h40 flex-wrp flex-center" @click.stop="show_recommended=false">关闭</div>
      </div>
    </x-dialog>

  </div>
</template>

<script>
  import chunk from 'lodash/chunk'
  import { api } from 'h5sdk'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        show_recommended: false,
        activities: [],
        // base-activity-swiper start
        // to  请按 router 中的 to 使用
        swiperList: [
          {to: '/', title: '投票活动火热开启中'},
        ],

        stats: {
          // base-data-three start
          total: [
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
          ],
          today: [
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
            {
              number: 0,
              text: '总交易额',
            },
          ],
        },
      }
    },

    mounted () {
    },

    created () {
      this.fetchActivityData()
      this.fetchStatData()
    },
    computed: {
      cateGroup () {
        return chunk(this.stats.today, 3)
      },
      ...mapState('operator', {
        'operator': 'operator',
      }),
    },

    components: {},

    methods: {
      async doCopy () {
        this.$copyText(this.ewmLink).then(
          (e) => {
            this.$vux.toast.show({
              type: 'success',
              text: `<div class='color13 size16'>复制成功</div>`,
              position: 'middle',
            })
          },
          (e) => {
            this.$vux.toast.show({
              type: 'warn',
              text: `<div class='color6 size16'>复制失败</div>`,
              position: 'middle',
            })
          }
        )
      },
      async fetchActivityData () {
        this.activities = []
        const {data} = await api.get('operator_activities')
        this.activities = data.data
      },
      async fetchStatData () {
        const {data} = await api.get('operator_home_statistics_data')
        this.stats = data.data
      },
      async onActivityDelete (activity) {
        if (!confirm('确定删除吗?')) {
          return
        }
        const {data} = await api.post('operator_activity_delete', {id: activity.id})
        this.$vux.toast.show({
          text: data.message,
        })
        this.fetchActivityData()
      },
    },

  }
</script>

<style lang="scss" scoped>

</style>

