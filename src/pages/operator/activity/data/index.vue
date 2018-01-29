<template>
  <div class="pb60">
    <router-view></router-view>
    <tabbar v-model="$route.meta.index" :style="{ position: 'fixed' }" class="bg-284860">
      <tabbar-item class="border-r" link="children">
        <span slot="label" :class="[$route.meta.index=='0'?'color13':'color1']">综合数据</span>
      </tabbar-item>
      <tabbar-item class="border-r" link="children-log">
        <span slot="label" :class="[$route.meta.index=='1'?'color13':'color1']">兑换记录</span>
      </tabbar-item>
      <tabbar-item link="children-admin">
        <span slot="label" :class="[$route.meta.index=='2'?'color13':'color1']">报名用户</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        index: 1,
        list3: [
          {
            title: '全部选手',
            number: 3423,
          },
          {
            title: '未审核',
            number: 3423,
          },
          {
            title: '已审核',
            number: 3423,
          },
        ],
      }
    },
    async created () {
      console.log(this)
    },

    methods: {},
  }
</script>

<style lang="scss" scoped>

</style>
