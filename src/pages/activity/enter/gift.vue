<template>
  <div class="">
    <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
        <div class="flex-wrp flex-align-center" :style="{flex:1}">
            <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
                <svg class="icon base-menu-icon" aria-hidden="true">
                    <use :xlink:href="`#icon-zuojiantou`"></use>
                </svg>
            </div>
            <div class="size26 color1 pl5" @click="$router.back()">返回</div>
        </div>
        <div class="color1 size26 text-center"  :style="{flex:3}">
            正在给{{`你好哈士奇`}}赠送礼物
        </div>
        <div class=""  :style="{flex:1}"></div>
    </div>
    <div class="bg-white" :style="{height: rem(300)}">
      <div class="flex-wrp flex-cell flex-align-center pt30">
          <base-avatar :src="srcImg" class="bg-white" />
          <div class="color2 size26 pt20">{{`你好哈士奇`}}</div>
      </div>
      <div class="flex-wrp flex-around plr60 pt15">
        <div class="color4 size22">编号: {{1050}}</div>
        <div class="color4 size22">得票数: <span class="color15">{{565}}</span></div>
        <div class="color4 size22">礼物数: <span class="color15">{{565}}</span></div>
      </div>
    </div>

    <div class="ptb10">
      <div class="flex-wrp flex-wrap plr10" v-for="(item, index) in cateGroup" :key="index">
        <div class="pd15 border-radius5 bg-white mg10" v-for="(t, i) in item" :key="i" :style="{flex: 1}">
          <div class="size20 color15 lh100">{{t.ticket}}票</div>
          <div class="flex-wrp flex-center ptb10 plr20">
            <div class="plr10" :style="{width: rem(96), height: rem(96)}">
                <!-- <svg class="icon base-menu-icon" aria-hidden="true">
                    <use :xlink:href="`#icon-liwu1`"></use>
                </svg> -->
                <base-avatar :src="t.srcImg" class="bg-white" />
            </div>
          </div>
          <div class="size22 flex-wrp flex-center pb10">
            <span class="color4">{{t.title}}</span>
            <span class="color15">{{t.number}}金币</span>
          </div>
          <div class="size22 border-radius5 flex-wrp flex-center bg-ff404b color1 ptb5">点击购买</div>
        </div>
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
          number: 1,
          ticket: 2,
        },
        {
          srcImg: '',
          title: '星星',
          number: 1,
          ticket: 2,
        },
        {
          srcImg: '',
          title: '星星',
          number: 1,
          ticket: 2,
        },
        {
          srcImg: '',
          title: '星星',
          number: 1,
          ticket: 2,
        },
        {
          srcImg: '',
          title: '星星',
          number: 1,
          ticket: 2,
        },
        {
          srcImg: '',
          title: '星星',
          number: 1,
          ticket: 2,
        },
      ],
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
  },
  mounted() {
  },
  computed: {
    cateGroup () {
      return chunk(this.list, 3)
    },
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


