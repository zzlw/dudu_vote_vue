<template>
  <div class="pb60">

    <base-navigation title="添加选手"></base-navigation>


    <OperatorActivityEditorSwiper v-model="activity.sliders" :preview="true"/>


    <group label-width="2.6rem" label-margin-right="2em" label-align="left" gutter="0">
      <x-input title="姓名:" placeholder="请输入姓名" required v-model="player.name"/>
      <x-input title="联系方式:" placeholder="请输入联系方式" type='tel' required v-model="player.mobile"/>

      <cell title="封面图片:"/>

      <div class="plr20 pb20">
        <div class="border" :style="{height: rem(200)}">
          <InputImage :style="{height: rem(200)}" v-model="player.picture" description="点击添加图片（封面展示图片）"/>
        </div>
      </div>

      <cell title="选手介绍:"/>

      <InputRichText v-model="player.introduction"/>

    </group>

    <div @click="onSubmit" class="plr20 ptb10">
      <div class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf">保存</div>
    </div>
  </div>
</template>

<script>
  import {api} from 'h5sdk'
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import InputImage from '@/components/input/InputImage'
  import OperatorActivityEditorSwiper from '@/components/input/swiper/InputSwiper'

  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('operator')

  export default {
    components: {
      InputRichText,
      InputImage,
      OperatorActivityEditorSwiper,
    },
    data () {
      return {
        bgSrc: '',
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
        'activity': state => state.activity.info,
      }),
    },
    async created () {
    },
    methods: {
      async onSubmit () {
        let activityId = this.$route.params.activity_id

        let requestData = this.player

        requestData.id = activityId

        this.$store.dispatch('loading')
        const {data} = await api.post('operator_player_create', requestData)
        this.$store.dispatch('loaded')

        this.$vux.toast.show({
          text: data.message,
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .editable {
    outline: none;
  }

</style>
