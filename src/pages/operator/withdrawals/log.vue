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
                提现记录
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group>
            <form-preview header-label="<span class=color2>提现金额</span>" :header-value="`<span class=color13>${897.20}</span>`" :body-items="list"></form-preview>
        </group>
        <group>
            <form-preview header-label="<span class=color2>提现金额</span>" :header-value="`<span class=color13>${897.20}</span>`" :body-items="list"></form-preview>
        </group>
    </div>
</template>

<script>
import { api } from 'h5sdk'
export default {
  data () {
    return {
      list: [{
        label: '提现到账金额',
        value: '897.20'
      }, {
        label: '技术服务费',
        value: '0.00'
      }, {
        label: '提现状态',
        value: '提现成功'
      }, {
        label: '提现时间',
        value: '2018-01-02 16：36'
      }]
    }
  },
  async created () {},

  methods: {}
}
</script>

<style scoped>

</style>
