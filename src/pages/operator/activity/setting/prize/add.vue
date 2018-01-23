<template>
  <div class="pb60">
    <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
      <div class="flex-wrp flex-align-center" :style="{flex:1}">
        <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-zuojiantou`"></use>
          </svg>
        </div>
        <div class="size26 color1 pl5">返回</div>
      </div>
      <div class="color1 size26 text-center" :style="{flex:3}">
        添加奖品
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>

    <group label-width="2.1rem" label-margin-right="2em" label-align="left" gutter=".3rem">
      <x-input title="奖品名称:" placeholder="请输入奖品名称" required v-model="prize.name"/>
      <x-number title="奖品数量:" v-model="prize.total_count" button-style="round" :min="0" :max="5"></x-number>
      <x-number title="兑换票数:" v-model="prize.exchanged_count" button-style="round" :min="0" :max="5"></x-number>
      <x-number title="限兑数量:" v-model="prize.limited_exchange_count" button-style="round" :min="0" :max="5"></x-number>

      <cell title="奖品有效期" value=""></cell>

      <datetime title="&nbsp;&nbsp;&nbsp;&nbsp;开始" class="color2" v-model="prize.start_time" format="YYYY-MM-DD HH:mm"
                :minute-list="['00', '15', '30', '45']" year-row="{value}年" month-row="{value}月" day-row="{value}日"
                hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>

      <datetime title="&nbsp;&nbsp;&nbsp;&nbsp;结束" class="color2" v-model="prize.end_time" format="YYYY-MM-DD HH:mm"
                :minute-list="['00', '15', '30', '45']" year-row="{value}年" month-row="{value}月" day-row="{value}日"
                hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>


      <cell title="奖品详情" value=""></cell>
    </group>

    <InputRichText class="bg-white" v-model="prize.details"/>


    <div class="plr20 ptb10">
      <div class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf" @click="onSubmit">保存</div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'

  import InputRichText from '@/components/input/rich-text/InputRichText'

  export default {
    components: {
      InputRichText
    },
    data () {
      return {
        prize: {
          name: '',
          total_count: 0,
          exchanged_count: 0,
          limited_exchange_count: 0,
          start_time: '',
          end_time: '',
          details: [],
        },
      }
    },
    async created () {},

    methods: {
      async onSubmit () {
        let requestData = this.prize
        requestData.id = this.$route.params.id
        const {data} = await api.post('operator_prize_create', requestData)
        console.log(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
