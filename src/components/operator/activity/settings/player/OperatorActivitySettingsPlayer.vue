<template>
  <div>

    <OperatorActivitySettingsPlayerJoinCheck :activity-id="activityId" />

    <tab :line-width="2" active-color="#666" class="mt20" bar-active-color="#2bd8bc">
      <tab-item
        v-for="(tab, index) in tabs"
        :selected="tabIndex === index"
        :badge-label="String(tab.number || '')"
        @on-item-click="switchTab(index)"
        :key="index">
        {{tab.title}}
      </tab-item>
    </tab>

    <OperatorActivitySettingsPlayerItem
      :player="player"
      :key="index"
      v-for="(player, index) in players"
      @on-edit="playerEdit"
      @on-pass="playerPass"
      @on-ok="playerOk"
      @on-uncheck="playerUnCheck"
      @on-delete="playerDelete"
    />

  </div>
</template>

<script>
  import { api } from 'h5sdk'

  import OperatorActivitySettingsPlayerItem from './OperatorActivitySettingsPlayerItem'
  import OperatorActivitySettingsPlayerJoinCheck from './OperatorActivitySettingsPlayerJoinCheck'

  export default {
    props: [
      'activityId',
    ],
    components: {
      OperatorActivitySettingsPlayerItem,
      OperatorActivitySettingsPlayerJoinCheck,
    },
    data () {
      return {
        tabIndex: 0,
        tabs: [
          {
            title: '全部选手',
          },
          {
            title: '未审核',
          },
          {
            title: '已审核',
          },
        ],
        players: [],
      }
    },
    async created () {
      this.fetchPlayersData()
    },
    methods: {
      switchTab (index) {
        this.tabIndex = index
        this.fetchPlayersData()
      },
      async fetchPlayersData () {
        this.players = []
        const {data} = await api.get('operator_players', {id: this.activityId, status: this.tabIndex})
        this.players = data.data
      },
      async playerDelete (player) {
        if (!confirm('确定删除该选手吗')) {
          return
        }
        const {data} = await api.get('operator_player_delete', {id: player.id})

        this.$vux.toast.show({
          text: data.message,
        })
        if (!data.error) {
          this.fetchPlayersData()
        }
      },
      async playerPass (player) {
        if (!confirm('确定不通过该选手吗')) {
          return
        }
        const {data} = await api.get('operator_player_audit', {id: player.id, status: 2})

        this.$vux.toast.show({
          text: data.message,
        })
        if (!data.error) {
          this.fetchPlayersData()
        }
      },
      async playerOk (player) {
        if (!confirm('确定审核该选手吗')) {
          return
        }
        const {data} = await api.get('operator_player_audit', {id: player.id, status: 1})

        this.$vux.toast.show({
          text: data.message,
        })
        if (!data.error) {
          this.fetchPlayersData()
        }
      },
      async playerUnCheck (player) {
        if (!confirm('确定取消审核该选手吗')) {
          return
        }
        const {data} = await api.get('operator_player_audit', {id: player.id, status: 0})

        this.$vux.toast.show({
          text: data.message,
        })
        if (!data.error) {
          this.fetchPlayersData()
        }
      },
      async playerEdit (player) {
        this.$router.push('player-edit/' + player.id)

        console.log('playerEdit')
      },

    },
  }
</script>
