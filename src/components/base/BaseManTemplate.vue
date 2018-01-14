<template>
<div class="pd20">
    <div class="border-radius5 bg-white overflow-hidden">
        <div class="bg-ddd"  :style="{height: rem(300)}"></div>
        <div class="flex-wrp flex-align-center flex-between plr30 ptb20"  >
            <div class="color2 size26">男神模板</div>
            <div class="size16 color4">{{`已使用${789}次`}}</div>
            <div class="size26 color1 bg-29d6bf plr30 ptb5 border-radius5">制作投票</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      icons:[
          'icon-yanjing',
          'icon-liwu',
          'icon-renshutongji',
      ],
      data: [
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        },
        {
          number: 167.5,
          text: "总交易额"
        }
      ]
    };
  },

  mounted() {},

  components: {},

  methods: {}
};
</script>

<style lang="scss" scoped>

</style>

