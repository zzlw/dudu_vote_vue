<template>
    <nuxt-link v-if="isInSite" :to="to"><slot/></nuxt-link>
    <a v-else :href="to"><slot/></a>
</template>
<script>
    export default {
        props: {
            to: {
                required: true
            }
        },
        computed: {
            isInSite () {
                if (typeof this.to === 'object') return true
                if (typeof this.to === 'string') return !/^(http:\/\/|https:\/\/|tel:)/.test(this.to)
                return false
            }
        }
    }
</script>
