<template>
  <div class="pb60">
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import { api } from 'h5sdk'
  import { SAVE_OPERATOR } from '@/store/modules/operator'

  export default {
    data () {
      return {}
    },
    async created () {
      await api.post('operator_logout')
      this.saveOp({
        operator: null
      })
      this.$router.push('/operator-login')
    },
    computed: {
      ...mapState('operator', {
        'operator': 'operator',
      }),
    },
    methods: {
      ...mapMutations({
        'saveOp': 'operator/' + SAVE_OPERATOR,
      }),
      logout () {
        console.log('logout')
      },
    },
  }
</script>

<style scoped>

</style>
