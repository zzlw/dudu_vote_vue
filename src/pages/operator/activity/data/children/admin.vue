<template>
  <div class="pb60">
    <base-navigation title="报名用户"></base-navigation>

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
