<template>
    <div>
        <h3>
            添加活动-主题-Default
        </h3>

        <!--轮播图编辑器-->

        <OperatorActivityEditorSwiper v-model="activity.swiper" :preview="preview"/>

        <div class="base-data-three flex-wrp flex-around bg-white ptb10" >
            <div :class="['text-center plr60',{'border-l': index==1,'border-r': index==1}]" v-for="(item, index) in data" :key="index">
                <div class="bold size26 color5 lh150">{{item.number}}</div>
                <div class="size22 color5 lh150">{{item.text}}</div>
            </div>
        </div>

        <!--活动标题-->
        <OperatorActivityEditorText v-model="activity.title" :preview="preview"/>

        <!--内容标题-->
        <OperatorActivityEditorText v-model="activity.contentTitle" :preview="preview"/>

        <!--内容-->
        <OperatorActivityEditorContent v-model="activity.content" :preview="preview"/>

        开始时间<input type="text" v-model="activity.startTime"> <br>
        结束时间<input type="text" v-model="activity.endTime"> <br>
        开通报名<input type="text" v-model="activity.signUpManner"> <br>
        投票类型<input type="text" v-model="activity.voteType"> <br>
        多久重新投票<input type="text" v-model="activity.nextVoteTime"> <br>
        奖品兑换数量<input type="text" v-model="activity.limitedExchangeCount"> <br>

        <button v-if="!preview" @click="preview=true">预览</button>
        <button v-if="preview" @click="preview=false">编辑</button>

        <button @click="publish(activity)">发布</button>

    </div>
</template>

<script>
import OperatorActivityEditorText from "@/components/operator/activity/editor/OperatorActivityEditorText";
import OperatorActivityEditorSwiper from "@/components/operator/activity/editor/OperatorActivityEditorSwiper";
import OperatorActivityEditorContent from "@/components/operator/activity/editor/OperatorActivityEditorContent";

export default {
  props: ["activity", "publish", "preview"],
  components: {
    OperatorActivityEditorText,
    OperatorActivityEditorSwiper,
    OperatorActivityEditorContent
  },
  name: "add",
  data() {
    return {
      // base-data-three start
      data: [
        {
          number: 167,
          text: "参与选手"
        },
        {
          number: 167,
          text: "累计投票"
        },
        {
          number: 167,
          text: "访问量"
        }
      ]
    };
  }
};
</script>

<style scoped>
button {
  border: 1px solid;
}

input {
  border: 1px solid;
}
</style>
