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
                奖品兑换
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <tab :line-width="2" active-color="#29d6be" custom-bar-width="1.2rem" bar-active-color="#2bd8bc">
            <tab-item :selected="!index" v-for="(item, index) in list3" :badge-label="item.number?String(item.number):undefined" :class="{'border-r': index!==(list3.length-1)}" @click="demo3 = item" :key="index">{{item.title}}</tab-item>
        </tab>
        <div class="flex-wrp flex-cell plr20 ptb20 border-b bg-white" v-for="(item, index) in list4" :key="index">
          <div class="color2 size22 text-nowrap-one pb10">{{item.text}}</div>
          <div class="flex-wrp flex-center flex-between">
            <div class="color4 size22">有效期：{{item.time}}</div>
            <div class="size22 border-radius5 ptb5 text-center" :style="{width: rem(100)}" :class="[{'bg-29d6bf color1': item.status==0,'bg-c0c1c2 color1': item.status==1,'border color4': item.status==2}]">{{item.status==0?"兑换":item.status==1?"已兑换":"已过期"}}</div>
          </div>
        </div>
    </div>
</template>

<script>
import { api } from 'h5sdk';
import { timeDiffArray, timeDiffObj } from "@/utils";
import moment from "moment";
export default {
  data() {
    return {
        list3: [
            {
                title: '全部',
                number: 34,
            },
            {
                title: '未兑换',
                number: 34,
            },
            {
                title: '已兑换',
                number: 0,
            },
            {
                title: '已过期',
                number: 34,
            }
        ],
        list4:[
          {
            status: 0,
            text: '寻找最美郑州老球迷大赛开始了，赢取马尔代夫...',
            time: '2018-01-18 12:26',
          },
          {
            status: 1,
            text: '寻找最美郑州老球迷大赛开始了，赢取马尔代夫...',
            time: '2018-01-18 12:26',
          },
          {
            status: 2,
            text: '寻找最美郑州老球迷大赛开始了，赢取马尔代夫...',
            time: '2018-01-18 12:26',
          }
        ],
        auditor: '1',
        players: [
            {
                setUpStatus: false,
                activityTitle: "今日数据今日数据今日数据今日数据今日数据今日数据今日数据",
                activitySrc: "",
                activityTo: "/",
                activitySetUp: {
                    cancel: (item)=>{
                        console.log('取消成功',item)
                    },
                    edit: "/", // 编辑
                    _delete: "/", // 删除
                },
            },
            {
                setUpStatus: false,
                activityTitle: "今日数据今日数据今日数据今日数据今日数据今日数据今日数据",
                activitySrc: "",
                activityTo: "/",
                activitySetUp: {
                    cancel: (item)=>{
                        console.log('取消成功',item)
                    },
                    edit: "/", // 编辑
                    _delete: "/", // 删除
                },
            }
        ]
    };
  },
  async created() {},

  methods: {

  }
};
</script>

<style lang="scss" scoped>
</style>
