<!--
  运营商端
-->

<template>
  <div class="" :style="{paddingBottom: $route.meta.notNav?0:rem(100)}">
    <div v-show="follow&&activity.info&&activity.info.subscribe_config.is_show" class="bg-alpha ptb15"
         :style="{width: '100%', position: 'fixed', top: 0, left: 0, 'z-index': 999}">
      <div class="flex-wrp flex-between flex-align-center h100 plr50">
        <div class="flex-wrp flex-between flex-align-center">
          <div class="border-radius5 overflow-hidden bg-cover" :style="{width: rem(70),height: rem(70)}">
            <img :src="activity.info&&activity.info.subscribe_config.logo" width="100%" height="100%"/>
          </div>
          <div class="size16 color1 ml20">关注公众好了解更多！</div>
        </div>
        <div class="size16 color1 border-radius5 flex-wrp flex-center bg-red overflow-hidden ptb10 plr20"  @click.stop="showDialog = true">马上关注</div>
      </div>
      <div class=""
           @click="follow=false"
           :style="{width: rem(50), height: rem(40),'border-bottom-right-radius': rem(50),background: '#5250a0',position: 'fixed', top: 0, left: 0}">
        <div class="ml5" :style="{width: rem(25), height: rem(25)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-guanbi-copy`"></use>
          </svg>
        </div>
      </div>
    </div>

    <div v-if="!activity.info">加载中</div>
    <router-view v-if="activity.info"></router-view>

    <div v-show="!$route.meta.notNav" class="that_tabbar w100 bg-white flex-wrp flex-align-center">
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}"
           @click="$router.push({path: `/activity/${$route.params.activity_id}`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-zhuye${$route.matched[1].meta.index=='0'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='0'?'color3':'color5'}`]">主页</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}"
           @click="$router.push({path: `/activity/${$route.params.activity_id}/ranking`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-paihangbang${$route.matched[1].meta.index=='1'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='1'?'color3':'color5'}`]">排行榜</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}"
           @click="$router.push({path: `/activity/${$route.params.activity_id}/prize`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-huodong${$route.matched[1].meta.index=='2'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='2'?'color3':'color5'}`]">活动奖品</div>
      </div>
      <div class="flex-wrp ptb5 flex-center flex-cell" :style="{flex: 1}"
           @click="$router.push({path: `/activity/${$route.params.activity_id}/personal`})">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-geren2-copy${$route.matched[1].meta.index=='3'?'-copy':''}`"></use>
          </svg>
        </div>
        <div class="size16" :class="[`${$route.matched[1].meta.index=='3'?'color3':'color5'}`]">个人中心</div>
      </div>
    </div>
    <!--二维码-->
    <x-dialog :show.sync="showDialog" :hide-on-blur="true" :dialog-style="{width: '100%'}">
      <div class="pt30 pb60 plr30">
        <div class="color2 size32 flex-wrp flex-middle pb20">二维码</div>
        <div class="flex-wrp flex-middle">
          <img class="bg-cover block" src="~/assets/img/s.gif"
               :style="{width: rem(250), height: rem(250),backgroundImage:`url(${activity.info&&activity.info.subscribe_config.qrcode})`}"/>
        </div>
        <div class="size22 color2 flex-wrp flex-middle pd10">长按识别二维码</div>

        <div class="fixed-button h40 flex-wrp flex-center" @click.stop="showDialog = !showDialog">关闭</div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('activity')

  export default {
    data () {
      return {
        follow: true,
        showDialog: false,
      }
    },
    computed: {
      ...mapState([
        'activity',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchActivity',
      ]),
    },
    mounted () {
      let activityId = this.$route.params.activity_id
      if (
        this.activity.info === null ||
        this.activity.info.id !== activityId
      ) {
        this.fetchActivity(activityId)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .that_tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

