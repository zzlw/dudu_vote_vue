<template>
    <nuxt-link :to="{path:`/gift_${gift.id}`}">
        <div class="vip-badge">
            <base-img :src="gift.thumb" class="w100"/>
        </div>
        <div class="pt15 size26 color5 text-nowrap">{{gift.title}}</div>
        <div class="flex-wrp flex-end pt15 color2 lh100">
            <div class="size30">{{gift.vip_info.fee}}</div>
            <div class="size22">积分</div>
            <div class="ml10 size22 plr10 vip-label-lt">会员</div>
        </div>
        <div class="pt15 size22 color4">非会员：{{gift.fee}}积分</div>
    </nuxt-link>
</template>
<script>
    export default {
        props: {
            gift: {
                type: Object,
                required: true
            }
        }
    }
</script>
