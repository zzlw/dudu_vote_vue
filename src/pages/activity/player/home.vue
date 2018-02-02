<template>
  <div>
    <div v-if="player">
      <!--<div class="bg-cover" :style="{height: rem(300),backgroundImage:`url(${player.picture})`}"></div>-->
      <!--轮播图-->
      <InputSwiper v-model="activity.sliders" :preview="true" :show-dots="true"/>

      <div class="base-data-three flex-wrp flex-around bg-white ptb15 plr10 border-b">

        <div :class="['text-center',{'border-r': true}]" :style="{flex:1}">
          <div class="size26 color5 lh150">{{player.gain_votes}}</div>
          <div class="size16 color5 lh150 pt5">总票数</div>
        </div>
        <div :class="['text-center',{'border-r': true}]" :style="{flex:1}">
          <div class="size26 color5 lh150">{{player.transfer_count}}</div>
          <div class="size16 color5 lh150 pt5">转发量</div>
        </div>
        <div :class="['text-center',{'border-r': true}]" :style="{flex:1}">
          <div class="size26 color5 lh150">{{player.pv}}</div>
          <div class="size16 color5 lh150 pt5">浏览量</div>
        </div>
        <div :class="['text-center',{'border-r': false}]" :style="{flex:1}">
          <div class="size26 color5 lh150">{{player.gift_count}}</div>
          <div class="size16 color5 lh150 pt5">礼物数</div>
        </div>

      </div>

      <div class="plr30 ptb20 flex-wrp flex-align-center bg-white">
        <div class="color2 size26 pr50">{{player.name}}</div>
        <div class="flex-wrp flex-between">
          <div class="flex-wrp flex-between flex-align-center">
            <div class="plr10 bg-ff404b border-radius5" :style="{width: rem(18), height: rem(30)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                <use :xlink:href="`#icon-shangsheng`"></use>
              </svg>
            </div>
            <div class="color5 size16 pl10">前一名差：{{player.previous_gap}}</div>
          </div>
          <div class="flex-wrp flex-between flex-align-center pl25">
            <div class="plr10 bg-gray border-radius5" :style="{width: rem(18), height: rem(30)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                <use :xlink:href="`#icon-xiajiang`"></use>
              </svg>
            </div>
            <div class="color5 size16 pl10">后一名差：{{player.last_gap}}</div>
          </div>
        </div>
      </div>

      <div class="bg-white pd20 lh200 color5 mt15">
        {{activity.title}}
      </div>

      <div class="pd20 bg-white" :style="{height: rem(300)}">
        <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
             :style="{backgroundImage:`url(${player.picture})`}"/>
      </div>

      <div class="ptb30 bg-white">
        <div class="plr20 ptb10">
          <ActivityPlayerVoting :player="player" @on-voting="onVoting">
            <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">投Ta一票</div>
          </ActivityPlayerVoting>
        </div>
        <div class="plr20 ptb10">
          <router-link :to="`/activity/${activity.id}/player/${player.id}/gift`">
            <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">赠送礼物投票</div>
          </router-link>
        </div>
        <div class="plr20 ptb10">
          <router-link :to="`/activity/${activity.id}/player/${player.id}/card`">
            <div class="bg-ff404b color1 size26 text-center border-radius5 ptb15">生成海报</div>
          </router-link>

        </div>
      </div>

      <div class="bg-white mt20 plr20 pb15">
        <div class="color2 size22 ptb10">他们刚刚帮TA投票了!</div>
        <div v-if="player.events">
          <swiper :height="rem(170)" :show-dots="false" loop :duration="1500">
            <swiper-item v-for="(item, index) in cateGroup" :key="index" class="flex-wrp">
              <div class="flex-wrp flex-cell flex-center mlr10" :style="{flex: 1}" v-for="(t, i) in item" :key="i">
                <div class="flex-wrp flex-center border-radius overflow-hidden"
                     :style="{width: rem(90), height: rem(90)}">
                  <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                       :style="{backgroundImage:`url(${t.headimgurl})`}"/>
                </div>
                <div class="color4 size16 text-center text-nowrap-one">{{t.nickname}}</div>
                <div class="color4 size16 text-center text-nowrap-one">{{t.created_at}}</div>
              </div>
            </swiper-item>
          </swiper>
        </div>
      </div>

      <div class="color2 size26 text-center bg-white ptb20">— 收到的礼物 —</div>

      <div class="border-t">
        <div
             v-if="player.events"
             v-for="(item, index) in player.events.gift_vote"
             :key="index"
             class="flex-wrp flex-between flex-align-center plr20 ptb15 bg-white border-b"
        >
          <div class="flex-wrp flex-between">
            <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(50), height: rem(50)}">
              <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                   :style="{backgroundImage:`url(${item.headimgurl})`}"/>
            </div>
            <div class="flex-wrp flex-between flex-align-center pl15">
              <div class="color5 size22">{{`${item.nickname}`}}赠送</div>
              <div class="plr10" :style="{width: rem(40), height: rem(50)}">
                <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                     :style="{backgroundImage:`url(${item.gift_img})`}"/>
              </div>
              <div class="color5 size22">票+{{item.votes}}</div>
            </div>
          </div>
          <div class="color5 size16">{{item.created_at}}</div>
        </div>
        <div class="size16 color5 ptb10 text-center bg-white">没有更多了</div>
      </div>

      <div class="plr20 bg-white">
        <div class="color2 size26 text-center ptb20 mt15">— 活动介绍 —</div>
        <div class="color4 size26 flex-wrp flex-center ptb15">
          <InputRichText v-model="activity.content" :preview="true"/>
        </div>
      </div>

      <ActivityPrizes :prizes="prizes"/>

      <div class="w100 fixedBottomLink bg-alpha">
        <div class="plr60 ptb20 flex-wrp flex-between">

          <ActivityPlayerVoting :player="player" @on-voting="onVoting">
            <div class="ptb10 size26 plr40 color1 border-radius5"
                 :style="{backgroundColor: '#ff404b'}">给Ta投票
            </div>
          </ActivityPlayerVoting>

          <router-link :to="`/activity/${activity.id}/player/${player.id}/gift`">
            <div class="ptb10 size26 plr40 color1 border-radius5" :style="{backgroundColor: '#ff404b'}">赠送礼物</div>
          </router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import InputText from '@/components/input/InputText'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import ActivityPrizes from '@/components/activity/ActivityPrizes'
  import ActivityPlayerVoting from '@/components/activity/ActivityPlayerVoting'
  import { api } from 'h5sdk'
  import chunk from 'lodash/chunk'

  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputText,
      InputSwiper,
      InputRichText,
      ActivityPrizes,
      ActivityPlayerVoting
    },
    data () {
      return {
        showDialog: false,
        // events: {
        //   gift_vote: [],
        //   ordinary_vote: [],
        // },
        timer: null,
        timeValue: '',

        data: [
          {
            number: 167,
            text: '总票数'
          },
          {
            number: 167,
            text: '转发量'
          },
          {
            number: 167,
            text: '浏览量'
          },
          {
            number: 167,
            text: '礼物数'
          }
        ]
      }
    },
    computed: {
      ...mapState({
        activity: state => state.activity.info,
        player: state => state.player.info,
        prizes: state => state.prizes.info
      }),
      listSix () {
        return this.list.splice(0, 6)
      },
      cateGroup () {
        return chunk(this.player.events.ordinary_vote, 5)
      }
    },
    methods: {
      onVoting (votes) {
        this.player.gain_votes += votes
      },
      // async fetchEvents () {
      //   this.$store.dispatch('loading')
      //   const {data} = await api.get('activity_player_events', {
      //     player_id: this.player.id
      //   })
      //   this.$store.dispatch('loaded')
      //
      //   this.events = data.data
      // }
    },
    mounted () {
      // this.fetchEvents()
    }
  }
</script>

<style lang="scss" scoped>
  .fixedBottomLink {
    position: fixed;
    bottom: 0px;
  }

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
</style>

