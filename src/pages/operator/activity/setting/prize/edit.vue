<template>
  <div class="pb60">

    <base-navigation title="添加奖品"></base-navigation>

    <group label-width="3.2rem" label-margin-right="1em" label-align="left" gutter=".3rem">
      <x-input title="奖品名称:" placeholder="请输入奖品名称" required v-model="prize.name"/>
      <x-number title="奖品数量:" v-model="prize.total_count" button-style="round" :min="0" fillable></x-number>
      <x-number title="兑换票数:" v-model="prize.price" button-style="round" :min="0" fillable></x-number>
      <x-number title="限兑数量:" v-model="prize.limited_exchange_count" button-style="round" :min="0" fillable></x-number>

      <cell title="奖品有效期：" value=""></cell>

      <datetime title="&nbsp;&nbsp;&nbsp;&nbsp;开始" class="color2" v-model="prize.valid_time_begin"
                format="YYYY-MM-DD HH:mm"
                :minute-list="['00', '15', '30', '45']" year-row="{value}年" month-row="{value}月" day-row="{value}日"
                hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>

      <datetime title="&nbsp;&nbsp;&nbsp;&nbsp;结束" class="color2" v-model="prize.valid_time_end"
                format="YYYY-MM-DD HH:mm"
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
  import { api } from 'h5sdk'

  import InputRichText from '@/components/input/rich-text/InputRichText'

  export default {
    components: {
      InputRichText,
    },
    data () {
      return {
        prize: {
          id: 0,
          name: '',
          total_count: 1,
          price: 1,
          limited_exchange_count: 1,
          valid_time_begin: '',
          valid_time_end: '',
          details: [],
          type: 1,
        },
      }
    },
    async created () {
      this.fetchData()
    },

    methods: {
      async fetchData () {
        this.$store.dispatch('loading')

        const {data} = await api.get('operator_prize', {
          prize_id: this.$route.params.prize_id,
        })
        this.$store.dispatch('loaded')

        this.prize.id = this.$route.params.prize_id
        this.prize.name = data.data.name
        this.prize.total_count = data.data.total_count
        this.prize.price = data.data.price
        this.prize.limited_exchange_count = data.data.limited_exchange_count
        this.prize.valid_time_begin = data.data.valid_time_begin
        this.prize.valid_time_end = data.data.valid_time_end
        this.prize.details = data.data.details
      },
      async onSubmit () {
        let tes = this.prize.details.find((item) => {
          return item.image !== undefined
        })

        if (tes === undefined) {
          this.$vux.toast.text('请至少添加一张图片', 'middle')
          return
        }

        let requestData = this.prize
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_prize_update', requestData)
        this.$store.dispatch('loaded')
        this.$vux.toast.text(data.message, 'middle')
        if (!data.error) {
          this.$router.back()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>
