<template>
  <div class="pd5 flex-wrp flex-middle flex-cell relative" :style="{flex: 1}">
    <div @click="goPlayerIndex" class="bg-ddd" :style="{ height: rem(350)}">
      <img width="100%" height="100%"
           src="~/assets/img/s.gif"
           class="block bg-cover"
           :style="{backgroundImage:`url(${player.picture})`}"/>

      <div class="numberImg border border-radius50 bg-alpha color1 plr30 size16 ptb5">{{`${player.id}号`}}</div>

      <div v-if="player.rank === 1" class="numberIcon no1"></div>
      <div v-else-if="player.rank === 2" class="numberIcon no2"></div>
      <div v-else-if="player.rank === 3" class="numberIcon no3"></div>
      <div class="numberText ptb10 plr10 color1 size16"  v-else>第{{player.rank}}名</div>

    </div>

    <div class="bg-white flex-wrp flex-middle flex-cell" :style="{ height: rem(80)}">
      <div class="flex-wrp flex-between pd10 flex-align-center">
        <div class="color5 size22">{{player.name}}</div>
        <div class="size16 color3">{{`${player.gain_votes}票`}}</div>
        <div class="size16 color3">{{`${player.gift_count}礼物`}}</div>
      </div>
      <div @click="clickVote" class="voteTiele border border-radius bg-white color3 ptb25 plr20 size26"
           :style="{'border-color': '#ff4622!important'}">投票
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
</template>

<script>
  import { api } from 'h5sdk'

  export default {
    props: [
      'player',
    ],
    name: 'activity-player',
    data () {
      return {
        showDialog: false,
      }
    },
    methods: {
      goPlayerIndex () {
        this.$emit('on-click-head', this.player)
      },
      async clickVote () {
        const {data} = await api.get('activity_voting', {
          player_id: this.player.id,
        })

        if (data.error) {
          alert(data.message)
        } else {
          this.player.gain_votes += 1
          this.showDialog = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .numberImg {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .numberText {
    position: absolute;
    top: 20px;
    left: 20px;
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
      background: url(../../assets/img/web/no1.png) no-repeat center / cover;
    }
    &.no2 {
      background: url(../../assets/img/web/logo_no2.png) no-repeat center / cover;
    }
    &.no3 {
      background: url(../../assets/img/web/logo_no3.png) no-repeat center / cover;
    }
  }
</style>
