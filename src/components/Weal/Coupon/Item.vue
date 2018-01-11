<template>

    <div class="mt20 mlr20 overflow-hidden">
        <div class="bg-white flex-wrp flex-item height">
            <div :style="{width: '33%'}" class="h100" >
                <div class="flex-wrp flex-cell flex-center plr10 relative h100" :class="{box3: coupon.is_vip}">
                    <!-- <div class="bg-yellow size22 color18 pd5 tips">

                        <span v-if="coupon.type == 1">满减优惠券</span>
                        <span v-if="coupon.type == 2">折扣优惠券</span>
                        <span v-if="coupon.type == 3">支付代金券</span>
                        <span v-if="coupon.type == 4">新人专享券</span>

                    </div> -->
                    <div class="color7 flex-wrp flex-align-center pt10">
                        <div v-if="coupon.value" class="flex-wrp flex-end flex-align-center">
                            <div v-if="[1, 3, 4].findIndex((n) => n == coupon.type) > -1" class="size40 lh100">￥</div>
                            <div class="size54 lh100">{{coupon.value | number_format}}</div>
                            <div v-if="coupon.type == 2" class="size52 lh100">折</div>
                        </div>
                    </div>
                    <div class="color7 size24 pt10">
                        <span v-if="coupon.type == 1">满{{coupon.condition | number_format}}元可用</span>
                        <span v-if="coupon.type == 2 && coupon.condition > 0">
                            最高抵{{coupon.condition | number_format}}元
                        </span>
                        <span v-if="coupon.type == 3"></span>
                        <span v-if="coupon.type == 4"></span>
                    </div>
                </div>
            </div>
            <div :style="{width: '50%'}" class="h100">
                <div class="pd20 flex-wrp flex-cell h100">
                    <div class="flex-wrp title flex-align-center">
                        <div class="size28 color16" :style="{flex:2,width:'60%'}">{{coupon.title}}</div>

                        <!-- <nuxt-link
                            v-if="coupon.is_receive && parseFloat(coupon.user_receive_num) >= parseInt(coupon.limit_num)"
                            :style="{boxSizing: 'box',width:'40%',maxWidth:'70px'}"
                            :to="`/shop_${coupon.shops[0].id}`"
                            class="size24 border-radius5 ptb20 plr20 color18 border border-color2 text-center">
                            立即使用
                        </nuxt-link>

                        <div
                            v-else-if="parseInt(coupon.receive_num) >= parseInt(coupon.send_num)"
                            :style="{boxSizing: 'box',width:'40%',maxWidth:'70px'}"
                            class="size24 border-radius5 ptb20 plr20 color18 border border-color2 text-center">
                            已被抢光
                        </div>

                        <div
                            v-else
                            :style="{width:'40%',maxWidth:'70px'}"
                            class="size24 border-radius5 ptb20 plr20 color18 bg-yellow text-center"
                            @click="() => onClickCoupon(coupon)">
                            立即领取
                        </div> -->

                    </div>
                    <!-- <div class="flex-wrp">
                        <div class="color33 bg-deepblue border-radius5 ptb5 plr10 size20">特权会员专享</div>
                    </div> -->
                    <div class="flex-wrp size26 pt10 color5">
                        <div>{{coupon.shop.title}}</div>
                        <!-- <div v-if="coupon.shop.distance" class="pl10 color4">
                            {{coupon.shop.distance.number}}{{coupon.shop.distance.unit}}
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- <div class="flex-wrp border-l border-l-s-d box4">
                <div class="flex-item size28 pd30 color38 wmr text-center">
                    立即使用
                </div>
            </div> -->
            <nuxt-link
                :style="{width: '17%'}"
                v-if="coupon.is_receive && parseFloat(coupon.user_receive_num) >= parseInt(coupon.limit_num)"
                :to="`/shop_${coupon.shops[0].id}`"
                class=" border-l border-l-s-d box4 flex-center flex-wrp">
                <div class=" size28 pd25 color43 wmr text-center">
                    立即使用
                </div>
            </nuxt-link>

            <div
                :style="{width: '17%'}"
                v-else-if="parseInt(coupon.receive_num) >= parseInt(coupon.send_num)"
                class=" border-l border-l-s-d box4 flex-center flex-wrp">
                <div class=" size28 pd25 color38 wmr text-center">
                    已被抢光
                </div>
            </div>

            <div
                :style="{width: '17%'}"
                v-else
                class=" border-l border-l-s-d box4 flex-center flex-wrp"
                @click="() => onClickCoupon(coupon)">
                <div class=" size28 pd25 color38 wmr text-center">
                    立即领取
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .tips {
        position: absolute;
        top: 0px;
        left: 0px;
        border-bottom-right-radius: 10px;
    }

    .box {
        position: relative;
        border-right: 3px dotted #e1e1e1;
        &:before, &:after {
            width: 20px;
            height: 20px;
            content: '';
            border-radius: 50%;
            background: #f2f3f5;
            position: absolute;
            right: -10px;
        }
        &:before {
            top: -10px;
        }
        &:after {
            bottom: -10px;
        }
    }

    .height {
        height: 210px;
    }

    .title {
        height: 84px;
    }

    .box3{
        position: relative;
        background: url(https://public.duduapp.net/dolife/static/images/member-icon.png) no-repeat;
        background-size: 2.6rem 2rem;
        border-right: 10px dotted #f4f4f4;
        &:before {
            width: 20px;
            height: 20px;
            content: '';
            border-radius: 50%;
            background: #f2f3f5;
            position: absolute;
            top: 50%;
            margin-top: -10px;

        }
        &:before {
            left: -10px;
            // z-index: 1;
        }
    }
    .box4{
        position: relative;
        &:after {
            width: 20px;
            height: 20px;
            content: '';
            border-radius: 50%;
            background: #f2f3f5;
            position: absolute;
            top: 50%;
            margin-top: -10px;

        }
        &:after {
            right: -10px;
        }
    }

</style>

<script>
    export default {
        props: ['coupon', 'onClickCoupon']
    }
</script>
