<template>
  <div v-if="activity">
    <router-view></router-view>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {}
    },
    async mounted () {
      this.fetchActivity(this.$route.params.activity_id)
    },
    computed: {
      ...mapState({
        'activity': state => state.activity.info,
      }),
    },
    methods: {
      ...mapActions({
        'fetchActivity': 'fetchActivity',
      }),
    },
  }
</script>
