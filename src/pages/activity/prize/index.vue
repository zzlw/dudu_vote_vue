<template>
  <div class="">
    <InputSwiper  :style="{height: rem(300)}" v-model="activity.sliders" :preview="true" :show-dots="true"/>

    <div v-if="prizes.encourage_prizes" v-for="prize in prizes.encourage_prizes" class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动鼓励奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">{{prize.name}}</div>
        <div class="color1 size22 border-radius5 bg-ff404b plr15 ptb10">{{prize.exchanged_count}}礼物票兑换</div>
      </div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <!--<div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>-->
      <!--<div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>-->

      <InputRichText class="color4 size26  ptb15" v-model="prize.details" :preview="true" />

    </div>

    <div v-if="prizes.ranking_prizes" v-for="prize in prizes.ranking_prizes" class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动排名奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">{{prize.name}}</div>
      </div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <!--<div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>-->
      <!--<div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>-->

      <InputRichText class="color4 size26  ptb15" v-model="prize.details" :preview="true" />

    </div>

    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动介绍 —</div>
      <div class="color4 size26 bg-white ptb20 plr10">
        <InputRichText v-model="activity.content" :preview="true"/>
      </div>
    </div>

  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputRichText,
      InputSwiper,
    },
    data () {
      return {
        prizes: {
        },
      }
    },
    computed: {
      ...mapState({
        activity: (state) => state.activity.info,
      }),
    },
    methods: {
      async fetchData () {
        const {data} = await api.get('activity_prizes', {activity_id: this.$route.params.activity_id})
        this.prizes = data.data
      },
    },
    mounted () {
      this.fetchData()
    },
    beforeDestroy () {
    },

  }
</script>

<style lang="scss" scoped>
  .search-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 36px;
    top: 10px;
  }

  .numberImg {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .voteTiele {
    position: absolute;
    right: 20px;
    bottom: 70px;
  }

  .numberIcon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 55px;
    height: 70px;
    &.no1 {
      background: url(~assets/img/web/no1.png) no-repeat center / cover;
    }
    &.no2 {
      background: url(~assets/img/web/logo_no2.png) no-repeat center / cover;
    }
    &.no3 {
      background: url(~assets/img/web/logo_no3.png) no-repeat center / cover;
    }
  }

  .numberText {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .guanbi {
    // position: absolute;
    // top: -10px;
    // right: -10px;
    padding: 10px 20px;
    // z-index: 999;
  }
</style>

