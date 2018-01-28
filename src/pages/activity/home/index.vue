<template>
  <div class="">

    <div v-if="activity">

      <!--轮播图-->
      <InputSwiper v-model="activity.sliders" :preview="true" :show-dots="true"/>

      <div class="base-data-three flex-wrp flex-around bg-white ptb10 border-b">

        <div class="text-center plr60 border-r">
          <div class="bold size26 color5 lh150">{{activity.player_count}}</div>
          <div class="size22 color5 lh150">参与选手</div>
        </div>
        <div class="text-center plr60 border-r">
          <div class="bold size26 color5 lh150">{{activity.vote_count}}</div>
          <div class="size22 color5 lh150">累计投票</div>
        </div>
        <div class="text-center plr60 border-r">
          <div class="bold size26 color5 lh150">{{activity.pv}}</div>
          <div class="size22 color5 lh150">访问量</div>
        </div>

      </div>

      <!--// 活动标题-->
      <div class="flex-wrp flex-align-center flex-between bg-white h100 pt10">
        <div :style="{width: rem(40),height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-yinliang`"></use>
          </svg>
        </div>
        <!--// 活动标题-->
        <InputText v-model="activity.title" :preview="preview" class="mr10 w100 nbr  pt10 pb20"/>
      </div>

      <!--计时器-->
      <div class="flex-wrp flex-middle bg-white pt10 pb20">
        <template v-if="moment().isBefore(buying.time_start)">
          <div class="color2 size16">距离开始</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.days}}</div>
          <div class="color2 size16">天</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.hours}}</div>
          <div class="color2 size16">时</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.minutes}}</div>
          <div class="color2 size16">分</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.seconds}}</div>
          <div class="color2 size16">秒</div>
        </template>
        <template v-else-if="moment().isBefore(buying.time_end)">
          <div class="color2 size16">距离结束</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.days}}</div>
          <div class="color2 size16">天</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.hours}}</div>
          <div class="color2 size16">时</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.minutes}}</div>
          <div class="color2 size16">分</div>
          <div class="mlr5 color1 size16 plr10 border-radius5 bg-deepblue">{{timeValue&&timeValue.seconds}}</div>
          <div class="color2 size16">秒</div>
        </template>
      </div>

      <!--//搜索框-->
      <div class="bg-white ptb20">
        <div class="flex-wrp flex-middle relative plr20">
          <input v-model="keyword" class="border border-radius50 plr20 size16 color2 ptb15 w100"
                 :style="{'border-color': '#ddd'}"
                 type="text" placeholder="请输入编号或者姓名"/>
          <div class="search-icon" @click="onSearch">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-icon-`"></use>
            </svg>
          </div>
        </div>
      </div>

      <!--//切换标签-->
      <tab :line-width="1" active-color="#ff4622">
        <tab-item
          :selected="tabIndex === index"
          v-for="(item, index) in tabList"
          :class="[index ?'border-l':'']"
          @on-item-click="switchTab(index)"
          :key="index">
          {{item}}
        </tab-item>
      </tab>


      <div v-if="playersLoading">加载中</div>

      <!--// 选手列表-->
      <div class="pd5" v-else>
        <template v-for="(item, index) in playersChunk">
          <div class="flex-wrp">

            <ActivityPlayer @on-click-head="goPlayerIndex" v-for="(player, i2) in item" :player="player" :key="i2"/>

            <div class="pd5 flex-wrp flex-middle flex-cell relative" :style="{flex: 1}" v-if="item.length===1"></div>
          </div>
        </template>
      </div>

      <!--// 活动介绍-->
      <div class="color2 size26 text-center bg-white ptb20">—— {{activity.content_title}} ——</div>

      <div class="color4 size26 bg-white ptb20 plr10">
        <InputRichText v-model="activity.content" :preview="true"/>
      </div>

    </div>
  </div>

</template>

<script>
  import InputText from '@/components/input/InputText'
  import { timeDiffObj } from '@/utils'
  import chunk from 'lodash/chunk'
  import moment from 'moment'

  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import InputRichText from '@/components/input/rich-text/InputRichText'

  import ActivityPlayer from '@/components/activity/ActivityPlayer'

  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputText,
      InputSwiper,
      InputRichText,
      ActivityPlayer,
    },
    data () {
      return {
        keyword: '',
        preview: true,
        now: moment(),
        timer: null,
        timeValue: '',
        tabList: [
          '最热选手',
          '排行选手',
          '最新选手',
        ],
        buying: {
          time_start: 1519099695649,
          time_end: 1516199695649
        },
        playersLoading: false,
        players: [],
        tabIndex: 0,
      }
    },
    computed: {
      ...mapState({
        'activity': (state) => state.activity.info
      }),
      playersChunk () {
        return chunk(this.players, 2)
      },
    },
    methods: {
      switchTab (index) {
        this.keyword = ''
        this.tabIndex = index
        this.fetchPlayersData()
      },
      timeUpdate () {
        this.timeValue = timeDiffObj(
          moment().isBefore(this.buying.time_start)
            ? this.buying.time_start
            : this.buying.time_end,
          this.now
        )
      },
      goPlayerIndex (player) {
        this.$router.push(`/activity/${this.activity.id}/player/${player.id}`)
      },
      async onSearch () {
        this.fetchPlayersData()
      },
      async fetchPlayersData () {
        this.playersLoading = true
        this.players = []
        let requestData = {
          activity_id: this.$route.params.activity_id,
          sort_type: this.tabIndex,
        }
        if (this.keyword) {
          requestData.keyword = this.keyword
        }
        const {data} = await api.get('activity_players', requestData)
        this.players = data.data
        this.playersLoading = false
      },
    },
    mounted () {
      this.timer = setInterval(this.timeUpdate, 1000)
      // this.fetchData()
      this.fetchPlayersData()
    },

    beforeDestroy () {
      this.timer && clearInterval(this.timer)
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

  .guanbi {
    // position: absolute;
    // top: -10px;
    // right: -10px;
    padding: 10px 20px;
    // z-index: 999;
  }
</style>

