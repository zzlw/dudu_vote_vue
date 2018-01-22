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
                分享设置
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>

        <group label-width="3rem" label-margin-right="2em" label-align="left" gutter=".3rem">
            <x-input title="分享主标题:" placeholder="填写分享主标题" required v-model="share.title" />
            <x-input title="分享副标题:" placeholder="填写分享副标题" required v-model="share.viceTitle" />
            <cell class="">
                <div slot="icon" class="flex-wrp flex-align-center">
                    <div class="color2 size26" :style="{width:rem(170)}" >分享图片:</div>
                    <div class="flex-wrp flex-wrap w100">
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${share.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <div class="" :style="{width:rem(70), height: rem(70)}">
                                <svg class="icon base-menu-icon" aria-hidden="true">
                                    <use :xlink:href="`#icon-jia1`"></use>
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
            </cell>
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
      share: {
        title: '',
        viceTitle: '',
        srcImg: ''
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
