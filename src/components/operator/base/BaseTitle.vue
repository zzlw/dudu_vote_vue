<template>
    <div class="plr30 ptb20 flex-wrp bg-white">
        <base-avatar :icon="icon" size="smallsmall" class="bg-29d6bf"/>
        <div class="size26 pl10 color2">{{title}}</div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '请输入标题',
      type: String,
      required: false,
    },
    icon: {
      type: String,
      default: 'icon-qushi',
    },
  },
  data () {
    return {}
  },

  mounted () {},

  components: {
  },

  methods: {},
}
</script>

<style lang="scss" scoped>

</style>

