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
        奖品兑换
      </div>
      <div class="" :style="{flex:1}"></div>
    </div>


    <tab
      @on-index-change="switchTab"
      :line-width="2" active-color="#29d6be" custom-bar-width="1.2rem" bar-active-color="#2bd8bc">
      <tab-item :selected="index === 0" v-for="(item, index) in tabs"
                :badge-label="item.number?String(item.number):undefined"
                :class="{'border-r': index!==(tabs.length-1)}"
                :key="index">{{item.title}}
      </tab-item>
    </tab>

    <div class="flex-wrp flex-cell plr20 ptb20 border-b bg-white" v-for="(item, index) in prizes" :key="index">
      <div class="color2 size22 text-nowrap-one pb10">{{item.name}}</div>
      <div class="flex-wrp flex-center flex-between">
        <div class="color4 size22">有效期：{{item.valid_time_end}}</div>

        <div @click="exchange(item)" v-if="item.status === 1"
             class="size22 border-radius5 ptb5 text-center bg-29d6bf color1"
             :style="{width: rem(100)}">
          兑换
        </div>
        <div v-if="item.status === 2" class="size22 border-radius5 ptb5 text-center bg-c0c1c2 color1"
             :style="{width: rem(100)}">
          已兑换
        </div>
        <div v-if="item.status === 3" class="size22 border-radius5 ptb5 text-center border color4"
             :style="{width: rem(100)}">
          已过期
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('activity')

  export default {
    data () {
      return {
        tabs: [
          {
            title: '全部',
            number: 0,
          },
          {
            title: '未兑换',
            number: 0,
          },
          {
            title: '已兑换',
            number: 0,
          },
          {
            title: '已过期',
            number: 0,
          },
        ],
        prizes: [],
        loading: false,
        tabIndex: 0,
      }
    },
    computed: {
      ...mapState({
        'info': state => state.personal.info,
        'personal': state => state.personal,
        'activity': state => state.activity.info,
      }),
    },
    async created () {
      this.fetchData()
    },
    mounted () {
      this.pv(this.activity.operator_id, this.activity.id, 0)
    },
    methods: {
      switchTab (index) {
        if (index === this.tabIndex) {
          return
        }
        this.tabIndex = index
        this.fetchData()
      },
      async fetchData () {
        this.loading = true
        this.prizes = []
        const {data} = await api.get('activity_personal_prizes', {
          activity_id: this.activity.id,
          status: this.tabIndex,
        })
        this.prizes = data.data
        this.loading = false
      },
      async exchange (prize) {
        this.loading = true
        const {data} = await api.get('activity_personal_prize_exchange', {
          activity_id: this.activity.id,
          prize_id: prize.id,
        })
        this.loading = false

        this.$vux.toast.show({
          text: data.message,
        })

        if (!data.error) {
          this.fetchData()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>
