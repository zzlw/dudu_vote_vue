<template>
  <div v-if="info" class="">

    <x-dialog :show="Number(info.status) !== 1" :hide-on-blur="false" :dialog-style="{width: '100%'}">
      <div class="plr30">

        <div class="color2 size32 flex-wrp flex-middle ptb30 border-b">温馨提示</div>

        <div v-if="Number(info.status) === 2" class="pb50">
          <div class="size26 color2 ptb30">您的资料审核未通过</div>
          <div class="plr60">
            <router-link to="enter" class="link-btn-main ptb15 size26">重新报名</router-link>
          </div>
        </div>

        <div class="size26 color2 flex-wrp flex-center pt50 pb50" v-else>
          正在审核中，请耐心等待...
        </div>
      </div>
    </x-dialog>


    <div class="" :style="{height: rem(300),backgroundColor:`#0ccdb6`}">
      <div class="flex-wrp flex-cell flex-align-center pt30">
        <base-avatar :src="info&&info.headimgurl" class="bg-white"/>
        <div class="color1 size26 pt20">{{info.name}}</div>
      </div>
      <div class="flex-wrp flex-between plr30 pt15">
        <div class="color1 size22">今日票数:{{info.today_votes}}</div>
        <div class="color1 size22">编号:{{info.id}}</div>
        <div class="color1 size22">今日礼物:{{info.today_gifts}}</div>
      </div>
    </div>
    <div class="base-data-three flex-wrp flex-around bg-white ptb15 plr10 border-b">
      <div :class="['text-center',{'border-r': index!==(data.length-1)}]" v-for="(item, index) in info.data"
           :key="index"
           :style="{flex:1}">
        <div class="size26 color5 lh150">{{item.number}}</div>
        <div class="size16 color5 lh150 pt5">{{item.text}}</div>
      </div>
    </div>

    <div class="bg-white mt20 plr20 pb15">
      <div class="color2 size22 ptb10">收到的礼物</div>
      <div class="flex-wrp">
        <div class="flex-wrp flex-cell flex-center mlr10" v-for="(item, index) in listSix" :key="index">
          <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(100), height: rem(100)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                 :style="{backgroundImage:`url(${item.image})`}"/>
          </div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.name}}</div>
          <div class="color4 size16 text-center text-nowrap-one">{{item.sum}}个</div>
        </div>
      </div>
    </div>


    <group label-width="2.5rem" label-margin-right="2em" label-align="left" gutter=".32rem">
      <cell title="我的奖品" is-link value-align="right" link="prize-exchange"/>
    </group>

    <group label-width="2.5rem" label-margin-right="2em" label-align="left" gutter=".32rem">
      <cell title="分享宣传" value="生成海报" is-link value-align="right"
            :link="`/activity/${activity.id}/player/${info.id}/card`"/>
      <cell>
        <div class="color4 size22 lh200 text-left inline-block">{{publicity}}
          <div class="color13 size16 inline-block plr15 lh100 ptb10 ml10 border-radius5"
               :style="{'border': '1px solid #2ad6bc'}" @click="doCopy">复制链接
          </div>
        </div>
      </cell>
    </group>


    <ActivityPrizes v-if="prizes" :prizes="prizes"/>



  </div>
</template>

<script>
  import ActivityPrizes from '@/components/activity/ActivityPrizes'
  import { createNamespacedHelpers } from 'vuex'

  const {mapActions, mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      ActivityPrizes,
    },
    data () {
      return {
        list: [
          {
            srcImg: '',
            title: '星星',
            time: '666',
          },
          {
            srcImg: '',
            title: '掌声',
            time: '666',
          },
          {
            srcImg: '',
            title: '红玫瑰',
            time: '666',
          },
          {
            srcImg: '',
            title: '蛋糕',
            time: '666',
          },
          {
            srcImg: '',
            title: '哆啦A梦',
            time: '666',
          },
        ],
        text: '我是一号，我是一号我是一号我是一我是一号我是一号我是一号，我是一号我',
        ewmLink: 'http://baidu.com',
        srcImg: '',
        data: [
          {
            number: 167,
            text: '总票数',
          },
          {
            number: 167,
            text: '转发量',
          },
          {
            number: 167,
            text: '浏览量',
          },
          {
            number: 167,
            text: '礼物数',
          },
        ],
      }
    },
    computed: {
      publicity () {
        return `我是1号，我叫吴秀波，正在参加寻找最美老板娘活动开 始了，赢取1000元大礼包！点击链接帮我投票吧！`
      },
      listSix () {
        if (this.info) {
          return this.info.aggregate_gifts.splice(0, 6)
        } else {
          return []
        }
      },
      ...mapState({
        'info': state => state.personal.info,
        'personal': state => state.personal,
        'activity': state => state.activity.info,
        'prizes': state => state.prizes.info,
      }),
    },
    async mounted () {
      await this.fetchPersonal(this.activity.id)

      if (String(this.personal.error) === '你还没有报名') {
        this.$router.replace(`/activity/${this.activity.id}/enter`)
      }
      await this.fetchActivityPrizes(this.activity.id)

      this.pv(this.activity.operator_id, this.activity.id, 0)
    },
    methods: {
      ...mapActions({
        'fetchPersonal': 'fetchPersonal',
        'fetchActivityPrizes': 'fetchActivityPrizes',
      }),
      async doCopy () {
        this.$copyText(this.publicity).then(
          (e) => {
            this.$vux.toast.show({
              type: 'success',
              text: `<div class='color13 size16'>复制成功</div>`,
              position: 'middle',
            })
          },
          (e) => {
            this.$vux.toast.show({
              type: 'warn',
              text: `<div class='color6 size16'>复制失败</div>`,
              position: 'middle',
            })
          }
        )
      },
    },

  }
</script>

<style lang="scss" scoped>
  .search-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 36px;
    top: 10px;
  }

  .numberImg {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .voteTiele {
    position: absolute;
    right: 20px;
    bottom: 70px;
  }

  .numberIcon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 55px;
    height: 70px;
    &.no1 {
      background: url(~assets/img/web/no1.png) no-repeat center / cover;
    }
    &.no2 {
      background: url(~assets/img/web/logo_no2.png) no-repeat center / cover;
    }
    &.no3 {
      background: url(~assets/img/web/logo_no3.png) no-repeat center / cover;
    }
  }

  .numberText {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .guanbi {
    // position: absolute;
    // top: -10px;
    // right: -10px;
    padding: 10px 20px;
    // z-index: 999;
  }

  .fixedBottomLink {
    position: fixed;
    bottom: 90px;
  }
</style>

