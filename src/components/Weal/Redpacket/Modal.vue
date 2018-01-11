<template>
    <div class="mask flex-wrp flex-center">
        <div class="border-radius10 relative overflow-hidden flex-wrp flex-cell box">
            <div class="flex-wrp flex-center flex-cell relative pt50" :style="{flex: 4}">
                <base-img :src="redpacket.shop.thumb" class="border-radius img-150"/>
                <div class="color20 pt40 size30">{{redpacket.shop.title}}送的现金红包</div>
            </div>
            <div class="flex-wrp flex-middle relative pt50" :style="{flex: 4}">

                <div
                    v-if="moment().isBefore(redpacket.start_time)"
                    class="color20 size36">
                    距红包开抢{{ timeDiffArray(moment(redpacket.start_time)) | join }}
                </div>

                <div
                    v-else-if="parseInt(redpacket.send_num)>=parseInt(redpacket.total_num)"
                    class="color20 size36">
                    出手慢了，红包已被抢完。
                </div>

                <div
                    class="border-radius mt30 flex-wrp flex-center img-150 circle"
                    v-else>
                    <div
                        @click="() => onGet(redpacket)"
                        :class="{rotate: redpacket.isOpening}"
                        class="flex-wrp flex-center border-radius bg-deepyellow size80 color21 img-120"
                    >
                        抢
                    </div>
                </div>

            </div>
            <div class="flex-wrp flex-center relative" :style="{flex: 2}">

                <nuxt-link
                    class="color20 size24"
                    v-if="moment().isBefore(redpacket.start_time)"
                    :to="`/shop_${redpacket.shop.id}`">
                    先去土豪店逛逛
                </nuxt-link>

                <nuxt-link
                    class="color20 size24"
                    v-if="parseInt(redpacket.send_num)>=parseInt(redpacket.total_num)"
                    :to="`/weal_redpacket_${redpacket.id}`">
                    查看领取记录&gt;
                </nuxt-link>

            </div>

            <div class='pd20 close' @click="onClose">
                <i class="i-close-o color32 size40"/>
            </div>
        </div>
    </div>
</template>


<script>
    import { timeDiffArray } from '~/utils'

    export default {
        props: ['redpacket', 'onClose', 'onGet'],
        data () {
            return {}
        },
        computed: {},
        mounted () {
        },
        methods: {
            timeDiffArray: timeDiffArray
        }
    }
</script>


<style lang="scss" scoped>

    .box {
        background: #cd533e;
        width: 560px;
        height: 720px;
        &:before {
            width: 1000px;
            height: 1000px;
            content: '';
            background: #d75940;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -90%);
            box-shadow: #bb3e27 2px 5px 10px;
        }
    }

    .rotate {
        animation: animt-rotate 1s infinite;
    }

    @keyframes animt-rotate {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }

    .circle {
        border: 5px solid #dcbc83;
    }

</style>
