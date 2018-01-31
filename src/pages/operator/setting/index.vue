<template>
  <div class="pb60">

    <base-navigation title="修改资料"></base-navigation>
    <group label-width="2rem" label-margin-right="2em" label-align="left">

      <cell :value="operator.mobile" is-link value-align="right" link="/operator/setting/bind-mobile">
        <div slot="icon" class="flex-wrp flex-align-center">
          <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-shouji`"></use>
            </svg>
          </div>
          <div class="size26 color2 pl5 h100">手机号码</div>
        </div>
      </cell>

      <cell value="设置密码让管理员登录" is-link value-align="right" link="/operator/setting/change-password">
        <div slot="icon" class="flex-wrp flex-align-center">
          <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-mima`"></use>
            </svg>
          </div>
          <div class="size26 color2 pl5 h100">密码</div>
        </div>
      </cell>
      <cell is-link link="/operator/setting/logout">
        <div slot="icon" class="flex-wrp flex-align-center">
          <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-tuichu`"></use>
            </svg>
          </div>
          <div class="size26 color2 pl5 h100">退出登录</div>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {}
    },
    async created () {},

    computed: {
      ...mapState('operator', {
        'operator': 'operator',
      }),
    },
    methods: {
      logout () {
        console.log('logout')
      },
    },
  }
</script>

<style scoped>

</style>
