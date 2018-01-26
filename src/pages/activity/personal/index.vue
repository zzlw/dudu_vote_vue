<template>
  <div class="">
    <div class="bg-cover" :style="{height: rem(300),backgroundColor:`#0ccdb6`}">
      <div class="flex-wrp flex-cell flex-align-center pt30">
          <base-avatar :src="srcImg" class="bg-white" />
          <div class="color1 size26 pt20">{{`你好哈士奇`}}</div>
      </div>
      <div class="flex-wrp flex-between plr30 pt15">
        <div class="color1 size22">今日票数:{{1050}}</div>
        <div class="color1 size22">编号:{{565}}</div>
        <div class="color1 size22">今日礼物:{{1698}}</div>
      </div>
    </div>
    <div class="base-data-three flex-wrp flex-around bg-white ptb15 plr10 border-b" >
        <div :class="['text-center',{'border-r': index!==(data.length-1)}]" v-for="(item, index) in data" :key="index" :style="{flex:1}">
            <div class="size26 color5 lh150">{{item.number}}</div>
            <div class="size16 color5 lh150 pt5">{{item.text}}</div>
        </div>
    </div>

    <div class="bg-white mt20 plr20 pb15">
      <div class="color2 size22 ptb10">收到的礼物</div>
      <div class="flex-wrp">
        <div class="flex-wrp flex-cell flex-center mlr10" v-for="(item, index) in listSix" :key="index">
          <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(100), height: rem(100)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${item.srcImg})`}" />
          </div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.title}}</div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.time}}</div>
        </div>
      </div>
    </div>


    <group label-width="2rem" label-margin-right="2em" label-align="left" gutter=".32rem">
      <cell title="我的奖品" is-link value-align="right" link="/operator/setting/bind-mobile"></cell>
    </group>

    <group label-width="2rem" label-margin-right="2em" label-align="left" gutter=".32rem">
      <cell title="我的奖品" value="生成海报" is-link value-align="right" link="/operator/setting/bind-mobile"></cell>
      <cell >
        <div class="color4 size22 lh200 text-left inline-block">{{`${text}  ${ewmLink}`}}<div class="color13 size16 inline-block plr15 lh100 ptb10 ml10 border-radius5" :style="{'border': '1px solid #2ad6bc'}" @click="doCopy">复制链接</div>
        </div>
      </cell>
    </group>

    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动鼓励奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">精美礼物</div>
        <div class="color1 size22 border-radius5 bg-ff404b plr15 ptb10">10礼物票兑换</div>
      </div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>
      <div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>
    </div>

    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动排名奖 —</div>
      <div class="flex-wrp flex-between flex-align-center pb15">
        <div class="color5 size26">第一名（奖品）</div>
      </div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>
      <div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>
    </div>

    <div class="w100 fixedBottomLink bg-alpha">
      <div class="plr60 ptb20 flex-wrp flex-between">
        <div class="ptb10 size26 plr40 color1 border-radius5" :style="{backgroundColor: '#ff404b'}">给Ta投票</div>
        <div class="ptb10 size26 plr40 color1 border-radius5" :style="{backgroundColor: '#ff404b'}">赠送礼物</div>
      </div>
    </div>

  </div>
</template>

<script>
import InputText from "@/components/input/InputText";
import { timeDiffObj } from "@/utils";
import chunk from 'lodash/chunk'
import moment from "moment";
export default {
  data() {
    return {
      list:[
        {
          srcImg: '',
          title: '星星',
          time: '666'
        },
        {
          srcImg: '',
          title: '掌声',
          time: '666'
        },
        {
          srcImg: '',
          title: '红玫瑰',
          time: '666'
        },
        {
          srcImg: '',
          title: '蛋糕',
          time: '666'
        },
        {
          srcImg: '',
          title: '哆啦A梦',
          time: '666'
        }
      ],
      text: '我是一号，我是一号我是一号我是一我是一号我是一号我是一号，我是一号我',
      ewmLink:'http://baidu.com',
      srcImg: "",
      data: [
        {
          number: 167,
          text: "总票数"
        },
        {
          number: 167,
          text: "转发量"
        },
        {
          number: 167,
          text: "浏览量"
        },
        {
          number: 167,
          text: "礼物数"
        }
      ],
    };
  },
  methods: {
    async doCopy () {
        this.$copyText(this.ewmLink).then(
          (e) => {
            this.$vux.toast.show({
              type: 'success',
              text: `<div class='color13 size16'>复制成功</div>`,
              position: 'middle',
            })
          },
          (e) => {
            this.$vux.toast.show({
              type: 'warn',
              text: `<div class='color6 size16'>复制失败</div>`,
              position: 'middle',
            })
          }
        )
      },
  },
  mounted() {
  },
  computed: {
    listSix(){
      return this.list.splice(0,6)
    }
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
.search-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 36px;
  top: 10px;
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

.numberIcon{
  position: absolute;
  top: 20px;
  left: 20px;
  width: 55px;
  height: 70px;
  &.no1{
    background: url(~assets/img/web/no1.png) no-repeat center / cover;
  }
  &.no2{
    background: url(~assets/img/web/logo_no2.png) no-repeat center / cover;
  }
  &.no3{
    background: url(~assets/img/web/logo_no3.png) no-repeat center / cover;
  }
}
.numberText{
  position: absolute;
  top: 20px;
  left: 20px;
}

.guanbi{
  // position: absolute;
  // top: -10px;
  // right: -10px;
  padding: 10px 20px;
  // z-index: 999;
}
.fixedBottomLink{
  position: fixed;
  bottom: 90px;
}
</style>

