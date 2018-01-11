<template>
    <nuxt-link :to="{path:`/shop_${shop.id}`}" class="inline-block w50 pd15 ptb20">
        <base-img :src="shop.thumb" class="w100" style="height: 26vw"/>
        <div class="size26 color27 ptb15 lh100 shop-title">{{shop.title}}</div>
        <div v-if="shop.tag" class="color4 size24 pt5 border-t" style="border-top-style:dotted;">{{shop.tag}}</div>
        <div class="flex-wrp flex-align-stretch flex-between pt10 lh100">
            <div v-if="shop.discount_info.vip" class="flex-wrp flex-end color27">
                <div class="size36 lh90">{{shop.discount_info.vip.scale}}</div>
                <div class="size22">折</div>
                <div class="ml10 plr10 size22 vip-label-lt">会员</div>
            </div>
            <div v-if="shop.distance" class="flex-wrp flex-end size26 color4">{{shop.distance.number}}{{shop.distance.unit}}</div>
        </div>
    </nuxt-link>
</template>
<script>
    export default {
        props: {
            shop: {
                type: Object,
                required: true
            }
        }
    }
</script>
