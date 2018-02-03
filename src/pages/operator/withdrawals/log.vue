<template>
  <div class="pb60">

    <base-navigation title="提现记录"/>

    <group v-for="(item, index) in items" :key="index">
      <form-preview
        header-label="<span class=color2>提现金额</span>"
        :header-value="`<span class=color13>${item.fee}</span>`"
        :body-items="formatItemList(item)"/>
    </group>

  </div>
</template>

<script>
  import { api } from 'h5sdk'

  export default {
    data () {
      return {
        items: [],
      }
    },
    async created () {
      this.fetchData()
    },

    methods: {
      async fetchData () {
        this.$store.dispatch('loading')
        const {data} = await api.get('operator_withdrawals')
        this.$store.dispatch('loaded', 0)
        this.items = data.data
      },
      formatItemList (item) {
        return [
          {
            label: '提现到账金额',
            value: item.fee,
          },
          {
            label: '技术服务费',
            value: '0.00',
          },
          {
            label: '提现状态',
            value: item.status,
          },
          {
            label: '提现时间',
            value: item.created_at,
          },
        ]
      },
    },
  }
</script>

<style scoped>

</style>
