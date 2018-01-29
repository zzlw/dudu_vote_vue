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
        绑定手机账号
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>
    <group label-width="2rem" label-margin-right="2em" label-align="left">
      <x-input title="手机号码" placeholder="请输入手机号码" type='tel' required v-model="mobile"/>
      <x-input
        title="验证码"
        placeholder="请输入验证码"
        type='number'
        required v-model="code">
        <!-- <div class="bg-29d6bf color1 lh100 border-radius5 size16 ptb10 plr10" slot='right' >发送验证码</div> -->
        <x-button
          action-type="button"
          type="primary"
          mini
          :disabled="disabled"
          :text="`${showCode}`"
          slot='right'
          class="bg-29d6bf nbr"
          @click.native="setTime"/>
      </x-input>
    </group>
    <div class="plr20 ptb50">
      <div class="link-btn-main size26 ptb15" @click="onSubmit">提交</div>
    </div>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { timeDiffObj } from '@/utils'
  import moment from 'moment'
  import { mapState, mapMutations } from 'vuex'
  import { SAVE_OPERATOR } from '@/store/modules/operator'

  export default {
    data () {
      return {
        disabled: false,
        mobile: '',
        code: '',
        showCode: '发送验证码',
        time_start: null,
        timeValue: null,
        now: moment(),
      }
    },
    async created () {},
    computed: {
      ...mapState('operator', {
        'operator': 'operator',
      }),
    },
    methods: {
      ...mapMutations({
        'saveOp': 'operator/' + SAVE_OPERATOR,
      }),
      timeUpdate (time) {
        if (moment().isBefore(this.time_start)) {
          this.timeValue = timeDiffObj(this.time_start, time)
          this.showCode = this.timeValue.seconds + ' s'
        } else {
          this.timer && clearInterval(this.timer)
          this.showCode = '发送验证码'
          this.disabled = false
        }
      },
      async setTime () {
        let tel = this.validateTel(this.mobile)

        if (!tel.valid) {
          this.$vux.toast.text(tel.msg, 'middle')
          return
        }

        const {data} = await api.post('operator_send_captcha', {
          mobile: this.mobile,
        })

        if (data.error) {
          this.$vux.toast.text(data.message, 'middle')
          return
        }

        this.$vux.toast.text('发送成功', 'middle')
        let time = moment()
        this.time_start = time + 60000
        this.disabled = true
        this.timer = setInterval(this.timeUpdate, 1000, time)
      },
      async onSubmit () {
        const that = this
        const {data} = await api.post('operator_modify_mobile', {
          mobile: this.mobile,
          captcha: this.code,
        })

        if (data.error) {
          this.$vux.toast.text(data.message, 'middle')
          return
        }

        this.$vux.toast.show({
          width: '5rem',
          type: 'success',
          text: '操作成功',
        })

        this.saveOp({
          operator: Object.assign({}, this.operator, {
            mobile: this.mobile
          })
        })

        setTimeout(function () {
          that.$router.back()
        }, 2000)
      },
    },

    beforeDestroy () {
      this.timer && clearInterval(this.timer)
    },
  }
</script>

<style scoped>

</style>
