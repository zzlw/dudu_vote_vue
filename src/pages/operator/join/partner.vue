<!--
  运营商申请
-->

<template>
  <div class="pb60">
    <base-navigation :title="`我是合伙人`"></base-navigation>
    <div class="w100 flex-wrp flex-center size38 color2">
      <img width="100%" src="~/assets/img/web/2.png" class="bg-cover"/>
    </div>
    <base-title title="热门投票案例" class="mt20"/>
    <div class="flex-wrp bg-white flex-between border-t plr15 ptb20">
      <div class="flex-wrp" :style="{flex:1}">
        <div class="" :style="{width: rem(170)}">
          <img v-if="src" width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${src})`}" />
        </div>
        <div class="flex-wrp flex-cell flex-between pl15" :style="{flex:1}">
          <div class="color2 size26 text-nowrap-two mb10">{{`似懂非懂范德萨范德范德萨发大似懂非懂范德萨范德范德萨发大萨发大萨发大`}}</div>
          <div class="flex-wrp">
            <div class="flex-wrp flex-cell mr20">
              <div class="size22 color2">礼物金额：</div>
              <div class="size22 color2">报名人数：</div>
              <div class="size22 color2">总票数：</div>
              <div class="size22 color2">浏览量:</div>
            </div>
            <div class="flex-wrp flex-cell">
              <div class="size22 color5">{{999999}} 元</div>
              <div class="size22 color5">{{999999}} 元</div>
              <div class="size22 color5">{{999999}} 元</div>
              <div class="size22 color5">{{999999}} 元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-wrp flex-align-center flex-bottom" :style="{width: rem(80)}">
        <div class="ptb5" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="partner flex-wrp flex-between bg-284860 ptb20 mt20" @click="$router.back()">
        <div class="" :style="{flex:1}"></div>
        <div class="color1 size26 text-center"  :style="{flex:3}">我要推荐</div>
        <div class=""  :style="{flex:1}"></div>
    </div>
    <div class="mt40"></div>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { Value2nameFilter as value2name, ChinaAddressV4Data } from 'vux'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {
        src: '',
        addressData: ChinaAddressV4Data,
        title: null,
        location: ['广东省', '深圳市', '南山区'],
        name: null,
        mobile: null,
        code: null,
      }
    },
    computed: {
      ...mapState({
        'operator': state => state.operator.info
      }),
    },
    async created () {
      await this.fetchOperator()

      // if (this.operator && this.operator.status === 1) {
      //   this.$router.push('/operator')
      // }
    },
    methods: {
      ...mapActions([
        'fetchOperator',
      ]),
      async submit () {
        let location = value2name(this.location, ChinaAddressV4Data)

        console.log(location)

        let code = this.code
        let newVar = {
          title: this.title,
          location: location,
          name: this.name,
          mobile: this.mobile
        }

        if (code) {
          newVar.code = code
        }

        this.$store.dispatch('loading')
        const {data} = await api.post('operator_join', newVar)
        this.$store.dispatch('loaded')

        this.$vux.alert.show({
          title: '提示',
          content: data.message,
          onShow () {
          },
          onHide () {
          }
        })

        if (data.error) {
          return
        }

        this.$router.push('/operator/join')
      }
    }
  }
</script>

<style lang="scss" scoped>
.partner{
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
}
</style>
