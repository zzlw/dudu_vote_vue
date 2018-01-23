
<template>
    <div class="pb60">
        <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
            <div class="flex-wrp flex-align-center" :style="{flex:1}">
                <div class="" :style="{width: rem(40), height: rem(40)}">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-zuojiantou`"></use>
                    </svg>
                </div>
                <div class="size26 color1 pl5">返回</div>
            </div>
            <div class="color1 size26 text-center"  :style="{flex:3}">
                票数限制
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="3.7rem" label-margin-right="2em" label-align="left" gutter='.2rem' >
            <cell class="">
                <div slot="icon" class="flex-wrp flex-end" >
                    <div class="size26 color2 pl5 h100">投票城市</div>
                    <div class="size16 color13 pl5 h100">（已选择3）</div>
                </div>
            </cell>
            <cell class="">
                <div slot="icon" class="flex-wrp flex-wrap" >
                    <div class="border-radius5 ptb15 plr20 relative mlr10 mtb10" v-for="(item, index) in addressList" :key="index" :style="{border:'1px solid #ccc'}">
                        <div class="text-center lh100 color2 size26" >{{getName([item[1]])=='市辖区'?getName([item[0]]):getName([item[1]])=='县'?getName([item[0]]):getName([item[1]])}}</div>
                        <div class="deleteIcon" @click="addressDelete(index)" :style="{width: rem(30), height: rem(30)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-shanchu4`"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="text-center lh100 border-radius5 ptb10 plr15 color2 size26 mlr10 mtb10 relative" :style="{border:'1px solid #ccc'}">
                        <div slot="title" >
                            <svg class="icon size38" aria-hidden="true">
                                <use :xlink:href="`#icon-jia1`"></use>
                            </svg>
                            <x-address class="addIcon" title="" v-model="addressValue" :list="addressData" hide-district value-text-align="left" label-align="justify"></x-address>
                        </div>
                    </div>
                </div>
            </cell>

            <cell class="">
                <div slot="icon" class="flex-wrp flex-end" >
                    <div class="size22 color4 pl5 h100">设置支持投票的地区，设置以后只能在指定地区投票<span class="size16 color13 pl5 h100">（最多可设置十个地区，不选表示不限制）</span></div>
                </div>
            </cell>
        </group>
        <div class="plr20 pt30">
            <div class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf" >保存</div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
import { timeDiffArray, timeDiffObj } from '@/utils/index'
import { ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
import moment from 'moment'
export default {
  data () {
    return {
      minute: 1,
      number: 0,
      addressData: ChinaAddressV4Data,
      addressList: [],
      addressValue: []
    }
  },
  async created () {},

  watch: {
    addressValue: function (newQuestion, oldQuestion) {
      let bl = this.addressList.find(item => {
        return (
          (this.getName([item[1]]) == '市辖区'
            ? this.getName([item[0]])
            : this.getName([item[1]]) == '县'
              ? this.getName([item[0]])
              : this.getName([item[1]])) ==
          (this.getName([newQuestion[1]]) == '市辖区'
            ? this.getName([newQuestion[0]])
            : this.getName([newQuestion[1]]) == '县'
              ? this.getName([newQuestion[0]])
              : this.getName([newQuestion[1]]))
        )
      })

      if (!bl) {
        this.addressList.push(newQuestion)
      }
    }
  },

  computed: {},

  methods: {
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    addressDelete (index) {
      this.addressList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.deleteIcon {
  position: absolute;
  right: -15px;
  top: -20px;
}
.addIcon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
