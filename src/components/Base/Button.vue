<template>
    <button @click="handleClick" class="weui-btn weui-btn_primary" :class="{'weui-btn_loading':loading, 'weui-btn_disabled': !enabled}" :disabled="!enabled">
        <i v-if="loading" class="weui-loading"/><slot>保存</slot>
    </button>
</template>
<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            enabled: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            handleClick (e) {
                this.$emit('click', e)
            }
        }
    }
</script>
