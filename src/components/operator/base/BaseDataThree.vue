<template>
  <div class="base-data-three flex-wrp flex-around" >
    <div class="text-center" v-for="(item, index) in data" :key="index" :style="{flex: 1}">
        <slot name="number" :number="item.number">{{item.number}}</slot>
        <slot name="title" :title="item.text">{{item.text}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 检测类型 + 其他验证
    data: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
    }
  },
  mounted () {},
  components: {},
}
</script>

<style lang="scss" scoped>
.my-avatar {
  background: rgb(204, 204, 204);
  &.circle {
    border-radius: 50%;
    overflow: hidden;
  }
  &.square {
    border-radius: 5px;
    overflow: hidden;
  }
  &.large {
    width: 160px;
    height: 160px;
  }
  &.small {
    width: 80px;
    height: 80px;
  }
  &.default {
    width: 130px;
    height: 130px;
  }
}
</style>
