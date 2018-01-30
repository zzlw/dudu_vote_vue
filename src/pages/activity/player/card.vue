<template>
  <div v-if="player" class="">
    <div class="bg-white ptb40 color2 size26 text-center">我的推广卡</div>
    <div class="pt20 plr40 flex-wrp flex-center">
      <div class="" :style="{width: rem(600)}">
        <img width="100%" height="100%" :src="player.card_url" class="bg-cover"/>
      </div>
    </div>
    <div class="pt40 color15 size26 text-center">长按保存图片,推荐给好友</div>
  </div>
</template>


<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {},
    computed: {
      ...mapState({
        'activity': (state) => state.activity.info,
        'player': (state) => state.player.info,
        'prizes': (state) => state.prizes.info,
      }),
    },
  }
</script>

<style lang="scss" scoped>
</style>

