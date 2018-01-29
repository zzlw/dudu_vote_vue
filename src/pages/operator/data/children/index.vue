<template>
    <div class="pb60">
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
                综合数据
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <base-tiele title="今日数据" class="border-b"/>
        <div class="plr10 ptb5 bg-white">
            <div class="flex-wrp flex-around">
                <div class="size26 color2">
                    <div class="size26 color4 text-center mtb10">2688</div>
                    <div class="size26 color4 text-center border-b pb10 mtb10">总浏览量 ( pv )</div>
                    <div class="size26 color4 text-center mtb10">今日：364</div>
                    <div class="size26 color4 text-center mtb10">昨日：289</div>
                </div>
                <div class="size26 color2">
                    <div class="size26 color4 text-center mtb10">1059</div>
                    <div class="size26 color4 text-center border-b pb10 mtb10">总访客量 ( ip )</div>
                    <div class="size26 color4 text-center mtb10">今日：364</div>
                    <div class="size26 color4 text-center mtb10">昨日：298</div>
                </div>
            </div>
        </div>
        <div class="flex-wrp flex-between plr60 ptb10 bg-29d6bf">
            <div class="color1 size34">总营业额</div>
            <div class="color1 size34">1230.56元</div>
        </div>
        <base-tiele title="今日数据" class="border-b mt20"/>
        <div class="pd20 echarts bg-white">
            <Echarts/>
        </div>
    </div>
</template>

<script>
import { api } from 'h5sdk';
import { timeDiffArray, timeDiffObj } from "@/utils";
import moment from "moment";
import Echarts from '@/components/operator/echarts'
export default {
  data() {
    return {
      list3: [
        {
          title: "全部选手",
          number: 3423
        },
        {
          title: "未审核",
          number: 3423
        },
        {
          title: "已审核",
          number: 3423
        }
      ],
      auditor: "1",
      srcImg: "",
      players: [
        {
          setUpStatus: false,
          activityTitle: "今日数据今日数据今日数据今日数据今日数据今日数据今日数据",
          activitySrc: "",
          activityTo: "/",
          activitySetUp: {
            cancel: item => {
              console.log("取消成功", item);
            },
            edit: "/", // 编辑
            _delete: "/" // 删除
          }
        },
        {
          setUpStatus: false,
          activityTitle: "今日数据今日数据今日数据今日数据今日数据今日数据今日数据",
          activitySrc: "",
          activityTo: "/",
          activitySetUp: {
            cancel: item => {
              console.log("取消成功", item);
            },
            edit: "/", // 编辑
            _delete: "/" // 删除
          }
        }
      ]
    };
  },
  async created() {},

  methods: {},
  components: {
    Echarts,
  }
};
</script>

<style lang="scss" scoped>
.echarts{
    height: 700px;
}
</style>
