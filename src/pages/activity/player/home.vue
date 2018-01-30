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
            <div class="color5 size16 pl10">前一名差：{{player.last_gap}}</div>
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
          <div @click="clickVote" class="bg-ff404b color1 size26 text-center border-radius5 ptb15">投Ta一票</div>
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
        <div class="flex-wrp">
          <div class="flex-wrp flex-cell flex-center mlr10" v-for="(item, index) in listSix" :key="index">
            <div class="flex-wrp flex-center border-radius overflow-hidden"
                 :style="{width: rem(100), height: rem(100)}">
              <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                   :style="{backgroundImage:`url(${item.srcImg})`}"/>
            </div>
            <div class="color4 size16 text-center text-nowrap-one">{{item.title}}</div>
            <div class="color4 size16 text-center text-nowrap-one">{{item.time}}</div>
          </div>
        </div>
      </div>

      <div class="color2 size26 text-center bg-white ptb20">— 收到的礼物 —</div>

      <div class="border-t">
        <div class="flex-wrp flex-between flex-align-center plr20 ptb15 bg-white border-b"
             v-for="(item, index) in listInfo" :key="index">
          <div class="flex-wrp flex-between">
            <div class="flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(50), height: rem(50)}">
              <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                   :style="{backgroundImage:`url(${item.srcImg})`}"/>
            </div>
            <div class="flex-wrp flex-between flex-align-center pl15">
              <div class="color5 size22">{{`${item.title}`}}赠送</div>
              <div class="plr10" :style="{width: rem(40), height: rem(50)}">
                <svg class="icon base-menu-icon" aria-hidden="true">
                  <use :xlink:href="`#icon-liwu1`"></use>
                </svg>
              </div>
              <div class="color5 size22">票+122</div>
            </div>
          </div>
          <div class="color5 size16">{{item.time}}</div>
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
          <div @click="clickVote" class="ptb10 size26 plr40 color1 border-radius5" :style="{backgroundColor: '#ff404b'}">给Ta投票</div>
          <router-link :to="`/activity/${activity.id}/player/${player.id}/gift`">
            <div class="ptb10 size26 plr40 color1 border-radius5" :style="{backgroundColor: '#ff404b'}">赠送礼物</div>
          </router-link>
        </div>
      </div>

      <!--投票成功-->
      <x-dialog :show.sync="showDialog" :hide-on-blur="true" :dialog-style="{width: '100%'}">
        <div class="pt30 plr30">
          <div class="flex-wrp flex-center border-b pb20">
            <div class="" :style="{width: rem(50), height: rem(50)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                <use :xlink:href="`#icon-chenggong`"></use>
              </svg>
            </div>
            <div class="color2 size32 pl20">投票成功</div>
          </div>
          <div class="color5 size22 ptb50">好友也可以帮忙，一天后还能再投票哦！</div>
          <div class="ptb15 bg-ff404b size26 color1 border-radius5">给TA送礼物加票</div>
          <div class="flex-wrp flex-center" @click="showDialog=false">
            <div class="guanbi border-radius">
              <svg class="icon base-menu-icon" aria-hidden="true" :style="{width: rem(52), height: rem(80)}">
                <use :xlink:href="`#icon-shanchu4-copy`"></use>
              </svg>
            </div>
          </div>
        </div>
      </x-dialog>


    </div>
  </div>
</template>

<script>
  import InputText from '@/components/input/InputText'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import InputRichText from '@/components/input/rich-text/InputRichText'
  import ActivityPrizes from '@/components/activity/ActivityPrizes'
  import moment from 'moment'
  import { api } from 'h5sdk'

  import { createNamespacedHelpers } from 'vuex'
  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputText,
      InputSwiper,
      InputRichText,
      ActivityPrizes,
    },
    data () {
      return {
        showDialog: false,
        list: [
          {
            srcImg: '',
            title: '你好哈士奇',
            time: '10-21 08:54'
          },
          {
            srcImg: '',
            title: '你好哈士奇',
            time: '10-21 08:54'
          },
          {
            srcImg: '',
            title: '你好哈士奇',
            time: '10-21 08:54'
          },
          {
            srcImg: '',
            title: '你好哈士奇',
            time: '10-21 08:54'
          },
          {
            srcImg: '',
            title: '你好哈士奇',
            time: '10-21 08:54'
          }
        ],
        listInfo: [
          {
            srcImg: '',
            title: 'Angelababy',
            time: '10-21 08:54'
          },
          {
            srcImg: '',
            title: 'Angelababy',
            time: '10-21 08:54'
          }
        ],
        show2: true,
        srcImg: '',
        preview: true,
        now: moment(),
        timer: null,
        timeValue: '',
        twoDate: [
          {
            srcImg: '',
            number: 1,
            vote: 1,
            liwu: 2
          },
          {
            srcImg: '',
            number: 1,
            vote: 1,
            liwu: 2
          },
          {
            srcImg: '',
            number: 1,
            vote: 1,
            liwu: 2
          },
          {
            srcImg: '',
            number: 1,
            vote: 1,
            liwu: 2
          }
        ],
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
          },
        ],
      }
    },
    computed: {
      ...mapState({
        'activity': (state) => state.activity.info,
        'player': (state) => state.player.info,
        'prizes': (state) => state.prizes.info,
      }),
      listSix () {
        return this.list.splice(0, 6)
      },
    },
    methods: {
      async clickVote () { // 投普通票
        const {data} = await api.get('activity_voting', {
          player_id: this.player.id,
        })

        if (data.error) {
          alert(data.message)
        } else {
          this.player.gain_votes += 1
          this.showDialog = true
        }
      },
    },
    mounted () {
    },

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

