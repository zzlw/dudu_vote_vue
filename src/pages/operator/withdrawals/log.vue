<template>
    <div class="pb60">

        <base-navigation title="提现记录"></base-navigation>
        <group>
            <form-preview header-label="<span class=color2>提现金额</span>" :header-value="`<span class=color13>${897.20}</span>`" :body-items="list"></form-preview>
        </group>
        <group>
            <form-preview header-label="<span class=color2>提现金额</span>" :header-value="`<span class=color13>${897.20}</span>`" :body-items="list"></form-preview>
        </group>
    </div>
</template>

<script>
import { api } from 'h5sdk'
export default {
  data () {
    return {
      list: [{
        label: '提现到账金额',
        value: '897.20'
      }, {
        label: '技术服务费',
        value: '0.00'
      }, {
        label: '提现状态',
        value: '提现成功'
      }, {
        label: '提现时间',
        value: '2018-01-02 16：36'
      }]
    }
  },
  async created () {},

  methods: {}
}
</script>

<style scoped>

</style>
