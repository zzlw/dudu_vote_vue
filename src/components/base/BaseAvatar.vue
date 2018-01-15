<template>
  <div class="my-avatar flex-wrp flex-center overflow-hidden" :class="[size, shape]">
    <img v-if="src" width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${src})`}" />
    <svg v-if="icon&&!src" class="icon base-menu-icon" aria-hidden="true">
        <use :xlink:href="`#${icon}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    // 检测类型
    shape: {
      type: String,
      default: "circle",
      required: false,
      validator: function(value) {
        return /^circle|square$/.test(value);
      }
    },
    // 检测类型 + 其他验证
    size: {
      type: String,
      default: "default",
      required: false,
      validator: function(value) {
        return /^large|small|smallsmall|default$/.test(value);
      }
    },
    icon: {
      type: String,
      required: false
    },
    src: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  components: {}
};
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
    width: 76px;
    height: 76px;
  }
  &.smallsmall {
    width: 40px;
    height: 40px;
  }
  &.default {
    width: 130px;
    height: 130px;
  }
}
</style>
