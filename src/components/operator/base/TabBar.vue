<template>
  <div v-if="showTabBar" class="fixed-bottom weui-tabbar">
    <router-link :to="n.link" class="weui-tabbar__item" active-class="weui-bar__item_on" :exact="n.link == '/'"
                 v-for="(n,i) in config.navs" :key="i">
      <div class="weui-tabbar__icon">
        <svg class="icon base-menu-icon" aria-hidden="true">
          <use :xlink:href="`#${n.icon}`"></use>
        </svg>
      </div>
      <p class="weui-tabbar__label">{{n.title}}</p>
    </router-link>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  // import { isAndroid, isWechat } from 'utils/index'
  // import { isAndroid, isWechat } from 'utils/index'
  // import { wx } from '@/sdk/wx'

  export default {
    computed: {
      ...mapState({
        config: state => state.config,
        wx: state => state.wx
      }),
      showTabBar () {
        return this.config.navs && this.config.navs.find(n => n.link === this.$route.path)
      }
    },
    async mounted () {
      // if (isWechat()) {
      //   this.initWxConfig()
      //   wx.ready().then(() => {}, err => {
      //     console.log(err)
      //     this.initWxConfig(1)
      //   })
      //   if (isAndroid()) {
      //     this.$router.afterEach(async (to) => {
      //       const url = `${location.protocol}//${location.hostname}${to.fullPath}`
      //       if (this.wx.config[url]) {
      //         console.log('set:wxconfig:store', url)
      //         wx.setConfig(this.wx.config[url])
      //       } else {
      //         this.initWxConfig()
      //       }
      //     })
      //   }
      // }
    },
    methods: {
      ...mapActions({
        // setConfig: 'wx/setConfig'
      }),
      async initWxConfig (force = '') {
        // const url = `${location.protocol}//${location.hostname}${this.$route.fullPath}`
        //
        // const {data, status} = await http.get('/wxconfig', {
        //   url: encodeURIComponent(url),
        //   force
        // })
        //
        // if (status === 200 && data.wxConfig) {
        //   console.log('init:wxconfig:' + force + ' ' + url)
        //   this.setConfig({
        //     url,
        //     config: data.wxConfig
        //   })
        //   wx.setConfig(data.wxConfig)
        // }
      }
    }
  }
</script>
