<template>
    <nuxt-link class="block" :to="`/buying_${buying.id}`">
        <div class="relative vip-badge">
            <base-img :src="buying.thumb" class="block w100" style="height:40vw"/>
            <div v-if="moment().isBefore(buying.time_start)" class="color1 size26 timer">距开始{{timeValue}}</div>
            <div v-else-if="moment().isBefore(buying.time_end)" class="color1 size26 timer">距结束{{timeValue}}</div>
            <div class="bg-alpha size26 view">
                <div class="color1">{{buying.views}}人关注</div>
            </div>
        </div>
        <div class="plr20 ptb20">
            <div class="size26 color2">{{buying.title}}</div>
            <div class="flex-wrp flex-align-center flex-between">
                <div class="flex-wrp flex-end pt15 lh100">
                    <div class="size26">￥</div>
                    <div class="size36 lh90">{{buying.vip_info.fee}}</div>
                    <div class="ml10 size22 plr10 vip-icon vip-label-lt ml20 mr20">会员</div>
                    <div class="size26">￥</div>
                    <del class="size36 lh90">{{buying.fee}}</del>
                </div>
                <div v-if="moment().isBefore(buying.time_start)" class="size26 color1 ptb10 plr30 border-radius30 bg-gray">待抢购</div>
                <div v-else-if="moment().isAfter(buying.time_end)" class="size26 color1 ptb10 plr30 border-radius30 bg-gray">已结束</div>
                <div v-else-if="buying.stock <= 0" class="size26 color1 ptb10 plr30 border-radius30 bg-gray">已抢光</div>
                <div v-else class="size26 color1 ptb10 plr30 border-radius30 btn_buy">立即抢购</div>
            </div>
            <span class="mt10 inline-block price-label-lt size22 color3 ptb5 plr10 border-radius5">可用会员优惠金￥{{(buying.fee - buying.vip_info.fee) | number_format}}</span>
        </div>
    </nuxt-link>
</template>
<script>
    import moment from 'moment'
    import {timeDiffArray} from '~/utils'
    export default {
        data () {
            return {
                timer: null,
                timeValue: ''
            }
        },
        props: {
            buying: {
                type: Object,
                required: true
            }
        },
        mounted () {
            this.timer = setInterval(this.timeUpdate, 1000)
        },
        beforeDestroy () {
            this.timer && clearInterval(this.timer)
        },
        methods: {
            timeUpdate () {
                if (moment().isBefore(this.buying.time_start)) {
                    this.timeValue = timeDiffArray(this.buying.time_start, this.now).join(':')
                } else {
                    this.timeValue = timeDiffArray(this.buying.time_end, this.now).join(':')
                }
            }
        }
    }
</script>
<style scoped>
    .timer{
        position: absolute;
        left:16px;
        bottom:16px;
        text-shadow: rgba(0,0,0,.8) 0 0 10px;
    }
    .view{
        position: absolute;
        bottom: 10px;
        right:0;
        padding:13px 30px 13px 60px;
        border-radius: 30px 0 0 30px;
        background:url('https://public.duduapp.net/dolife/static/images/vip_icon_heart.png') no-repeat 20px center;
        background-size:26px auto;
    }
    .btn_buy{
        background:linear-gradient(to right,#fa7c3e,#f44c2d);
    }
</style>
