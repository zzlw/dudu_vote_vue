<template>
    <div class="bg-white">
        <nuxt-link :to="{path:`/shop_${shop.id}`}" class="pd20 flex-wrp flex-align-stretch lh100">
            <base-img :src="shop.thumb" class="border-radius5 thumb"/>
            <div class="flex-item flex-wrp flex-cell flex-between pl20">
                <div class="size28 color2 bold">{{shop.title}}</div>
                <div class="flex-wrp flex-align-center pr10">
                    <div class="flex-item pr30">
                        <div v-if="tags" v-for="tag in tags" class="inline-block border border-radius5 color5 size22 ptb10 plr15 mr10">{{tag}}</div>
                    </div>
                    <div v-if="shop.distance" class="size22 color5">
                        {{shop.distance.number}}{{shop.distance.unit}}
                    </div>
                </div>
                <div class="flex-wrp flex-align-center pr10">
                    <div class="flex-item flex-wrp flex-end">
                        <i class="i i-label-wxpay color8 pr10 size26"/>
                        <i class="i i-label-alipay color9 pr10 size26"/>
                        <div v-if="shop.discount_info.vip" class="flex-wrp flex-end">
                            <span class="size36 color3 lh90">{{shop.discount_info.vip.scale}}</span>
                            <span class="size22 pr10">折</span>
                            <span class="vip-label-lt size24">会员</span>
                        </div>
                    </div>
                    <div v-if="shop.uv" class="size22 color5">{{shop.uv}}人关注</div>
                </div>
            </div>
        </nuxt-link>
        <div class="flex-wrp pl20">
            <div class="blank-box"/>
            <div class="flex-item pl20">
                <nuxt-link v-if="shop.buyings" v-for="(buying,index) in shop.buyings" :key="index" :to="`/buying_${buying.id}`" class="flex-wrp ptb20 flex-align-center buying-item relative">
                    <i class="i i-label-rush color3 size32"/>
                    <div class="flex-item size24 color2 text-nowrap w0">{{buying.title}}</div>
                    <i class="i i-arrow-right-o size28 color4 plr30"/>
                </nuxt-link>
            </div>
        </div>
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
        computed: {
            tags () {
                if (this.shop.tag) {
                    return this.shop.tag.split(',')
                }
                return false
            }
        }
    }
</script>
<style scoped>
    .thumb{
        width:160px;
        height:160px;
    }
    .blank-box{
        width:160px;
    }
    .buying-item{
        border-top:1px dashed #eee;
    }
    .i-label-rush{
        position: absolute;
        left:0%;
        top:50%;
        transform: translate(-160%,-50%);
    }
</style>
