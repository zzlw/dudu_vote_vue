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
                更多设置
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-liwu`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">奖品管理</div>
                </div>
            </cell>
        </group>
        <group label-width="2rem" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-shezhi`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">选手管理</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">选手管理</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">添选选手</div>
                </div>
            </cell>
        </group>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-renshutongji`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">报名截止时间</div>
                </div>
            </cell>
        </group>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-anquanfanghu`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">防刷票机制</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">票数限制</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">IP限制</div>
                </div>
            </cell>
        </group>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-mima-copy`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">活动中心</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">分享设置</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='/'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">关注设置</div>
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      mobile: 1111111111
    }
  },
  async created () {},

  methods: {
  }
}
</script>

<style scoped>

</style>
