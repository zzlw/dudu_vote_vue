<template>
  <div class="pb60">
    <div class="head flex-wrp flex-between bg-284860 plr20 ptb20">
      <div class="flex-wrp flex-align-center" :style="{flex:1}">
        <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
          <svg class="icon base-menu-icon" aria-hidden="true">
            <use :xlink:href="`#icon-zuojiantou`"></use>
          </svg>
        </div>
        <div class="size26 color1 pl5" @click="$router.back()">返回</div>
      </div>
      <div class="color1 size26 text-center" :style="{flex:3}">
        选手管理
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>
    <group label-width="2rem" label-margin-right="2em" label-align="left">
      <x-switch
        class="color2"
        title="报名审核"
        inline-desc="点则表示需手动审核"
        :value-map="['0', '1']"
        :preventDefault="true"
        @on-click="onAuditClick"
        v-model="audit_manner"/>
    </group>

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

    <componentPlayerItem
      :player="player"
      :key="index"
      v-for="(player, index) in players"
      @on-edit="playerEdit"
      @on-check="playerCheck"
      @on-uncheck="playerUnCheck"
      @on-delete="playerDelete"
    />

  </div>
</template>

<script>
  import { api } from 'h5sdk'

  import componentPlayerItem from './componentPlayerItem'

  export default {
    components: {
      componentPlayerItem,
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
        audit_manner: '1',
        players: [],
      }
    },
    async created () {
      this.fetchActivityData()
      this.fetchPlayersData()
    },
    methods: {
      switchTab (index) {
        this.tabIndex = index
        this.fetchPlayersData()
      },
      // 修改配置
      async onAuditClick (newVal, oldVal) {
        let activityId = this.$route.params.activity_id

        let requestData = {
          id: activityId,
          audit_manner: newVal ? '1' : '0',
        }

        const {data} = await api.post('operator_audit_switch', requestData)

        if (data.error) {
          this.audit_manner = oldVal ? '1' : '0'
        } else {
          this.audit_manner = newVal ? '1' : '0'
        }

        this.$vux.toast.show({
          text: data.message,
        })
      },
      async fetchActivityData () {
        let activityId = this.$route.params.activity_id
        const {data} = await api.get('operator_activity', {id: activityId})
        this.audit_manner = String(data.data.audit_manner)
      },
      async fetchPlayersData () {
        this.players = []
        let activityId = this.$route.params.activity_id
        const {data} = await api.get('operator_players', {id: activityId, status: this.tabIndex})
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
      async playerCheck (player) {
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
        const {data} = await api.get('operator_player_audit', {id: player.id, status: 2})

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

<style lang="scss" scoped>
</style>
