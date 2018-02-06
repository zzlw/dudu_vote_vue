<template>
  <div class="pb60">

    <base-navigation title="票数限制"></base-navigation>
    <group label-width="3.7rem" label-margin-right="2em" label-align="left">
      <cell class="">
        <div slot="icon" class="flex-wrp flex-end">
          <div class="size26 color2 pl5 h100">在设置时间内可以投多少票</div>
          <div class="size16 color13 pl5 h100">（投票数为0表示不限制）</div>
        </div>
      </cell>
      <cell class="">
        <div slot="icon" class="flex-wrp flex-align-center">
          <x-input v-model="minute" type="text"  class="_xInput text-center bg-white border-radius5 pd10 color2 size26 outline border"
                 :style="{border:'1px solid #ccc', width: rem(120)}"/>
          <div class="pl20">分钟</div>
          <div class="pr20">最多</div>
          <x-input v-model="number" type="text"  class="_xInput text-center bg-white border-radius5 pd10 color2 size26 outline border"
                 :style="{border:'1px solid #ccc', width: rem(120)}"/>
          <div class="pl20">票</div>
        </div>
      </cell>
      <cell class="" inline-desc='提示：设置1分钟最多30票，则表示每一名选手1分钟内最多能被30个好友投票'></cell>
    </group>
    <div class="plr20 pt30">
      <div @click="onSubmit" class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf">保存</div>
    </div>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {
        minute: 1,
        number: 0,
      }
    },
    computed: {
      ...mapState({
        'activity': state => state.activity.info,
      }),
    },
    async created () {
      this.fetchData()
    },
    methods: {
      ...mapActions({
        'reloadActivity': 'reloadActivity',
      }),
      async onSubmit () {
        if (parseInt(this.minute, 10) !== this.minute || parseInt(this.number, 10) !== this.number || this.minute <= 0 || this.number <= 0) {
          this.$vux.toast.show({
            width: this.rem(300),
            type: 'warn',
            text: '设置时间和票数均不能小于0，且不能为空，且必须为整数！',
          })
          return
        }
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_activity_config', {
          id: this.activity.id,
          vote_rule_ticket: this.minute + ':' + this.number,
        })
        this.$store.dispatch('loaded')

        this.$vux.toast.show({
          text: data.message,
        })
        await this.reloadActivity()
        this.fetchData()
      },
      async fetchData () {
        const splits = this.activity.vote_rule_ticket.split(':')
        this.minute = splits[0] && splits[0] !== splits[0] ? parseInt(splits[0]) : 1
        this.number = splits[1] && splits[1] !== splits[1] ? parseInt(splits[1]) : 0
      },
    },
  }
</script>

<style lang="scss" scoped>
._xInput{
  &::before{
    display: none;
  }
}
</style>
