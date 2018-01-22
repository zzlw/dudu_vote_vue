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
                选手管理
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="3.7rem" label-margin-right="2em" label-align="left">
            <datetime title="报名截止时间" class="color2" v-model="endTime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
            <x-switch class="color2" title="关闭报名截止时间" :value-map="['0', '1']" v-model="auditor"></x-switch>
            <cell class="" inline-desc='温馨提示：选择设置报名表截止时间则表示报名截止时间前不能投票，不设置报名截止时间则表示可以边报名边投票'></cell>
        </group>
        <div class="plr20 pt30">
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
      auditor: '1',
      endTime: ''
    }
  },
  async created () {},

  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
