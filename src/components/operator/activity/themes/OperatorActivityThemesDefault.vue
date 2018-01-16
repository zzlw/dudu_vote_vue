<template>
    <div class="">
        <h3>
            添加活动-主题-Default
        </h3>

        <!--轮播图编辑器-->

        <OperatorActivityEditorSwiper v-model="activity.swiper" :preview="preview"/>

        <div class="base-data-three flex-wrp flex-around bg-white ptb10 border-b" >
            <div :class="['text-center plr60',{'border-l': index==1,'border-r': index==1}]" v-for="(item, index) in data" :key="index">
                <div class="bold size26 color5 lh150">{{item.number}}</div>
                <div class="size22 color5 lh150">{{item.text}}</div>
            </div>
        </div>

        <!--活动标题-->

        <OperatorActivityEditorText v-model="activity.title" :preview="preview"  class="pr10" >
            <div slot="icon" class="" :style="{width: rem(40),height: rem(40)}" >
                <svg class="icon base-menu-icon" aria-hidden="true">
                    <use :xlink:href="`#icon-yinliang`"></use>
                </svg>
            </div>
        </OperatorActivityEditorText>



        <div class="flex-wrp flex-middle bg-white pt20" >
            <template v-if="moment().isBefore(buying.time_start)">
                <div class="color2 size16" >距离开始</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.days}}</div><div class="color2 size16">天</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.hours}}</div><div class="color2 size16">时</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.minutes}}</div><div class="color2 size16">分</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.seconds}}</div><div class="color2 size16">秒</div>
            </template>
            <template v-else-if="moment().isBefore(buying.time_end)">
                <div class="color2 size16" >距离结束</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.days}}</div><div class="color2 size16">天</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.hours}}</div><div class="color2 size16">时</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.minutes}}</div><div class="color2 size16">分</div>
                <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.seconds}}</div><div class="color2 size16">秒</div>
            </template>

        </div>

        <div class="bg-white ptb20">
            <div class="flex-wrp flex-middle relative plr20">
                <input class="border border-radius50 plr20 size16 color2 ptb15 w100" :style="{'border-color': '#ddd'}" type="text" placeholder="请输入编号或者姓名"/>
                <div class="search-icon">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-icon-`"></use>
                    </svg>
                </div>
            </div>
        </div>

        <tab :line-width="1" active-color="#ff4622">
            <tab-item :selected="demo3 === item" v-for="(item, index) in list3" :class="[index ?'border-l':'']" @click="demo3 = item" :key="index">{{item}}</tab-item>
        </tab>

        <div class="pd5">
            <template v-for="(item, index) in cateGroup">
                <div class="flex-wrp" :key="index" >
                    <div class="pd5 flex-wrp flex-middle flex-cell relative" :style="{flex: 1}" v-for="(t, i) in item" :key="i">
                        <div class="bg-ddd" :style="{ height: rem(350)}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="block bg-cover" :style="{backgroundImage:`url(${t.srcImg})`}"/>
                            <div class="numberImg border border-radius50 bg-alpha color1 plr30 size16 ptb5">{{`${t.number}号`}}</div>
                        </div>
                        <div class="bg-white flex-wrp flex-middle flex-cell" :style="{ height: rem(80)}">
                            <div class="flex-wrp flex-between pd10 flex-align-center">
                                <div class="color5 size22">XXX</div>
                                <div class="size16 color3">{{`${t.vote}票`}}</div>
                                <div class="size16 color3">{{`${t.liwu}礼物`}}</div>
                            </div>
                            <div class="voteTiele border border-radius bg-white color3 ptb25 plr20 size26" :style="{'border-color': '#ff4622!important'}">投票</div>
                        </div>
                    </div>
                    <div class="pd5 flex-wrp flex-middle flex-cell relative" :style="{flex: 1}" v-if="item.length==1"></div>
                </div>
            </template>
        </div>

        <!--内容标题-->
        <OperatorActivityContentTitle class="bg-white" v-model="activity.contentTitle" :preview="preview"/>

        <!--内容-->
        <OperatorActivityEditorContent class="bg-white" v-model="activity.content" :preview="preview"/>
            <group>
                <cell title="基础设置" ></cell>
                <datetime class="color2" v-model="activity.startTime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']"  :title="`开始时间`" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
                <datetime class="color2" v-model="activity.endTime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']"  :title="`结束时间`" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
                <x-switch class="color2" :title="`开始报名`" inline-desc="用户是否可以自主报名" :value-map="['0', '1']" v-model="activity.signUpManner"></x-switch>
                <x-switch class="color2" :title="`投票类型`" inline-desc="一票制还是多票制（亮点为多票制）一票制：设置时间内只有一票；多票制：设置时间内对每个选手" :value-map="['0', '1']" v-model="activity.voteType"></x-switch>
                <x-number title="多久重新投票" v-model="activity.nextVoteTime" button-style="round" :min="0" :max="12"></x-number>
                <x-number title="奖品兑换数量" v-model="activity.limitedExchangeCount" button-style="round" :min="0" :max="5"></x-number>
                <cell :inline-desc="`提示:奖品在发布完成“我的活动“投票设置“奖品管理”进行添加`" ></cell>
            </group>
            <div class="flex-wrp bg-white">
                <div v-if="!preview" @click="preview=true" :style="{flex:1}" class="text-center color2 ptb20 size26">预览</div>
                <div v-if="preview" @click="preview=false" :style="{flex:1}" class="text-center color2 ptb20 size26">编辑</div>
                <div @click="publish(activity)" :style="{flex:1}" class="text-center color2 ptb20 size26">发布</div>
            </div>




    </div>
</template>

<script>
    import OperatorActivityContentTitle from '@/components/operator/activity/editor/OperatorActivityContentTitle'
    import OperatorActivityEditorText from '@/components/operator/activity/editor/OperatorActivityEditorText'
    import OperatorActivityEditorSwiper from '@/components/operator/activity/editor/OperatorActivityEditorSwiper'
    import OperatorActivityEditorContent from '@/components/operator/activity/editor/OperatorActivityEditorContent'
    import { timeDiffArray, timeDiffObj } from '@/utils'
    import moment from 'moment'
    import chunk from 'lodash/chunk'

    export default {
        props: ['activity', 'publish'],
        components: {
            OperatorActivityContentTitle,
            OperatorActivityEditorText,
            OperatorActivityEditorSwiper,
            OperatorActivityEditorContent
        },
        name: 'add',
        data () {
            return {
                preview: false,
                // base-data-three start
                data: [
                    {
                        number: 167,
                        text: '参与选手'
                    },
                    {
                        number: 167,
                        text: '累计投票'
                    },
                    {
                        number: 167,
                        text: '访问量'
                    }
                ],
                buying: {
                    time_start: 1516099695649,
                    time_end: 1516199695649
                },
                srcImg: '',
                timer: null,
                timeValue: '',
                now: moment(),
                list3: ['最热选手', '排行选手', '最新选手'],
                demo3: '最热选手',
                twoDate: [
                    {
                        srcImg: '',
                        number: 1,
                        vote: 1,
                        liwu: 2
                    },
                    {
                        srcImg: '',
                        number: 1,
                        vote: 1,
                        liwu: 2
                    },
                    {
                        srcImg: '',
                        number: 1,
                        vote: 1,
                        liwu: 2
                    },
                    {
                        srcImg: '',
                        number: 1,
                        vote: 1,
                        liwu: 2
                    },
                    {
                        srcImg: '',
                        number: 1,
                        vote: 1,
                        liwu: 2
                    }
                ]
            }
        },
        methods: {
            timeUpdate () {
                this.timeValue = timeDiffObj(
                    moment().isBefore(this.buying.time_start)
                        ? this.buying.time_start
                        : this.buying.time_end,
                    this.now
                )
            }
        },
        mounted () {
            this.timer = setInterval(this.timeUpdate, 1000)
        },
        computed: {
            cateGroup () {
                return chunk(this.twoDate, 2)
            }
        },
        beforeDestroy () {
            this.timer && clearInterval(this.timer)
        }
    }
</script>

<style lang="scss" scoped>
button {
  border: 1px solid;
}

input {
  border: 1px solid;
}

.search-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 36px;
  top: 8px;
}

.numberImg {
  position: absolute;
  top: 20px;
  right: 20px;
}
.voteTiele {
  position: absolute;
  right: 20px;
  bottom: 70px;
}
</style>
