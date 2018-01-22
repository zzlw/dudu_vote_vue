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
                奖品管理
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <div class="flex-wrp flex-around bg-white ptb20 mt20">
            <div class="flex-wrp flex-between flex-align-center size26 plr20 ptb5 border-radius5" :style="{height: rem(40),border:'1px solid #29d6bf'}">
                <div class="h100" :style="{width: rem(30)}">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-jia1-copy`"></use>
                    </svg>
                </div>
                <div class="color13 lh100 pl10">添加排名奖</div>
            </div>

            <router-link to="prize-add">

            <div class="flex-wrp flex-between flex-align-center size26 plr20 ptb5 border-radius5" :style="{height: rem(40),border:'1px solid #29d6bf'}">
                <div class="h100" :style="{width: rem(30)}">
                    <svg class="icon base-menu-icon" aria-hidden="true">
                        <use :xlink:href="`#icon-jia1-copy`"></use>
                    </svg>
                </div>
                <div class="color13 lh100 pl10">添加鼓励奖</div>
            </div>
            </router-link>

        </div>
        <div class="pd20">
            <div class="border-radius5 bg-white overflow-hidden relative">
                <div class="bg-ddd" :style="{height: rem(300)}">
                    <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}"/>
                    <div class="numberImg border border-radius50 bg-alpha color1 plr30 size16 ptb5">{{`排名奖`}}</div>
                </div>
                <div class="flex-wrp flex-align-center flex-between plr30 ptb20">
                    <div class="color2 size26"></div>
                    <div class="flex-wrp">
                        <div class="size26 color13 plr30 ptb5 border-radius5 mr20" :style="{border:'1px solid #29d6bf'}">删除</div>
                        <div class="size26 color13 plr30 ptb5 border-radius5" :style="{border:'1px solid #29d6bf'}">修改</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
import { timeDiffArray, timeDiffObj } from '@/utils/index'
import moment from 'moment'
export default {
  data () {
    return {
      srcImg: ''
    }
  },
  async created () {},

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.numberImg {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
