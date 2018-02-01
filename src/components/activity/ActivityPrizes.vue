<template>
  <div>
    <div v-if="Number(prize.type) === 1" v-for="prize in prizes" class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动鼓励奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">{{prize.name}}</div>
        <div class="color1 size22 border-radius5 bg-ff404b plr15 ptb10">{{prize.price}}礼物票兑换</div>
      </div>
      <InputRichText class="color4 size26  ptb15" v-model="prize.details" :preview="true" />
    </div>

    <div v-if="Number(prize.type) === 0" v-for="prize in prizes" class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动排名奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">{{prize.name}}</div>
      </div>
      <InputRichText class="color4 size26  ptb15" v-model="prize.details" :preview="true" />
    </div>
  </div>
</template>

<script>
  import InputRichText from '@/components/input/rich-text/InputRichText'
  export default {
    components: {
      InputRichText,
    },
    props: [
      'prizes',
    ],
  }
</script>

<style lang="scss" scoped>
</style>
