<template>
  <div class="" >
    <div class="bg-cover" :style="{height: rem(300),backgroundImage:`url(${srcImg})`}"></div>
    <div class="base-data-three flex-wrp flex-around bg-white ptb15 plr10 border-b" >
        <div :class="['text-center',{'border-r': index!==(data.length-1)}]" v-for="(item, index) in data" :key="index" :style="{flex:1}">
            <div class="size26 color5 lh150">{{item.number}}</div>
            <div class="size16 color5 lh150 pt5">{{item.text}}</div>
        </div>
    </div>

    <div class="plr30 ptb20 flex-wrp flex-align-center bg-white">
      <div class="color2 size26 pr50">你好哈士奇</div>
      <div class="flex-wrp flex-between">
        <div class="flex-wrp flex-between flex-align-center">
          <div class="plr10 bg-ff404b border-radius5" :style="{width: rem(18), height: rem(30)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                  <use :xlink:href="`#icon-shangsheng`"></use>
              </svg>
          </div>
          <div class="color5 size16 pl10">前一名差：{{75}}</div>
        </div>
        <div class="flex-wrp flex-between flex-align-center pl25">
          <div class="plr10 bg-gray border-radius5" :style="{width: rem(18), height: rem(30)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                  <use :xlink:href="`#icon-xiajiang`"></use>
              </svg>
          </div>
          <div class="color5 size16 pl10">前一名差：{{75}}</div>
        </div>
      </div>
    </div>

    <div class="bg-white pd20 lh200 color5 mt15">
      {{activity.title}}
    </div>

    <div class="pd20 bg-white" :style="{height: rem(300)}">
      <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" />
    </div>

    <div class="ptb30 bg-white">
      <div class="plr20 ptb10">
          <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">投Ta一票</div>
        </div>
        <div class="plr20 ptb10">
          <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">投Ta一票</div>
        </div>
        <div class="plr20 ptb10">
          <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">投Ta一票</div>
        </div>
    </div>

    <div class="bg-white mt20 plr20 pb15">
      <div class="color2 size22 ptb10">他们刚刚帮TA投票了!</div>
      <div class="flex-wrp flex-between">
        <div class="flex-wrp flex-cell flex-center" v-for="(item, index) in list" :key="index">
          <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(100), height: rem(100)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${item.srcImg})`}" />
          </div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.title}}</div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.time}}</div>
        </div>
      </div>
    </div>

    <div class="color2 size26 text-center bg-white ptb20">— 收到的礼物 —</div>

    <div class="border-t">
      <div class="flex-wrp flex-between flex-align-center plr20 ptb15 bg-white border-b" v-for="(item, index) in listInfo" :key="index">
        <div class="flex-wrp flex-between">
          <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(50), height: rem(50)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${item.srcImg})`}" />
          </div>
          <div class="flex-wrp flex-between flex-align-center pl15">
            <div class="color5 size22">{{`${item.title}`}}赠送</div>
            <div class="plr10" :style="{width: rem(40), height: rem(50)}">
                <svg class="icon base-menu-icon" aria-hidden="true">
                    <use :xlink:href="`#icon-liwu1`"></use>
                </svg>
            </div>
            <div class="color5 size22">票+122</div>
          </div>
        </div>
        <div class="color5 size16">{{item.time}}</div>
      </div>
      <div class="size16 color5 ptb10 text-center bg-white">没有更多了</div>
    </div>



    <div class="plr20 bg-white">
      <div class="color2 size26 text-center ptb20 mt15">— 活动介绍 —</div>
      <!-- <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" /> -->
      <div class="color4 size26 flex-wrp flex-center bg-ddd" :style="{height: rem(300)}">后台编辑图片</div>
      <div class="color4 size26 flex-wrp flex-center ptb15">后台编辑文字</div>
    </div>


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

