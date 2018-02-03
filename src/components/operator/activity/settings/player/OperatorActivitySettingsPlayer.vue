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
        this.$store.dispatch('loading')
        const {data} = await api.get('operator_players', {id: this.activityId, status: this.tabIndex})
        this.$store.dispatch('loaded')
        this.players = data.data
      },
      async playerDelete (player) {
        let that = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          title: '审核',
          content: '确定删除该选手吗？',
          onCancel () {
          },
          async onConfirm () {
            that.$store.dispatch('loading')
            const {data} = await api.get('operator_player_delete', {id: player.id})
            that.$store.dispatch('loaded')

            that.$vux.toast.show({
              text: data.message,
            })
            if (!data.error) {
              that.fetchPlayersData()
            }
          }
        })
      },
      async playerPass (player) {
        let that = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          title: '审核',
          content: '确定审核不通过该选手吗？',
          onCancel () {
          },
          async onConfirm () {
            that.$store.dispatch('loading')
            const {data} = await api.get('operator_player_audit', {id: player.id, status: 2})
            that.$store.dispatch('loaded')

            that.$vux.toast.show({
              text: data.message,
            })
            if (!data.error) {
              that.fetchPlayersData()
            }
          }
        })
      },
      async playerOk (player) {

        let that = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          title: '审核',
          content: '确定审核通过吗？',
          onCancel () {
          },
          async onConfirm () {
            that.$store.dispatch('loading')
            const {data} = await api.get('operator_player_audit', {id: player.id, status: 1})
            that.$store.dispatch('loaded')

            that.$vux.toast.show({
              text: data.message,
            })
            if (!data.error) {
              that.fetchPlayersData()
            }
          }
        })

      },
      async playerUnCheck (player) {
        let that = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          title: '审核',
          content: '确定取消审核该选手吗？',
          onCancel () {
          },
          async onConfirm () {
            that.$store.dispatch('loading')
            const {data} = await api.get('operator_player_audit', {id: player.id, status: 0})
            that.$store.dispatch('loaded')

            that.$vux.toast.show({
              text: data.message,
            })
            if (!data.error) {
              that.fetchPlayersData()
            }
          }
        })
      },
      async playerEdit (player) {
        this.$router.push('player-edit/' + player.id)

        console.log('playerEdit')
      },

    },
  }
</script>
