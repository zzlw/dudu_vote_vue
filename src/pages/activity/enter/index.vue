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
                我要报名
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>

        <div class="w100" :style="{height: rem(300)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${bgSrc})`}" />
        </div>

        <group label-width="2.6rem" label-margin-right="2em" label-align="left" gutter="0">
            <x-input title="姓名:" placeholder="请输入活动" required v-model="add.title" />
            <x-input title="联系方式:" placeholder="请输入活动" type='tel' required v-model="add.mobile" />
            <cell title="添加封面图片:"  ></cell>
            <div class="plr20 pb20">
                <div class="border" :style="{height: rem(200)}">
                    <div class="flex-wrp flex-cell flex-center">
                        <div :style="{width: rem(50),height: rem(50)}" class="ptb35">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-jia1`"></use>
                            </svg>
                        </div>
                        <div class="size26 color4">{{`点击添加图片（封面展示图片）`}}</div>
                    </div>
                </div>
            </div>

            <cell title="选手介绍:"  >
                <div class="flex-wrp">
                    <div :style="{height: rem(40),border:'1px solid #979899'}" class="border-radius5 overflow-hidden flex-wrp flex-between flex-align-center plr10" >
                        <div class="h100" :style="{width: rem(20)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-shangsheng-copy`"></use>
                            </svg>
                        </div>
                        <div class="color4 lh100 pl10 size16">上移</div>
                    </div>
                    <div :style="{height: rem(40),border:'1px solid #979899'}" class="border-radius5 overflow-hidden flex-wrp flex-between flex-align-center plr10 ml20" >
                        <div class="h100" :style="{width: rem(20)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-xiajiang-copy`"></use>
                            </svg>
                        </div>
                        <div class="color4 lh100 pl10 size16">下移</div>
                    </div>
                </div>
            </cell>
            <div class="plr20 pb20">
                <div class="border flex-wrp" :style="{height: rem(200)}">
                    <x-textarea class="editable size26 color2 w100" placeholder="这里是文本框，手动输入" v-model="add.text" />
                </div>
            </div>

            <cell title="添加照片:"  >
                <div class="flex-wrp">
                    <div :style="{height: rem(40),border:'1px solid #979899'}" class="border-radius5 overflow-hidden flex-wrp flex-between flex-align-center plr10" >
                        <div class="h100" :style="{width: rem(20)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-shangsheng-copy`"></use>
                            </svg>
                        </div>
                        <div class="color4 lh100 pl5 size16">上移</div>
                    </div>
                    <div :style="{height: rem(40),border:'1px solid #979899'}" class="border-radius5 overflow-hidden flex-wrp flex-between flex-align-center plr10 ml20" >
                        <div class="h100" :style="{width: rem(20)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-xiajiang-copy`"></use>
                            </svg>
                        </div>
                        <div class="color4 lh100 pl5 size16">下移</div>
                    </div>
                </div>
            </cell>
            <div class="plr20 pb20">
                <div class="border" :style="{height: rem(200)}">
                    <div v-if="false" class="flex-wrp flex-cell flex-center" >
                        <div :style="{width: rem(50),height: rem(50)}" class="ptb35">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-jia1`"></use>
                            </svg>
                        </div>
                        <div class="size26 color4">{{`添加介绍详情图片`}}</div>
                    </div>

                    <!-- 这是一张照片 -->
                    <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${bgSrc})`}" />
                </div>
            </div>
        </group>


        <div class="plr20 pb10 pt30">
            <div class="size26 color13 plr30 ptb10 border-radius5 text-center" :style="{border:'1px solid #29d6bf'}">添加图片（最多添加5张）</div>
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
import { api } from 'h5sdk'
import { timeDiffArray, timeDiffObj } from '@/utils/index'
import moment from 'moment'
export default {
  data () {
    return {
      bgSrc: '',
      add: {
        title: '',
        mobile: '',
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
.editable {
  outline: none;
}

</style>
