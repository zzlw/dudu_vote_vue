<template>
  <div style="width: 100%; height: 100%;">
    <div v-if="data" class="pb60">
      <base-navigation title="综合数据"></base-navigation>

      <base-title title="今日数据" class="border-b"/>
      <div class="plr10 ptb5 bg-white">
        <div class="flex-wrp flex-around">
          <div class="size26 color2">
            <div class="size26 color4 text-center mtb10">{{data.total.pv}}</div>
            <div class="size26 color4 text-center border-b pb10 mtb10">总浏览量 ( pv )</div>
            <div class="size26 color4 text-center mtb10">今日：{{data.today.pv}}</div>
            <div class="size26 color4 text-center mtb10">昨日：{{data.yesterday.pv}}</div>
          </div>
          <div class="size26 color2">
            <div class="size26 color4 text-center mtb10">{{data.total.ip}}</div>
            <div class="size26 color4 text-center border-b pb10 mtb10">总访客量 ( ip )</div>
            <div class="size26 color4 text-center mtb10">今日：{{data.yesterday.ip}}</div>
            <div class="size26 color4 text-center mtb10">昨日：{{data.yesterday.ip}}</div>
          </div>
        </div>
      </div>
      <div class="flex-wrp flex-between plr60 ptb10 bg-29d6bf">
        <div class="color1 size34">总营业额</div>
        <div class="color1 size34">{{data.total.fee}}元</div>
      </div>
      <base-title title="今日数据" class="border-b mt20"/>
      <div class="pd20 echarts bg-white">
        <Echarts :cells="data.today.data" />
      </div>
      <div class="backTop border-radius10 pd10" v-back-top >
        <svg class="icon base-menu-icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao102"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import Echarts from '@/components/operator/echarts/index'

  import { api } from 'h5sdk'

  export default {
    data () {
      return {
        loading: false,
        data: null,
      }
    },
    async created () {
      this.fetchData()
    },

    methods: {
      async fetchData () {
        this.$store.dispatch('loading')
        const {data} = await api.get('operator_activity_aggregate_data', {
          'activity_id': this.$route.params.activity_id,
        })
        this.$store.dispatch('loaded')

        this.data = data.data
      },
    },
    components: {
      Echarts,
    },
  }
</script>

<style lang="scss" scoped>
  .echarts {
    height: 700px;
  }
  .backTop{
    position: fixed;
    bottom: 120px;
    right: 10px;
    width: 30px;
    height: 30px;
    opacity: .8;
    border: 1px solid #00d8c0;
  }
</style>
