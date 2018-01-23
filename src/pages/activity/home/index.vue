<template>
  <div class="" >
    <div class="bg-cover" :style="{height: rem(300),backgroundImage:`url(${srcImg})`}"></div>
    <div class="base-data-three flex-wrp flex-around bg-white ptb10 border-b" >
        <div :class="['text-center plr60',{'border-l': index==1,'border-r': index==1}]" v-for="(item, index) in data" :key="index">
            <div class="bold size26 color5 lh150">{{item.number}}</div>
            <div class="size22 color5 lh150">{{item.text}}</div>
        </div>
    </div>
    <div class="flex-wrp flex-align-center flex-between bg-white h100 pt10">
      <div :style="{width: rem(40),height: rem(40)}" >
        <svg class="icon base-menu-icon" aria-hidden="true">
          <use :xlink:href="`#icon-yinliang`"></use>
        </svg>
      </div>
      <InputText v-model="activity.title" :preview="preview"  class="mr10 w100 nbr  pt10 pb20" />
    </div>

    <div class="flex-wrp flex-middle bg-white pt10 pb20" >
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
                <div class="pd5 flex-wrp flex-middle flex-cell relative" :style="{flex: 1}" v-for="(t, i) in item" :key="i" @click="show2=true">
                    <div class="bg-ddd" :style="{ height: rem(350)}">
                        <img width="100%" height="100%" src="~/assets/img/s.gif" class="block bg-cover" :style="{backgroundImage:`url(${t.srcImg})`}"/>
                        <div class="numberImg border border-radius50 bg-alpha color1 plr30 size16 ptb5">{{`${t.number}号`}}</div>
                        <div class="numberIcon" :class="[{no1: i==0&&index==0,no2: i==1&&index==0,no3: i==0&&index==1}]"></div>
                        <div class="numberText ptb10 plr10 color1 size16" v-if="(index+i)>1">第{{index+i+2}}名</div>
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

    <div class="color2 size26 text-center bg-white ptb20">—— 活动介绍 ——</div>

    <div class="color4 size26 flex-wrp flex-center" :style="{height: rem(300)}">后台编辑页面</div>


    <x-dialog :show.sync="show2" :hide-on-blur="true" :dialog-style="{width: '100%'}">
      <div class="pt30 plr30">
        <div class="flex-wrp flex-center border-b pb20">
          <div class="" :style="{width: rem(50), height: rem(50)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-chenggong`"></use>
            </svg>
          </div>
          <div class="color2 size32 pl20">推广二维码</div>
        </div>
        <div class="color5 size22 ptb50">好友也可以帮忙，一天后还能再投票哦！</div>
        <div class="ptb15 bg-ff404b size26 color1 border-radius5">给TA送礼物加票</div>
        <div class="flex-wrp flex-center" @click="show2=false">
          <div class="guanbi border-radius">
            <svg class="icon base-menu-icon" aria-hidden="true" :style="{width: rem(52), height: rem(80)}">
              <use :xlink:href="`#icon-shanchu4-copy`"></use>
            </svg>
          </div>
        </div>
      </div>
    </x-dialog>
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
      show2: true,
      srcImg: "",
      activity: {
        title: "寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找寻找"
      },
      preview: true,
      now: moment(),
      timer: null,
      timeValue: '',
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
        }
      ],
      data: [
        {
          number: 167,
          text: "参与选手"
        },
        {
          number: 167,
          text: "累计投票"
        },
        {
          number: 167,
          text: "访问量"
        }
      ],
      buying: {
        time_start: 1519099695649,
        time_end: 1516199695649
      }
    };
  },
  methods: {
    timeUpdate() {
      this.timeValue = timeDiffObj(
        moment().isBefore(this.buying.time_start)
          ? this.buying.time_start
          : this.buying.time_end,
        this.now
      );
    }
  },
  mounted() {
    this.timer = setInterval(this.timeUpdate, 1000);
  },
  computed: {
    cateGroup () {
      return chunk(this.twoDate, 2)
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
  components: {
    InputText
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
</style>

