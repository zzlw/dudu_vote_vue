<template>
    <nuxt-link :key="buying.id" :to="'/buying_'+buying.id" class="block pd25 bg-white mb30">
        <div class="relative overflow-hidden">
            <base-img :src="buying.thumb" class="block w100" style="height:40vw;"/>
            <div class="flex-wrp flex-between w100 pd10 size24 color1 bottom">
                <div v-if="moment().isBefore(buying.time_start)">距开始{{timeValue}}</div>
                <div v-else-if="moment().isBefore(buying.time_end)">距结束{{timeValue}}</div>
                <div>{{buying.views}}人关注</div>
            </div>
            <div class="size24 color1 text-center badge">
                剩余{{buying.stock}}份
            </div>
        </div>
        <div class="ptb15 text-nowrap size28 color2">{{buying.title}}</div>
        <div class="flex-wrp flex-align-center flex-between">
            <div class="flex-wrp flex-align-stretch lh100 pt15 flex-end">
                <div class="flex-wrp flex-end color3 size20">
                    <div class="size28">￥</div>
                    <div class="size38 lh90">{{buying.fee}}</div>
                </div>
                <div v-if="buying.vip_info" class="flex-wrp flex-end pl20">
                    <div class="vip-label-rb size24">会员</div>
                    <div class="flex-wrp flex-end color3 size22 pl10">
                        <div class="size28">￥</div>
                        <div class="size38 lh90">{{buying.vip_info.fee}}</div>
                    </div>
                </div>
                <div v-else class="flex-wrp flex-end pl20">
                    <div class="flex-wrp flex-end color5 size22 pl10">
                        <div class="size28">￥</div>
                        <div class="size28 lh90 del">{{buying.price}}</div>
                    </div>
                </div>
            </div>
            <div class="flex-wrp flex-cell flex-middle flex-align-center">
                <div v-if="moment().isBefore(buying.time_start)" class="ptb10 plr40 size28 border-radius40 button bg-main color1">待抢购</div>
                <div v-else-if="moment().isAfter(buying.time_end)" class="ptb10 plr40 size28 border-radius40 button bg-gray color1">已结束</div>
                <div v-else-if="buying.stock <= 0" class="ptb5 plr40 color1 size28 border-radius50 button bg-gray color1">已抢光</div>
                <div v-else class="ptb5 plr40 color1 size28 border-radius50 bg-main">立即抢购</div>
            </div>
        </div>
    </nuxt-link>
</template>
<script>
    import moment from 'moment'
    import {timeDiffObj} from '~/utils'
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
                const timeObj = timeDiffObj(moment().isBefore(this.buying.time_start) ? this.buying.time_start : this.buying.time_end, this.now)
                this.timeValue = `${timeObj.days > 0 ? timeObj.days + '天 ' : ''}${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`
            }
        }
    }
</script>
<style scoped>
    .bottom{
        position: absolute;
        bottom:0;
        left:0;
        background: linear-gradient(bottom ,rgba(0,0,0,.5), rgba(0,0,0,.0));
    }
    .badge{
        position: absolute;
        width:200px;
        top:30px;
        left:-55px;
        background-color: rgba(26,188,156,.8);
        transform: rotate(-45deg);
    }
</style>
