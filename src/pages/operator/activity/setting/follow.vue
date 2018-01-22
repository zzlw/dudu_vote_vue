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
                关注设置
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>

        <group label-width="3rem" label-margin-right="2em" label-align="left" gutter=".3rem">
            <x-input title="关注引导语:" placeholder="填写关注引导语" required v-model="follow.title" />
            <cell class="">
                <div slot="icon" class="flex-wrp flex-align-center">
                    <div class="color2 size26" :style="{width:rem(210)}" >关注LOGO:</div>
                    <div class="flex-wrp flex-wrap w100">
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
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


            <cell class="">
                <div slot="icon" class="flex-wrp flex-align-center">
                    <div class="color2 size26" :style="{width:rem(210)}" >关注二维码:</div>
                    <div class="flex-wrp flex-wrap w100">
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
                        </div>
                        <div class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${follow.srcImg})`}" />
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
            <x-switch class="color2" title="关注显示" :value-map="['0', '1']" v-model="follow.auditor"></x-switch>
        </group>

        <div class="plr20 pt30">
            <div class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf" >保存</div>
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
      follow: {
        title: '',
        srcImg: '',
        auditor: '0'
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
