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
      <div class="color1 size26 text-center" :style="{flex:3}">
        我要报名
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>


    <InputSwiper v-model="activity.sliders" :preview="true" :show-dots="true"/>


    <group label-width="2.6rem" label-margin-right="2em" label-align="left" gutter="0">
      <x-input title="姓名:" placeholder="请输入姓名" required v-model="player.name"/>
      <x-input title="联系方式:" placeholder="请输入手机号" type='tel' required v-model="player.mobile"/>
      <cell title="封面:"/>

      <div class="plr20 pb20">
        <div class="border" :style="{height: rem(200)}">
          <InputImage :style="{height: rem(200)}" v-model="player.picture" description="点击添加图片（封面展示图片）"/>
        </div>
      </div>

      <cell title="选手介绍:"/>

      <InputRichText v-model="player.introduction"/>

    </group>


    <div class="plr20 ptb10">
      <div @click="onSubmit" class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf">确认报名</div>
    </div>
  </div>
</template>

<script>
  import InputImage from '@/components/input/InputImage'
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import { createNamespacedHelpers } from 'vuex'
  import { api } from 'h5sdk'

  const {mapState} = createNamespacedHelpers('activity')
  export default {
    components: {
      InputSwiper,
      InputRichText,
      InputImage,
    },
    data () {
      return {
        player: {
          name: '',
          mobile: '',
          picture: '',
          introduction: [],
        },
      }
    },
    computed: {
      ...mapState({
        'activity': (state) => state.activity.info,
      }),
    },
    async created () {},

    methods: {
      async onSubmit () {
        let activityId = this.activity.id
        let requestData = this.player
        requestData.activity_id = activityId
        const {data} = await api.post('activity_sign_in', requestData)

        this.$vux.toast.show({
          text: data.message,
        })

        if (!data.error) {
          this.$router.back()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .editable {
    outline: none;
  }

</style>
