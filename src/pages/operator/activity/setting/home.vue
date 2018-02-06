<template>
    <div class="pb60">

        <base-navigation title="更多设置"></base-navigation>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='settings/prize'>
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
            <cell value-align="right">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-shezhi`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">选手管理</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/player'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">选手管理</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/player-add'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">添加选手</div>
                </div>
            </cell>
        </group>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell is-link value-align="right" link='settings/player-admin'>
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
            <cell value-align="right">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-anquanfanghu`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">防刷票机制</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/player-limit'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">票数限制</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/player-limit-number'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">IP限制</div>
                </div>
            </cell>
        </group>
        <group label-width="4em" label-margin-right="2em" label-align="left">
            <cell value-align="right">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-mima-copy`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">活动中心</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/share'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">分享设置</div>
                </div>
            </cell>
            <cell is-link value-align="right" link='settings/follow'>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}"></div>
                    <div class="size26 color2 pl5 h100">关注设置</div>
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: 1111111111,
    }
  },
  async created () {},

  methods: {
  },
}
</script>

<style scoped>

</style>
