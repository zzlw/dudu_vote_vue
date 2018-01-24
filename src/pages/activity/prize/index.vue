<template>
  <div class="">
    <div class="bg-cover" :style="{height: rem(300),backgroundImage:`url(${srcImg})`}"></div>

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

    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动介绍 —</div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>
      <div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>
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
          title: '你好哈士奇',
          time: '10-21 08:54'
        },
        {
          srcImg: '',
          title: '你好哈士奇',
          time: '10-21 08:54'
        },
        {
          srcImg: '',
          title: '你好哈士奇',
          time: '10-21 08:54'
        },
        {
          srcImg: '',
          title: '你好哈士奇',
          time: '10-21 08:54'
        },
        {
          srcImg: '',
          title: '你好哈士奇',
          time: '10-21 08:54'
        }
      ],
      listInfo:[
        {
          srcImg: '',
          title: 'Angelababy',
          time: '10-21 08:54'
        },
        {
          srcImg: '',
          title: 'Angelababy',
          time: '10-21 08:54'
        }
      ],
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

