<template>
  <div class="" >
    <div class="bg-white ptb40 color2 size26 text-center">我的推广卡</div>
    <div class="pt20 plr40 flex-wrp flex-center">
      <div class="" :style="{width: rem(600)}">
        <img width="100%" height="100%" src="~/assets/img/web/tg_img.png" class="bg-cover"  />
      </div>
    </div>
    <div class="pt40 color15 size26 text-center">长按保存图片,推荐给好友</div>
  </div>
</template>

<script>
import InputText from "@/components/input/InputText";
import { timeDiffObj } from "@/utils/index";
import chunk from 'lodash/chunk'
import moment from "moment";
export default {
  data() {
    return {
      srcImg: '',
    };
  },
  methods: {
  },
  mounted() {
  },
  computed: {
  },
  beforeDestroy() {
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
</style>

