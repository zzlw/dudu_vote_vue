<!--
  运营商申请
-->

<template>
  <div class="pb60">
    <div class="w100 flex-wrp flex-center size38 color2">
      <img width="100%" src="~/assets/img/web/1.png" class="bg-cover"/>
    </div>
    <base-title title="申请入住服务商"/>
    <group label-width="2rem" label-margin-right="2em" label-align="left" gutter="0">
      <x-input title="平台名称" placeholder="请输入平台名称" required v-model="title"/>
      <x-address title="所在地区" v-model="location" required raw-value :list="addressData"
                 value-text-align="left"></x-address>
      <x-input title="申请人" placeholder="请输入您的姓名" required v-model="name"/>
      <x-input title="联系方式" placeholder="4-10位数字或字母" required v-model="mobile"
               :is-type="()=>validateTel(mobile)"/>
      <x-input title="推荐码" placeholder="4-10位数字或字母" v-model="code"/>
    </group>
    <div class="plr30 ptb20">
      <div class="link-btn-main ptb15 size26 color1" @click="submit()">确认申请</div>
    </div>
    <div class="flex-wrp bg-white pd20">
      <div class="" :style="{width: rem(200),height: rem(200)}">
        <img width="100%" height="100%" src="~/assets/img/web/ewm.png" class="bg-cover"/>
      </div>
      <div class="flex-wrp flex-cell flex-middle pl30">
        <div class="size26 color2 ptb10">长按识别二维码快来联系我吧</div>
        <div class="flex-wrp flex-align-center ptb10">
          <div :style="{width: rem(50),height: rem(50)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-weixin1`"></use>
            </svg>
          </div>
          <div class="color4 size26 pl10">嘟嘟客服06</div>
        </div>
        <div class="flex-wrp flex-align-center ptb10">
          <div :style="{width: rem(50),height: rem(50)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-dianhua`"></use>
            </svg>
          </div>
          <div class="color4 size26 pl10">0371-65340333</div>
        </div>
      </div>
    </div>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { Value2nameFilter as value2name } from 'vux'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  const ChinaAddressV4Data = () => import(/* webpackChunkName: "ChinaAddressV4Data" */ 'vux/src/datas/china_address_v4')

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

      if (this.operator && this.operator.status === 1) {
        this.$router.push('/operator')
      }
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

        const {data} = await api.post('operator_join', newVar)

        alert(data.message)

        if (data.error) {
          return
        }

        this.$router.push('/operator/join')
      }
    }
  }
</script>

<style scoped>

</style>
