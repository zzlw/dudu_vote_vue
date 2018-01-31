<template>
    <div class="pb60">

        <base-navigation title="绑定手机账号"></base-navigation>
        <group label-width="2rem" label-margin-right="2em" label-align="left">
            <x-input title="手机号码" placeholder="请输入手机号码" type='tel' required v-model="mobile" />
            <x-input
                title="验证码"
                placeholder="请输入验证码"
                type='number'
                required v-model="code"
            >
                <x-button
                    action-type="button"
                    type="primary"
                    mini
                    :disabled="disabled"
                    :text="`${showCode}`"
                    slot='right'
                    class="bg-29d6bf nbr"
                    @click.native="setTime"
                />
            </x-input>
        </group>
        <div class="plr20 ptb50">
            <div class="link-btn-main size26 ptb15" >提交</div>
        </div>
    </div>
</template>

<script>
import { api } from 'h5sdk';
import { timeDiffArray, timeDiffObj } from "@/utils";
import moment from "moment";
export default {
  data() {
    return {
      disabled: false,
      mobile: "",
      code: "",
      showCode: "发送验证码",
      time_start: null,
      timeValue: null,
      now: moment()
    };
  },
  async created() {},

  methods: {
    timeUpdate(time) {
      if (moment().isBefore(this.time_start)) {
        this.timeValue = timeDiffObj(this.time_start, time);
        this.showCode = this.timeValue.seconds + " s";
      } else {
        this.timer && clearInterval(this.timer);
        this.showCode = "发送验证码";
        this.disabled = false;
      }
    },
    setTime() {
      let tel = this.validateTel(this.mobile);

      if (!tel.valid) {
        this.$vux.toast.text(tel.msg, "middle");
        return;
      }
      this.$vux.toast.text("发送成功", "middle");
      let time = moment();
      this.time_start = time + 60000;
      this.disabled = true;
      this.timer = setInterval(this.timeUpdate, 1000, time);
    }
  },

  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style scoped>

</style>
