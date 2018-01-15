<!--
  运营商申请
-->

<template>
    <div>

        <div v-if="operator === null">
            您当前尚未申请使用投票系统, 请申请后对接使用
            <router-link to="/operator/join-form">立即申请</router-link>
        </div>

        <div v-else>
            正在审核中，请耐心等待
        </div>
    </div>
</template>

<script>
    import api from '@/api'

    export default {
        async created () {
            const {data} = await api.get('operator')
            this.operator = data.data
        },
        data () {
            return {
                operator: null
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>
