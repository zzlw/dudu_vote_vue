<template>
  <div class="">
    <base-navigation :title="`正在给${player.name}赠送礼物`"></base-navigation>

    <div class="bg-white" :style="{height: rem(300)}">
      <div class="flex-wrp flex-cell flex-align-center pt30">
        <base-avatar :src="player.picture" class="bg-white"/>
        <div class="color2 size26 pt20">{{player.name}}</div>
      </div>
      <div class="flex-wrp flex-around plr60 pt15">
        <div class="color4 size22">编号: {{player.id}}</div>
        <div class="color4 size22">得票数: <span class="color15">{{player.gain_votes}}</span></div>
        <div class="color4 size22">礼物数: <span class="color15">{{player.gift_count}}</span></div>
      </div>
    </div>

    <div class="ptb10">
      <div class="flex-wrp plr10" v-for="(item, index) in cateGroup" :key="index">
        <div class="pd15 border-radius5 bg-white mg10" v-for="(t, i) in item" :key="i" :style="{flex: 1}">
          <div class="size20 color15 lh100">{{t.votes}}票</div>

          <div class="flex-wrp flex-center ptb10">
                <img v-if="t.image" src="~/assets/img/s.gif" class="bg-cover" :style="{width: rem(60), height: rem(60), backgroundImage:`url(${t.image})`}" />
          </div>

          <div class="size22 flex-wrp flex-center pb10">
            <span class="color4">{{t.name}}&nbsp;&nbsp;</span>
            <span class="color15">{{t.price}}金币</span>
          </div>

          <div @click="onClickVoting(t)" class="size22 border-radius5 flex-wrp flex-center bg-ff404b color1 ptb5">点击购买
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import chunk from 'lodash/chunk'
  import { createNamespacedHelpers } from 'vuex'
  import { api } from 'h5sdk'

  const {mapState, mapActions} = createNamespacedHelpers('activity')

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState({
        'activity': (state) => state.activity.info,
        'player': (state) => state.player.info,
        'gifts': (state) => state.gifts.info,
      }),
      cateGroup () {
        return chunk(this.gifts, 3)
      },
    },
    methods: {
      ...mapActions([
        'fetchGifts',
      ]),
      async onClickVoting (gift) {
        let requestData = {
          'player_id': this.player.id,
          'gift_id': gift.id,
        }
        this.$store.dispatch('loading')
        const {data} = await api.post('activity_gift_voting', requestData)
        this.$store.dispatch('loaded')

        if (data.error) {
          this.$vux.alert.show({
            title: '提示',
            content: data.message,
            onShow () {
            },
            onHide () {
            },
          })
        } else {
          location.href = data.data.payment_url
        }
      },
    },
    mounted () {
      this.fetchGifts()
      this.pv(this.activity.operator_id, this.activity.id, this.player.id)
    },
    components: {},
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


