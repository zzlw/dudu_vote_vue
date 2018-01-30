<template>
  <div class="pb60">
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {}
    },
    async created () {
      await this.logout()
      this.$router.push('/operator-login')
    },
    computed: {
      ...mapState('operator', {
        'operator': 'operator',
      }),
    },
    methods: {
      ...mapActions([
        'logout',
      ]),
    },
  }
</script>

<style scoped>

</style>
