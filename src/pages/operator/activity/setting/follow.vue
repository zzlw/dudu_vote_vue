<template>
  <div class="pb60">

    <base-navigation title="关注设置"></base-navigation>

    <group label-width="3rem" label-align="left" gutter=".3rem">
      <x-input title="关注引导语:" placeholder="填写关注引导语" required v-model="subscribe_config.guide_language"/>

      <cell class="">
        <label slot="icon" class="weui-label">关注LOGO:</label>
        <InputImage slot="title" v-model="subscribe_config.logo"/>
      </cell>

      <cell class="">
        <label slot="icon" class="weui-label">关注二维码:</label>
        <InputImage slot="title" v-model="subscribe_config.qrcode"/>
      </cell>

      <x-switch class="color2" title="关注显示" :value-map="['0', '1']" v-model="subscribe_config.is_show"></x-switch>
    </group>

    <div class="plr20 pt30">
      <div @click="onSubmit" class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf">保存</div>
    </div>
  </div>
</template>

<script>
  import InputImage from '@/components/input/InputImage'
  import { api } from 'h5sdk'

  export default {
    components: {
      InputImage
    },
    data () {
      return {
        subscribe_config: {
          guide_language: '',
          logo: '',
          qrcode: '',
          is_show: '0'
        }
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
          subscribe_config: this.subscribe_config
        })

        this.$vux.toast.show({
          text: data.message,
        })
      },
      async fetchData () {
        let activityId = this.$route.params.activity_id

        const {data} = await api.get('operator_activity', {id: activityId})

        console.log(data)

        this.subscribe_config.guide_language = data.data.subscribe_config.guide_language
        this.subscribe_config.logo = data.data.subscribe_config.logo
        this.subscribe_config.qrcode = data.data.subscribe_config.qrcode
        this.subscribe_config.is_show = data.data.subscribe_config.is_show
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
