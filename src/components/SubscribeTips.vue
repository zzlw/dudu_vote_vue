<template>
    <div>
        <div class="flex-wrp flex-align-center bg-white ptb10 pr20">
            <i class="i i-close color4 size32 plr20 ptb30" @click="remindNotAnyTips"/>
            <base-img v-if="config.siteConfig.remind_follow.follow_image" :src="config.siteConfig.remind_follow.follow_image" class="img-80 border-radius"/>
            <div class="flex-item w0 color6 plr20">
                <div v-if="config.siteConfig.remind_follow.follow_title" class="size28">{{config.siteConfig.remind_follow.follow_title}}</div>
                <div v-if="config.siteConfig.remind_follow.follow_content" class="pt5 size26">{{config.siteConfig.remind_follow.follow_content}}</div>
            </div>
            <div @click="toggleShowSubscribe" class="flex-wrp flex-center bg-main color1 size28 border-radius10 plr30 ptb15">关注</div>
        </div>
        <div v-if="isShowSubscribe" class="weui-mask weui-animate-fade-in"/>
        <div v-if="isShowSubscribe" class="weui-animate-fade-in fixed-center bg-white border-radius10 ptb35 plr50 subscribe-modal">
            <div class="flex-wrp flex-center ptb30 color27">
                <div class="size24">↓长按二维码关注{{config.mp_name}}↓</div>
            </div>
            <div class="flex-wrp flex-center">
                <img :src="config.siteConfig.qrcode"/>
            </div>
            <div class="border-t border-color2 flex-wrp flex-center pt30" @click.stop="toggleShowSubscribe">
                <div class="color27 size24">确认</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                isShowSubscribe: false
            }
        },
        methods: {
            ...mapActions({
                remindNotAnyTips: 'config/remindNotAnyTips'
            }),
            toggleShowSubscribe () {
                this.isShowSubscribe = !this.isShowSubscribe
            }
        }
    }
</script>

<style scoped>
    .subscribe-modal{
        z-index: 1001;
        width:80%;
    }
</style>
