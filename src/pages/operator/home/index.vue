<template>
    <div>
        <div class="bg-deepblue">
            <div class="flex-wrp flex-center ptb60">
                <div class="size60 color1">{{(+amount).toFixed(2)}}</div>
                <div class="border border-radius5 ptb5 plr20 ml20 color1 size16">立即提现</div>
            </div>
            <base-data-three :data="data">
                <div slot="number" slot-scope="{ number }" class="bold size26 color1 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
            </base-data-three>
            <div class="plr40 ptb20">
                <home-info :src="infoSrc" :title="infoTitle" :text="infoText" :number="infoNumber" />
            </div>
        </div>
        <base-tiele icon="icon-qushi" title="今日数据" class="border-b"/>
        <div class="ptb15 bg-white">
            <base-data-three :data="item" v-for="(item, index) in cateGroup" :key="index" class="ptb5" >
                <div slot="number" slot-scope="{ number }" class="size26 color2 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
            </base-data-three>
        </div>
        <base-activity-swiper  :data="swiperList"/>
        <base-tiele icon="icon-qushi" class="mt20 border-b" title="今日数据"/>
        <base-activity-list :title="activityTitle" :src="activitySrc" :setUp="activitySetUp" :numbers="activityNumber" :to="activityTo" class="mb20"/>
        <base-tiele title="我的活动" class="border-b"/>
        <base-man-template :src="templateSrc" :number="number" />
        <divider>我是有底线的</divider>
        <x-dialog class="d" :hide-on-blur="true"></x-dialog>
    </div>
</template>

<script>
import chunk from 'lodash/chunk'
import api from '@/api'
export default {
    data () {
        return {
            amount: 8888.8888,

            // home-info start
            infoSrc: '11',
            infoTitle: '王尼玛王尼玛王尼玛',
            infoText: '个人中心',
            infoNumber: 'f234dsf',

            // base-activity-list start
            activityTitle: '今日数据今日数据今日数据今日数据今日数据今日数据今日数据',
            activityNumber: [888, 6688, 888], // 数组顺序：浏览量、礼物数量、访客人数,
            activitySrc: '',
            activityTo: '/',
            activitySetUp: {
                ewm: '/', // 二维码
                edit: '/', // 编辑
                _delete: '/', // 删除
                more: '/' // 更多设置
            },

            // base-activity-swiper start
            // to  请按 router 中的 to 使用
            swiperList: [
                { to: '/operator/login', title: '今日数据今日数' },
                { to: '/', title: '测试1测试1测试' },
                { to: '/', title: '王尼玛' }
            ],

            // base-data-three start
            data: [
                {
                    number: 167.5222,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                }
            ],
            twoDate: [
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                },
                {
                    number: 167.5,
                    text: '总交易额'
                }
            ],

            // base-man-template start
            number: 6666.11,
            templateSrc: ''
        }
    },

    mounted () {},

    computed: {
        cateGroup () {
            return chunk(this.twoDate, 3)
        }
    },

    components: {},

    methods: {
        async fetchData () {
            const {data} = await api.get('operator_activities')
            this.activities = data.data
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

