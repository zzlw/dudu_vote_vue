<template>
  <div class="pb60">
    <base-navigation title="提现"/>

    <group label-width="4em" label-margin-right="2em" label-align="left">
      <cell title="提现金额" is-link value-align="right" value="提现记录" gutter=".3rem"
            link='/operator/withdrawals-log'/>
      <cell>
        <div slot="icon" class="ptb15 flex-wrp flex-align-center flex-between">
          <div class="flex-wrp flex-align-center">
            <div class="color2 size60">￥</div>
            <input class="size26 color2 pl5 h100 nbr outline" type="number" v-model="amount"
                   :placeholder="`可提现金额${operator.balance}元`" title=""/>
          </div>
        </div>
        <div @click="amount = operator.balance" class="size26 color2 pl5 h100 color13">全部提现</div>
      </cell>
    </group>
    <group label-width="2rem" label-margin-right="2em" label-align="left">
      <!--<cell>-->
      <!--<div slot="icon" class="flex-wrp flex-align-center">-->
      <!--<div class="flex-wrp flex-align-center">-->
      <!--<div class="size22 color4 pl5 h100">活动收入：</div>-->
      <!--<div class="size22 color4 pl5 h100">876.35</div>-->
      <!--</div>-->
      <!--<div class="flex-wrp flex-align-center pl30">-->
      <!--<div class="size22 color4 pl5 h100">推荐奖励：</div>-->
      <!--<div class="size22 color4 pl5 h100">1000</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</cell>-->
      <cell>
        <div slot="icon" class="flex-wrp">
          <div class="color5 size22 lh150" :style="{'white-space':'nowrap'}">提示：</div>
          <div class="size22 color4 pl5 lh150">提现不收取任何费用，每次提现金额在2至20000元之间，提现到当前微信零钱中</div>
        </div>
      </cell>
    </group>
    <div class="plr20 ptb50">
      <div @click="onSubmit" class="link-btn-main size26 ptb15">确认提现</div>
    </div>

    <div class="size22 color4 plr30">提现到账时间：腾讯微信支付到账为T+3，即申请提现后次日起第三个工作日到账（节假日和周末顺延）</div>

    <div class="size20 color5 plr30 text-center pt60"><span>提现规则</span><br/>提现问题咨询：duud6688&nbsp;&nbsp;&nbsp;&nbsp;电话：<a
      class="" href="tel:0371-65740333">0371-65740333<span class="color13">(立即拨打)</span></a></div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import { api } from 'h5sdk'

  const {mapState} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {
        maxAmount: 1876.35,
        amount: '',
      }
    },
    computed: {
      ...mapState({
        'operator': state => state.operator.info,
      }),
    },
    async created () {},

    methods: {
      async onSubmit () {
        const that = this
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_withdraw', {
          fee: this.amount,
        })
        this.$store.dispatch('loaded', 0)

        if (data.error) {
          this.$vux.toast.show({
            text: data.message
          })
        } else {
          this.$vux.toast.show({
            text: data.message,
            onHide: () => {
              that.$router.push('withdrawals-log')
            }
          })
        }

      },
    },
  }
</script>

<style scoped>

</style>
