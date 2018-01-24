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
                总交易额
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group>
            <div class="pd30">
                <div class="size26 color2 mb15 text-nowrap-one">寻找最美郑州老球迷大赛开始了，赢取马尔代夫寻找最美郑州老球迷大赛开始了，赢取马尔代夫...</div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height: rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">礼物票：</div>
                        <div class="size26 color5" :style="{width: rem(40), height: rem(40)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-star-`"></use>
                            </svg>
                        </div>
                        <div class="size26 color5">星星</div>
                    </div>
                    <div class="size26 color4">+4.00</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">时间：</div>
                    </div>
                    <div class="size26 color4">2018-1-18 12：26</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">选手：</div>
                    </div>
                    <div class="size26 color4">吴彦祖</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">投票人：</div>
                    </div>
                    <div class="flex-wrp flex-bottom flex-align-center" :style="{height:rem(40)}">
                        <div class="flex-wrp flex-align-center mr10 border-radius overflow-hidden" :style="{width: rem(40), height: rem(40)}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-ddd" :style="{backgroundImage:`url(${srcImg})`}" />
                        </div>
                        <div class="size26 color4 lh100">路边的石头子</div>
                    </div>
                </div>
            </div>
        </group>
        <group>
            <div class="pd30">
                <div class="size26 color2 mb15 text-nowrap-one">寻找最美郑州老球迷大赛开始了，赢取马尔代夫...</div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height: rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">礼物票：</div>
                        <div class="size26 color5" :style="{width: rem(40), height: rem(40)}">
                            <svg class="icon base-menu-icon" aria-hidden="true">
                                <use :xlink:href="`#icon-star-`"></use>
                            </svg>
                        </div>
                        <div class="size26 color5">星星</div>
                    </div>
                    <div class="size26 color4">+4.00</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">时间：</div>
                    </div>
                    <div class="size26 color4">2018-1-18 12：26</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">选手：</div>
                    </div>
                    <div class="size26 color4">吴彦祖</div>
                </div>
                <div class="flex-wrp flex-between flex-align-center" :style="{height:rem(46)}">
                    <div class="flex-wrp flex-align-center">
                        <div class="size26 color5">投票人：</div>
                    </div>
                    <div class="flex-wrp flex-bottom flex-align-center" :style="{height:rem(40)}">
                        <div class="flex-wrp flex-align-center mr10 border-radius overflow-hidden" :style="{width: rem(40), height: rem(40)}">
                            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-ddd" :style="{backgroundImage:`url(${srcImg})`}" />
                        </div>
                        <div class="size26 color4 lh100">路边的石头子</div>
                    </div>
                </div>
            </div>
        </group>
    </div>
</template>

<script>
import { api } from 'h5sdk'
export default {
  data () {
    return {
      srcImg: ''
    }
  },
  async created () {},

  methods: {}
}
</script>

<style scoped>

</style>
