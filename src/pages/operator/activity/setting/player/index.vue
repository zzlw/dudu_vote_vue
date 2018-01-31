<template>
  <div class="pb60">

    <base-navigation title="选手管理"></base-navigation>

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
