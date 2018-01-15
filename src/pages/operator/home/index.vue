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
        <base-activity-list :title="activityTitle" :src="activitySrc" :numbers="activityNumber" :to="activityTo" class="mb20" >
            <template slot="setUp">
                <div class="border ptb5 plr10 border-radius5 text-center color1 size22 overflow-hidden color13" :style="{'border-color':'#29d6bf'}" @click.stop="setUpStatus=!setUpStatus" >设置</div>
                <div class="relative" v-show="setUpStatus">
                    <div class="border border-radius5 overflow-hidden size22 bg-white" :style="{width: '100px', position: 'absolute', top: '2px', right: '0px'}">
                        <div class="color4 border-b text-center ptb10" @click.stop="show2=true">活动二维码</div>
                        <div class="color4 border-b text-center ptb10" @click.stop="$router.push(activitySetUp.edit)">编辑</div>
                        <div class="color4 border-b text-center ptb10" @click.stop="$router.push(activitySetUp._delete)">删除</div>
                        <div class="color4 text-center ptb10" @click.stop="$router.push(activitySetUp.more)">更多设置</div>
                    </div>
                </div>
            </template>
        </base-activity-list>
        <base-tiele title="我的活动" class="border-b"/>
        <base-man-template :src="templateSrc" :number="number" />
        <divider>我是有底线的</divider>
        <x-dialog :show.sync="show2" :hide-on-blur="true" :dialog-style="{width: '100%'}">
            <div class="pt30 pb60 plr30">
                <div class="color2 size32 flex-wrp flex-middle pb20">推广二维码</div>
                <div class="flex-wrp flex-middle" >
                    <img class="bg-cover block" src="~/assets/img/s.gif" :style="{width: rem(250), height: rem(250),backgroundImage:`url(${ewmSrc})`}" />
                </div>
                <div class="size22 color2 flex-wrp flex-middle pd10">长按保存二维码</div>
                <div class="size22 color2 mt30 text-left">推广链接：</div>
                <div class="size12 color2 text-left break-word">{{ewmLink}}</div>
                <div class="flex-wrp flex-middle pt20" >
                    <div class="link-btn-main" @click="doCopy">复制链接</div>
                </div>
                <div class="size22 color4 flex-wrp flex-middle pt20">复制不成功可长按链接进行选择复制</div>
                <div class="fixed-button h40 flex-wrp flex-center" @click.stop="show2=!show2">关闭</div>
            </div>
        </x-dialog>
    </div>
</template>

<script>
import chunk from 'lodash/chunk'
import api from '@/api'
export default {
  data() {
    return {
      show2: true,
      amount: 8888.8888,

      // home-info start
      infoSrc: "11",
      infoTitle: "王尼玛王尼玛王尼玛",
      infoText: "个人中心",
      infoNumber: "f234dsf",

      // base-activity-list start
      setUpStatus: false,
      activityTitle: "今日数据今日数据今日数据今日数据今日数据今日数据今日数据",
      activityNumber: [888, 6688, 888], // 数组顺序：浏览量、礼物数量、访客人数,
      activitySrc: "",
      activityTo: "/",
      activitySetUp: {
        ewm: () => {
          show2 = false;
        }, // 二维码
        edit: "/", // 编辑
        _delete: "/", // 删除
        more: "/" // 更多设置
      },

      // base-activity-swiper start
      // to  请按 router 中的 to 使用
      swiperList: [
        { to: "/operator/login", title: "今日数据今日数" },
        { to: "/", title: "测试1测试1测试" },
        { to: "/", title: "王尼玛" }
      ],

      // base-data-three start
      data: [
        {
          number: 167.5222,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        }
      ],
      twoDate: [
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        }
      ],

      // base-man-template start
      number: 6666.11,
      templateSrc: "",

      //x-dialog
      ewmSrc: '',
      ewmLink: "http://www.duduapp.net"
    };
  },

  mounted() {},

  computed: {
    cateGroup() {
      return chunk(this.twoDate, 3);
    }
  },

  components: {},

  methods: {
    async doCopy () {
      this.$copyText(this.ewmLink).then(
        (e)=>{
          this.$vux.toast.show({
              type: 'success',
              text:`<div class='color13 size16'>复制成功</div>`,
              position: 'middle'
          })
        },
        (e)=>{
          this.$vux.toast.show({
              type: 'warn',
              text:`<div class='color6 size16'>复制失败</div>`,
              position: 'middle'
          })
        }
      )
    },
    async fetchData () {
            const {data} = await api.get('operator_activities')
            this.activities = data.data
        }

    }

}
</script>

<style lang="scss" scoped>

</style>

