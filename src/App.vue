<template>
  <div>
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      Loading,
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading,
      }),
    },
  }
</script>


<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
</style>
<style lang="scss">
  @import "assets/scss/app";
</style>
