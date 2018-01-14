<template>
<div class="mt20 pr30 flex-wrp bg-white">
    <div class="ptb10 flex-wrp flex-middle flex-cell">
        <div class="border-r color2 size26 pl30 pr20" :style="{'border-color':'rgba(176, 247, 237, 0.9)'}">活动工告</div>
    </div>
    <div class="pl20" :style="{flex:1}">
        <swiper :height="rem(80)" :show-dots="false" auto loop :duration="1500"  >
            <swiper-item v-for="(item, index) in data" :key="index" class="flex-wrp flex-middle flex-cell" >
                <div class="size26 color2 text-nowrap" @click="$router.push(item.to)">{{item.title}}</div>
            </swiper-item>
        </swiper>
    </div>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
      return {

      }
  },

  mounted() {},

  computed: {},

  components: {},

  methods: {}
};
</script>

<style lang="scss" scoped>

</style>

