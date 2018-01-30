<!--
  运营商端
-->

<template>
  <router-view></router-view>
</template>

<script>
  import store from '@/store'

  export default {
    async beforeRouteEnter (to, from, next) {
      await store.dispatch('operator/fetchOperator')

      const operator = store.state.operator.operator

      if (operator.errorCode === 403) {
        // 未登陆
        return next('/operator-login')
      }

      if (operator.info === null || operator.info.status !== 1) {
        if (to.path.indexOf('/operator/join') !== 0) {
          return next('/operator/join')
        }
      }

      return next()
    },
  }
</script>
