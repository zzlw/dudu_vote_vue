<template>
  <div v-if="activity">

    <ActivityThemeDefault v-if="activity" :activity="activity" :publish="publish"/>
    <divider>我是有底线的</divider>

  </div>
</template>

<script>
  import ActivityThemeDefault from '@/components/operator/activity/themes/OperatorActivityThemesDefault'
  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    components: {
      ActivityThemeDefault,
    },
    data () {
      return {}
    },
    created () {
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
      async publish (activity) {
        const that = this
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_activity_update', activity)
        this.$store.dispatch('loaded', 0)

        if (data.error) {
          this.$vux.toast.show({text: data.message})
        } else {
          this.$vux.toast.show({
            text: data.message,
            onHide: () => {
              that.$router.push('/operator')
            },
          })
        }
      },
    },
  }
</script>

<style scoped>
  button {
    border: 1px solid;
  }
</style>
