<template>
  <div v-if="activity" class="">

    <InputSwiper v-model="activity.sliders" :preview="true" :show-dots="true"/>

    <div class="flex-wrp flex-between flex-end plr40 bg-white ptb30">

      <div v-if="top3[1]" class="flex-wrp flex-cell flex-align-center">
        <div class="border-radius overflow-hidden"
             :style="{width: rem(120), height: rem(120), border: '4px solid #a2b7c6'}">
          <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
               :style="{backgroundImage:`url(${top3[1].picture})`}"/>
        </div>
        <div class="size26 color2 pt25 pb10">{{top3[1].name}}</div>
        <div class="size26 color1 plr20"
             :style="{backgroundColor:'#a2b7c6','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.2
        </div>
        <div class="color4 pt10">{{top3[1].gain_votes}}票</div>
      </div>


      <div v-if="top3[0]" class="flex-wrp flex-cell flex-align-center">
        <div class="rankingNo1 flex-wrp flex-cell flex-align-center overflow-hidden"
             :style="{width: rem(204), height: rem(171)}">
          <div class="border-radius mt10 overflow-hidden"
               :style="{width: rem(140), height: rem(140), border: '4px solid #dcb691'}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                 :style="{backgroundImage:`url(${top3[0].picture})`}"/>
          </div>
        </div>
        <div class="size26 color2 pt25 pb10">{{top3[0].name}}</div>
        <div class="size26 color1 plr20"
             :style="{backgroundColor:'#dcb691','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.1
        </div>
        <div class="color4 pt10">{{top3[0].gain_votes}}票</div>
      </div>

      <div v-if="top3[2]" class="flex-wrp flex-cell flex-align-center">
        <div class="border-radius overflow-hidden"
             :style="{width: rem(120), height: rem(120), border: '4px solid #cdc0b2'}">
          <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
               :style="{backgroundImage:`url(${top3[2].picture})`}"/>
        </div>
        <div class="size26 color2 pt25 pb10">{{top3[2].name}}</div>
        <div class="size26 color1 plr20"
             :style="{backgroundColor:'#cdc0b2','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.3
        </div>
        <div class="color4 pt10">{{top3[2].gain_votes}}票</div>
      </div>

    </div>
    <div>
      <div class="flex-wrp flex-between flex-align-center plr50 ptb15 bg-white border-b" :class="[{'border-t':!index}]"
           v-for="(item, index) in players" :key="index">
        <div class="flex-wrp flex-between flex-align-center">
          <div class="color5 size26">NO.{{item.rank}}</div>
          <div class="mlr30 flex-wrp flex-center border-radius overflow-hidden"
               :style="{width: rem(80), height: rem(80)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                 :style="{backgroundImage:`url(${item.picture})`}"/>
          </div>
          <div class="color5 size26">{{item.name}}</div>
        </div>
        <div class="color5 size26">{{item.gain_votes}}票</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import InputSwiper from '@/components/input/swiper/InputSwiper'
  import { createNamespacedHelpers } from 'vuex'
  import activity from '@/store/modules/activity'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    components: {
      InputSwiper,
    },
    data () {
      return {
        top3: [],
        players: [],
      }
    },
    computed: {
      ...mapState({
        activity: (state) => state.activity.info
      }),
    },
    methods: {
      async fetchPlayersData () {
        this.players = []
        const {data} = await api.get('activity_players', {
          activity_id: this.$route.params.activity_id,
          sort_type: 1,
        })

        this.top3 = data.data.slice(0, 3)
        this.players = data.data.slice(3)
      },
    },
    mounted () {
      this.pv(this.activity.operator_id, this.activity.id, 0)
      this.fetchPlayersData()
    },
  }
</script>

<style lang="scss" scoped>
  .rankingNo1 {
    background: url(~assets/img/web/ranking_no1.png) no-repeat center / cover;
  }
</style>

