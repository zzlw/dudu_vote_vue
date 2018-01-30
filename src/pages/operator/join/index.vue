<!--
  运营商申请
-->

<template>
  <div>
    <x-dialog :show.sync="showDialog" :hide-on-blur="false" :dialog-style="{width: '100%'}">
      <div class="plr30">
        <div class="color2 size32 flex-wrp flex-middle ptb30 border-b">温馨提示</div>
        <div v-if="operator === null" class="pb50">
          <div class="size26 color2 ptb30">您当前尚未申请使用投票系统, 请申请后对接使用</div>
          <div class="plr60">
            <router-link to="/operator/join-form" class="link-btn-main ptb15 size26">立即申请</router-link>
          </div>
        </div>
        <div class="size26 color2 flex-wrp flex-center pt50 pb50" v-else>
          正在审核中，请耐心等待...
        </div>
      </div>
    </x-dialog>

    <div class="bg-deepblue">
      <div class="flex-wrp flex-center ptb60">
        <div class="size60 color1">0.00</div>
        <div class="border border-radius5 ptb5 plr20 ml20 color1 size16">立即提现</div>
      </div>
      <base-data-three :data="data">
        <div slot="number" slot-scope="{ number }" class="bold size26 color1 lh200">{{number}}</div>
        <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
      </base-data-three>
      <div class="plr40 ptb20">
        <home-info :src="`#`" :title="`王先生`" :text="`个人中心`" number="000000"/>
      </div>
    </div>
    <base-title icon="icon-qushi" title="今日数据" class="border-b"/>
    <div class="ptb15 bg-white">
      <base-data-three :data="item" v-for="(item, index) in cateGroup" :key="index" class="ptb5">
      </base-data-three>
    </div>
    <base-activity-swiper :data="swiperList"/>

    <!--<base-title v-if="false" icon="icon-qushi" class="mt20 border-b" title="我的活动"/>-->
    <!--<base-activity-list :activity="{}" class="mb20"/>-->

    <base-title title="添加活动" class="border-b"/>

    <base-man-template :number="100"/>
    <divider>我是有底线的</divider>

  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    async created () {
      await this.fetchOperator()

      if (this.operator && this.operator.status === 1) {
        this.$router.push('/operator')
      }
    },
    data () {
      return {
        showDialog: true,
        data: [
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
        twoDate: [
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
      }
    },
    computed: {
      ...mapState({
        'operator': state => state.operator.info,
      }),
    },
    methods: {
      ...mapActions([
        'fetchOperator',
      ]),
    },
  }
</script>
