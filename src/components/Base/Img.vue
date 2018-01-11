<template>
    <img src="~/assets/images/s.gif" class="bg-cover" :style="{backgroundImage:`url(${src})`}" @click="onClick">
</template>
<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        },
        methods: {
            onClick () {
                this.$emit('click')
            }
        }
    }
</script>
