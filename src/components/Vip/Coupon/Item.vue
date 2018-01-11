<template>
    <div class="relative flex-wrp coupon">
        <div class="flex-item plr15 vip-badge flex-wrp pt40">
            <div class="flex-wrp flex-cell flex-end color3 size22">
                <div class="text-right color2 lh100">
                    <span v-if="[1, 3, 4].findIndex(n => n == coupon.type) > -1" class="size26">￥</span>
                    <span class="size60 color37 lighter">{{coupon.value | number_format}}</span>
                    <span v-if="coupon.type == 2" class="size26">折</span>
                </div>
                <div class="color36 bold nowrap">
                    <template v-if="coupon.type == 1">
                        满减优惠券
                    </template>
                    <template v-else-if="coupon.type == 2">
                        折扣优惠券
                    </template>
                    <template v-else-if="coupon.type == 3">
                        支付代金券
                    </template>
                    <template v-else-if="coupon.type == 4">
                        新人专享券
                    </template>
                </div>
            </div>
            <div class="color27 pl20 text-nowrap width-auto"><span class="size28 color37 lighter">{{coupon.title}}</span>
                <div class="color4 size22">
                    <template v-if="coupon.type == 1">
                        满{{coupon.condition}}元可用
                    </template>
                    <template v-else-if="coupon.type == 1 && coupon.condition != 0">
                        最高抵{{coupon.condition}}元
                    </template>
                </div>
            </div>
        </div>

        <nuxt-link v-if="coupon.is_receive" :to="`/shop_${coupon.shop.id}`" class="size26 color36 plr20 ptb30 coupon-btn">立即使用</nuxt-link>
        <div class="size26 color36 plr20 ptb30 coupon-btn" @click="getCoupon(coupon)" v-else>立即领取</div>
    </div>
</template>
<script>
    export default {
        props: {
            getCoupon: {
                required: true
            },
            coupon: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .coupon{
        box-shadow: 0 0 0.21875rem rgba(0,0,0,.2);
    }
    .coupon-btn{
        position: relative;
        width:62px;
        white-space:normal;
        line-height: 100%;
        border-left:1px dashed #d9d9d9;
        &:before,
        &:after{
            display: block;
            content:'';
            width:10px;
            height:10px;
            position: absolute;
            left:-5px;
            background: #fff;
            transform: rotate(-45deg);
            border:1px solid rgba(0,0,0,.1);
            border-width:0 0 1px 1px;
        }
        &:before{
            top:-5px;
        }
        &:after{
            bottom:-5px;
            border-width:1px 1px 0 0;
        }
    }
</style>
