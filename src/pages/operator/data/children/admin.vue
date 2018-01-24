<template>
    <div class="pb60">
        <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
            <div class="flex-wrp flex-align-center" :style="{flex:1}">
                <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-zuojiantou`"></use>
                    </svg>
                </div>
                <div class="size26 color1 pl5">返回</div>
            </div>
            <div class="color1 size26 text-center"  :style="{flex:3}">
                报名用户
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="2rem" label-margin-right="2em" label-align="left">
            <x-switch class="color2" title="报名审核" inline-desc="点则表示需手动审核" :value-map="['0', '1']" v-model="auditor"></x-switch>
        </group>
        <tab :line-width="2" active-color="#666" class="mt20" bar-active-color="#2bd8bc">
            <tab-item :selected="!index" v-for="(item, index) in list3" :badge-label="String(item.number)" @click="demo3 = item" :key="index">{{item.title}}</tab-item>
        </tab>
        <div class="pl20 ptb30 flex-wrp flex-between bg-white" v-for="(item, index) in players" @click.stop="$router.push(item.activityTo)" :key="index">
            <div class="" :style="{width: rem(360),height: rem(130)}">
                <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${item.activitySrc})`}" />
            </div>
            <div class="plr20 border-r flex-wrp flex-cell flex-between" >
                <div class="title size26 color5 text-nowrap-one">{{item.activityTitle}}</div>
                <div class="flex-wrp">
                    <div class="size22 color4">{{65435131212}}</div>
                    <div class="size22" :class="[true?'color3':'color4']">&nbsp;{{`未审核`}}</div>
                </div>
                <div class="size22 color4">{{`报名时间: ${'2018-1-18 12:26'}`}}</div>
            </div>
            <div class="flex-wrp flex-cell flex-middle plr30" >
                <div class="ptb5 plr15 border-radius5 text-center color1 size22 overflow-hidden color13" :style="{'border':'1px solid #29d6bf','white-space':'nowrap'}" @click.stop="item.setUpStatus=!item.setUpStatus" >设置</div>
                <div class="relative" v-show="item.setUpStatus">
                    <div class="border border-radius5 overflow-hidden size22 bg-white" :style="{width: '100px', position: 'absolute', top: '2px', right: '0px'}">
                        <div class="color4 border-b text-center ptb10" @click.stop="item.activitySetUp.cancel(item)">取消审核</div>
                        <div class="color4 border-b text-center ptb10" @click.stop="$router.push(item.activitySetUp.edit)">编辑</div>
                        <div class="color4 border-b text-center ptb10" @click.stop="$router.push(item.activitySetUp._delete)">删除</div>
                    </div>
                </div>
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
                title: '全部选手',
                number: 3423,
            },
            {
                title: '未审核',
                number: 3423,
            },
            {
                title: '已审核',
                number: 3423,
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
