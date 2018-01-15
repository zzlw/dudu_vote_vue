<!--
  运营商端
-->

<template>
    <router-view></router-view>
</template>

<script>
    import api from '@/api'
    import store from '@/store'

    import { SAVE_OPERATOR } from '@/store/modules/operator'

    export default {
        data () {
            return {}
        },
        async beforeRouteEnter (to, from, next) {
            if (store.state.operator.operator === null) {
                const {data} = await api.get('operator')

                if (data.error && data.error_code === 403) {
                    // 未登陆
                    return next('/operator-login')
                }

                if (data.error) {
                    // 错误信息
                    alert(data.message)
                }

                // 已登录, 保存信息
                store.commit('operator/' + SAVE_OPERATOR, {
                    operator: data.data
                })
            }

            if (store.state.operator.operator === null || store.state.operator.operator.status !== 2) {
                if (to.path.indexOf('/operator/join') !== 0) {
                    return next('/operator/join')
                }
            }

            return next()
        },
        methods: {}
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
    @import "~assets/scss/app.scss";
</style>
