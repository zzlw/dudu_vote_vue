<template>
  <div class="pb60" style="width: 100%; height: 100%;">
    <router-view></router-view>
    <tabbar v-model="$route.meta.index" :style="{ position: 'fixed' }" class="bg-284860">
      <tabbar-item class="border-r" :link="{path:'children', replace: true}">
        <span slot="label" :class="[$route.meta.index=='0'?'color13':'color1']">综合数据</span>
      </tabbar-item>
      <tabbar-item class="border-r" :link="{path:'children-log', replace: true}">
        <span slot="label" :class="[$route.meta.index=='1'?'color13':'color1']">兑换记录</span>
      </tabbar-item>
      <tabbar-item :link="{path:'children-admin', replace: true}">
        <span slot="label" :class="[$route.meta.index=='2'?'color13':'color1']">报名用户</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>
