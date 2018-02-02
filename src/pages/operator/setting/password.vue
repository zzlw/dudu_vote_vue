<template>
  <div>

    <base-navigation title="修改资料"></base-navigation>
    <group label-width="2rem" label-margin-right="2em" label-align="left">
      <x-input title="手机号码" placeholder="请输入手机号" disabled :value="operator.mobile"/>

      <x-input title="密码" placeholder="4-32位数字或字母"
               :type="showPassword?'text':'password'"
               required v-model="password"
               :is-type="()=>validatePass(this.password)">
        <x-button
          action-type="button"
          type="primary"
          mini
          :text="showPassword?'隐藏密码':'显示密码'"
          slot='right'
          class="bg-29d6bf nbr"
          @click.native="showPassword=!showPassword"/>
      </x-input>
    </group>
    <div class="plr20 ptb50">
      <div class="link-btn-main size26 ptb15" @click="onSubmit">确认修改</div>
    </div>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
  import { api } from 'h5sdk'

  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {
        status: false,
        mobile: '',
        password: '',
        showPassword: false,
      }
    },
    computed: {
      ...mapState({
        'operator': state => state.operator.info,
      }),
    },
    methods: {
      async onSubmit () {
        const that = this
        let text = this.isEmpty([this.validatePass(this.password)])
        if (text) {
          this.$vux.toast.show({
            width: '8rem',
            type: 'warn',
            text,
          })
          return
        }
        const {data} = await api.post('operator_modify_password', {
          password: this.password,
        })

        if (data.error) {
          alert(data.message)
          return
        }

        this.$vux.toast.show({
          width: '5rem',
          type: 'success',
          text: '操作成功',
        })
        setTimeout(function () {
          that.$router.back()
        }, 2000)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

