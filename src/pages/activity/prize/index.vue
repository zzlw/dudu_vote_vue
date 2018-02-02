<template>
  <div class="">
    <InputSwiper :style="{height: rem(300)}" v-model="activity.sliders" :preview="true" :show-dots="true"/>

    <ActivityPrizes v-if="info" :prizes="info"/>

    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动介绍 —</div>
      <div class="color4 size26 bg-white ptb20 plr10">
        <InputRichText v-model="activity.content" :preview="true"/>
      </div>
    </div>

  </div>
</template>

<script>
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import ActivityPrizes from '@/components/activity/ActivityPrizes'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputRichText,
      InputSwiper,
      ActivityPrizes,
    },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        activity: (state) => state.activity.info,
        info: (state) => state.prizes.info,
        prizes: (state) => state.prizes,
      }),
    },
    methods: {
      ...mapActions([
        'fetchActivityPrizes',
      ]),
    },
    mounted () {
      this.fetchActivityPrizes(this.activity.id)
      this.pv(this.activity.operator_id, this.activity.id, 0)
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

