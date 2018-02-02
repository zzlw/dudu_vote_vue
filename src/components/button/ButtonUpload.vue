<template>

  <div class="bg-alpha pd10" :style="{width: rem(170)}" @click="upload">
    <div class="flex-wrp flex-center" :style="{height: rem(70)}">
      <svg class="icon base-menu-icon" aria-hidden="true">
        <use :xlink:href="`#icon-jia`"></use>
      </svg>
    </div>
    <div class="flex-wrp flex-middle color1 size16">上传图片</div>
    <div class="flex-wrp flex-middle color1 size16">比例（9:16）</div>
  </div>

</template>

<script>
  export default {
    props: ['upload'],
    data () {
      return {}
    },
    computed: {},
    methods: {},
    components: {},
  }
</script>

<style lang="scss" scoped>

</style>


