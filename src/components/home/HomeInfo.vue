<template>
    <div class="flex-wrp flex-between overflow-hidden bg-alpha" :style="{'border-radius': '50px','border-top-right-radius':'10px','border-bottom-right-radius':'10px'}">
        <div class="flex-wrp flex-middle">
            <base-avatar icon="icon-weixin" size="small"/>
            <div class="color1 pl5 flex-wrp flex-cell flex-middle">
                <div class="size22 color1">王尼玛</div>
                <div class="size16 color1">个人中心</div>
            </div>
        </div>
        <div class="ptb10 flex-wrp flex-center">
            <div class="flex-wrp flex-center plr20 border-l">
                <div class="size22 color1 pr15">{{`推荐码：${81212.28}`}}</div>
                <div class="size16 border border-radius5 ptb5 plr10 bg-grey overflow-hidden lh150 color2">邀请好友</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  },

  mounted() {},

  components: {},

  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>

