<!--
  运营商端
-->

<template>
  <div class="" :style="{paddingBottom: rem(150)}">
    <div class="bg-alpha ptb15" :style="{width: '100%', position: 'fixed', top: 0, left: 0, 'z-index': 999}">
      <div class="flex-wrp flex-between flex-align-center h100 plr50">
        <div class="flex-wrp flex-between flex-align-center">
          <div class="border-radius5 overflow-hidden bg-cover" :style="{width: rem(70),height: rem(70)}">
            <img src="~/assets/img/web/logo.png" width="100%" height="100%"   />
          </div>
          <div class="size16 color1 ml20">关注公众好了解更多！</div>
        </div>
        <div class="size16 color1 border-radius5 flex-wrp flex-center bg-red overflow-hidden ptb10 plr20">马上关注</div>
      </div>
      <div class="" :style="{width: rem(50), height: rem(40),'border-bottom-right-radius': rem(50),background: '#5250a0',position: 'fixed', top: 0, left: 0}">
        <div class="ml5" :style="{width: rem(25), height: rem(25)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-guanbi-copy`"></use>
          </svg>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="that_tabbar w100 bg-white flex-wrp flex-align-center">
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}" @click="$router.push({path: `/activity/${$route.params.id}/home`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-zhuye${$route.matched[1].meta.index=='0'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='0'?'color3':'color5'}`]">主页</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}" @click="$router.push({path: `/activity/${$route.params.id}/ranking`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-paihangbang${$route.matched[1].meta.index=='1'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='1'?'color3':'color5'}`]">排行榜</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}" @click="$router.push({path: `/activity/${$route.params.id}/prize`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-huodong${$route.matched[1].meta.index=='2'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='2'?'color3':'color5'}`]">活动奖品</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}" @click="$router.push({path: '/'})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-geren2-copy${$route.matched[1].meta.index=='3'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='3'?'color3':'color5'}`]">个人中心</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this,111)
  }
};
</script>

<style lang="scss" scoped>
.that_tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

