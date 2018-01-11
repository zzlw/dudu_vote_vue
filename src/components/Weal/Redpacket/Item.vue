<template>
    <div>
        <div class="flex-wrp flex-center ptb30">
            <div class="size26 color1 border-radius10 ptb5 plr10 time">
                {{redpacket.start_time | datetime_format("MM-DD HH:mm")}}
            </div>
        </div>
        <div class="flex-wrp">
            <div class="plr20">
                <base-img :src="redpacket.shop.thumb" class="img-80"/>
            </div>
            <div class="flex-item pr30">
                <div class="size26 color5 lh100">{{redpacket.shop.title}}</div>
                <div class="border-radius15 mt10 box15" @click="onClickRedpacket">
                    <div class="pd25  flex-wrp bg-redpacket relative redpacket">
                        <span class="box-icon">
                            <!-- <span class="path1"/> -->
                            <!-- <span class="path2"/> -->
                            <!-- <span class="path3"/> -->
                            <!-- <span class="path4"/> -->
                        </span>
                        <div class="flex-item w0 size26 pl20 lh150 color1 redtitle">{{redpacket.title}}</div>
                    </div>
                    <div class="size24 bg-white color4 ptb10 plr25 box14">领取现金红包</div>
                </div>
            </div>
            <div class="plr50"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .time {
        background: #cecece;
    }
    .box15{
        position: relative;
        &:before {
            display: block;
            content: '';
            position: absolute;
            left: -29px;
            top: 45px;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border: 15px solid #f99d3a;
            border-color: transparent #f99d3a transparent transparent;
        }
    }

    .redpacket {
        border-radius: 10px 10px 0 0;
        overflow: hidden;

    }

    .bg-redpacket {
        background-color: #f99d3a !important;
    }

    .redtitle {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .box14{
        position: relative;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        &:before {
            width: 26px;
            height: 26px;
            content: '';
            position: absolute;
            bottom: 14px;
            right: 18px;
            background: url(https://public.duduapp.net/dolife/static/images/logo-1.png) no-repeat center / cover;
        }
    }

    .box-icon{
        display: inline-block;
        width: 76px;
        height: 84px;
        background: url(https://public.duduapp.net/dolife/static/images/red-icon.png) no-repeat center / cover;
    }
</style>

<script>
    export default {
        props: ['redpacket', 'onClickHandler'],
        data () {
            return {}
        },
        computed: {},
        async asyncData () {
            return {}
        },
        methods: {
            onClickRedpacket () {
                this.onClickHandler(this.redpacket)
            }
        }
    }
</script>
