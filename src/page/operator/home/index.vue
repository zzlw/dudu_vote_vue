<template>
    <div>
        <div class="bg-deepblue">
            <div class="flex-wrp flex-center ptb60">
                <div class="size60 color1">81212.28</div>
                <div class="border border-radius5 ptb5 plr20 ml20 color1 size16">立即提现</div>
            </div>
            <base-data-three :data="data">
                <div slot="number" slot-scope="{ number }" class="bold size26 color1 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
            </base-data-three>
            <div class="plr40 ptb20">
                <home-info />
            </div>
        </div>
        <base-tiele title="今日数据" class="border-b"/>
        <div class="ptb20 bg-white">
            <base-data-three :data="data">
                <div slot="number" slot-scope="{ number }" class="size26 color2 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
            </base-data-three>
            <base-data-three :data="data" class="pt20">
                <div slot="number" slot-scope="{ number }" class="size26 color2 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color4">{{title}}</div>
            </base-data-three>
        </div>
        <div class="mt20 plr30 ptb20 flex-wrp bg-white">
            <div class="border-r pr20 color2 size26" :style="{'border-color':'rgba(176, 247, 237, 0.9)'}">活动工告</div>
            <div class="size26 pl20 text-nowrap color2">今日数据</div>
        </div>
        <base-tiele class="mt20 border-b" title="今日数据"/>
        <base-activity-list class="mb20"/>
        <base-activity-list class="mb20"/>
        <base-tiele title="我的活动" class="border-b"/>
        <base-man-template />
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

