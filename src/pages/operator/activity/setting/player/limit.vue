
<template>
    <div class="pb60">
        <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
            <div class="flex-wrp flex-align-center" :style="{flex:1}">
                <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-zuojiantou`"></use>
                    </svg>
                </div>
                <div class="size26 color1 pl5" @click="$router.back()">返回</div>
            </div>
            <div class="color1 size26 text-center"  :style="{flex:3}">
                票数限制
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="3.7rem" label-margin-right="2em" label-align="left">
            <cell class="">
                <div slot="icon" class="flex-wrp flex-end" >
                    <div class="size26 color2 pl5 h100">在设置时间内可以投多少票</div>
                    <div class="size16 color13 pl5 h100">（投票数为0表示不限制）</div>
                </div>
            </cell>
            <cell class="">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <input v-model="minute" class="bg-white border-radius5 pd10 color2 size26" :style="{border:'1px solid #ccc', width: rem(120)}"/>
                    <div class="plr20">分钟</div>
                    <div class="pr20">最多</div>
                    <input v-model="number" class="bg-white border-radius5 pd10 color2 size26" :style="{border:'1px solid #ccc', width: rem(180)}"/>
                    <div class="pl20">票</div>
                </div>
            </cell>
            <cell class="" inline-desc='温馨提示：选择设置报名表截止时间则表示报名截止时间前不能投票，不设置报名截止时间则表示可以边报名边投票'></cell>
        </group>
        <div class="plr20 pt30">
            <div @click="onSubmit" class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf" >保存</div>
        </div>
    </div>
</template>

<script>
import { api } from 'h5sdk'
export default {
  data () {
    return {
      minute: 1,
      number: 0
    }
  },
  async created () {
    this.fetchData()
  },
  methods: {
    async onSubmit () {
      let activityId = this.$route.params.activity_id
      const {data} = await api.post('operator_activity_config', {
        id: activityId,
        vote_rule_ticket: this.minute + ':' + this.number
      })

      this.$vux.toast.show({
        text: data.message,
      })
    },
    async fetchData () {
      let activityId = this.$route.params.activity_id

      const {data} = await api.get('operator_activity', {id: activityId})

      console.log(data)

      const vote_rule_ticket = data.data.vote_rule_ticket.split(':')
      this.minute = vote_rule_ticket[0] ? vote_rule_ticket[0] : 1
      this.number = vote_rule_ticket[1] ? vote_rule_ticket[1] : 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
