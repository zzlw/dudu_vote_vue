<template>
  <div>

    <group label-width="2.5rem" label-margin-right="2em" label-align="left">
      <x-switch
        class="color2"
        title="报名审核"
        inline-desc="点则表示需手动审核"
        :value-map="['0', '1']"
        :preventDefault="true"
        @on-click="onAuditClick"
        v-model="audit_manner"/>
    </group>

  </div>
</template>

<script>
  import { api } from 'h5sdk'

  export default {
    props: [
      'activityId',
    ],
    data () {
      return {
        audit_manner: '1',
      }
    },
    async created () {
      this.fetchActivityData()
    },
    methods: {
      async onAuditClick (newVal, oldVal) {
        let requestData = {
          activity_id: this.activityId,
          audit_manner: newVal ? '1' : '0',
        }
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_audit_switch', requestData)
        this.$store.dispatch('loaded')

        if (data.error) {
          this.audit_manner = oldVal ? '1' : '0'
        } else {
          this.audit_manner = newVal ? '1' : '0'
        }

        this.$vux.toast.show({
          text: data.message,
        })
      },
      async fetchActivityData () {
        this.$store.dispatch('loading')
        const {data} = await api.get('operator_activity', {id: this.activityId})
        this.$store.dispatch('loaded')

        this.audit_manner = String(data.data.audit_manner)
      },
    },
  }
</script>
