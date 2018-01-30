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
      <div class="color1 size26 text-center" :style="{flex:3}">
        报名用户
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>

    <OperatorActivitySettingsPlayer :activity-id="$route.params.activity_id"/>


  </div>
</template>

<script>
  import OperatorActivitySettingsPlayer from '@/components/operator/activity/settings/player/OperatorActivitySettingsPlayer'

  export default {
    components: {
      OperatorActivitySettingsPlayer,
    },
  }
</script>
