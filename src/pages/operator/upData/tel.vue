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
                修改资料
            </div>
            <div class=""  :style="{flex:1}"></div>
        </div>
        <group label-width="2rem" label-margin-right="2em" label-align="left">
            <cell :value="mobile" is-link value-align="right">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-shouji`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">手机号码</div>
                </div>
            </cell>
            <cell value="设置面目让管理员登录" is-link value-align="right">
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-mima`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">密码</div>
                </div>
            </cell>
            <cell>
                <div slot="icon" class="flex-wrp flex-align-center" >
                    <div class="leftIcon" :style="{width: rem(36), height: rem(36)}">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-tuichu`"></use>
                        </svg>
                    </div>
                    <div class="size26 color2 pl5 h100">退出登录</div>
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      mobile: 1111111111,
    };
  },
  async created() {},

  methods: {
  },
};
</script>

<style scoped>

</style>
