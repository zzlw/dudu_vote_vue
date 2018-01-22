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
                添加奖品
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>

        <group label-width="2.1rem" label-margin-right="2em" label-align="left" gutter=".3rem">
            <x-input title="活动名称:" placeholder="请输入活动" required v-model="prize.title" />
            <x-number title="奖品数量:" v-model="prize.number" button-style="round" :min="0" :max="5"></x-number>
            <x-number title="兑换票数:" v-model="prize.ticket" button-style="round" :min="0" :max="5"></x-number>
            <x-number title="限兑数量:" v-model="prize.limited" button-style="round" :min="0" :max="5"></x-number>
            <datetime title="奖品有效期" class="color2" v-model="prize.endTime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
            <x-textarea title="奖品详情:" v-model="prize.text" :show-counter="false" :rows="3"></x-textarea>
        </group>


        <div class="plr20 pb10 pt30">
            <div class="size26 color13 plr30 ptb10 border-radius5 text-center" :style="{border:'1px solid #29d6bf'}">添加图片</div>
        </div>
        <div class="plr20 ptb10">
            <div class="size26 color13 plr30 ptb10 border-radius5 text-center" :style="{border:'1px solid #29d6bf'}">添加文本</div>
        </div>
        <div class="plr20 ptb10">
            <div class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf" >保存</div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import { timeDiffArray, timeDiffObj } from '@/utils'
import moment from 'moment'
export default {
  data () {
    return {
      prize: {
        title: '',
        number: 0,
        ticket: 0,
        limited: 0,
        endTime: '',
        text: ''
      }
    }
  },
  async created () {},

  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
