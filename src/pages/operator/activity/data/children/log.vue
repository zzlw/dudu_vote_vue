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
        兑换记录
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>
    <group>
      <div class="pd30">
        <div class="size26 color2 mb15 text-nowrap-one">寻找最美郑州老球迷大赛开始了，赢取马尔代夫寻找最美郑州老球迷大赛开始了，赢取马尔代夫...</div>
        <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
          <div class="flex-wrp flex-align-center">
            <div class="size26 color5">你好哈士奇</div>
          </div>
          <div class="size26 color4">{{`兑换时间：${'2018-1-18 12：26'}`}}</div>
        </div>
      </div>
    </group>
    <group>
      <div class="pd30">
        <div class="size26 color2 mb15 text-nowrap-one">寻找最美郑州老球迷大赛开始了，赢取马尔代夫寻找最美郑州老球迷大赛开始了，赢取马尔代夫...</div>
        <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
          <div class="flex-wrp flex-align-center">
            <div class="size26 color5">王大雷</div>
          </div>
          <div class="size26 color4">{{`兑换时间：${'2018-1-18 12：26'}`}}</div>
        </div>
      </div>
    </group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        srcImg: '',
      }
    },
    async created () {},

    methods: {},
  }
</script>

<style scoped>

</style>
