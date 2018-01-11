<template>
    <div class="flex-wrp flex-align-center ptb25">
        <div class="flex-item" @click="onClick">
            <div class="size28 color2">{{shop.title}}</div>
            <div class="size24 color5 pt20">{{shop.address}}</div>
            <div v-if="shop.distance" class="size24 color5 pt20"><i class="i i-location-o"/>{{shop.distance.number}}{{shop.distance.unit}}</div>
        </div>
        <a v-if="shop.tel" :href="`tel:${shop.tel}`" class="flex-wrp flex-center plr55 ptb20 border-l">
            <i class="i i-phone size56 color0"/>
        </a>
    </div>
</template>
<script>
    export default {
        props: {
            shop: {
                type: Object,
                required: true
            }
        },
        methods: {
            onClick () {
                if (this.$listeners.click) {
                    this.$emit('click', this.shop)
                } else {
                    this.$router.push(`/shop_${this.shop.id}`)
                }
            }
        }
    }
</script>
