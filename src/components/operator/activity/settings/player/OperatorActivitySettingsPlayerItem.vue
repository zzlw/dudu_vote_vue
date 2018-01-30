<template>
  <div class="pl20 ptb30 flex-wrp flex-between bg-white">
    <div class="" :style="{width: rem(140),height: rem(140)}">
      <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
           :style="{backgroundImage:`url(${player.picture})`}"/>
    </div>
    <div class="pl0 pr20 border-r flex-wrp flex-cell flex-between">
      <div class="title size26 color5 text-nowrap-one">{{player.name}}</div>
      <div class="flex-wrp">
        <div class="size22 color4">{{player.mobile}}</div>
        <div class="size22" :class="colors[player.status]">&nbsp;{{statuses[player.status]}}</div>
      </div>
      <div class="size22 color4">报名时间: {{player.created_at.substr(0, 16)}}</div>
    </div>
    <div class="flex-wrp flex-cell flex-middle plr30">
      <div class="ptb5 plr15 border-radius5 text-center color1 size22 overflow-hidden color13"
           :style="{'border':'1px solid #29d6bf','white-space':'nowrap'}"
           @click.stop="setUpStatus = !setUpStatus">设置
      </div>
      <div class="relative" v-show="setUpStatus">
        <div class="border border-radius5 overflow-hidden size22 bg-white"
             :style="{width: '100px', position: 'absolute', top: '2px', right: '0px'}">

          <template v-if="Number(player.status) === 0">
            <div class="color4 border-b text-center ptb10" @click.stop="emit('ok')">
              审核通过
            </div>
            <div class="color4 border-b text-center ptb10" @click.stop="emit('pass')">
              审核不通过
            </div>
          </template>

          <template v-else>
            <div class="color4 border-b text-center ptb10" @click.stop="emit('uncheck')">
              取消审核
            </div>
          </template>

          <div class="color4 border-b text-center ptb10" @click.stop="emit('edit')">编辑</div>
          <div class="color4 border-b text-center ptb10" @click.stop="emit('delete')">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'component-player-item',
    props: ['player'],
    data () {
      return {
        setUpStatus: false,
        colors: {
          0: 'color3',
          1: 'color4',
          2: 'color3',
        },
        statuses: {
          0: '未审核',
          1: '审核通过',
          2: '审核不通过',
        },
      }
    },
    methods: {
      emit (type) {
        this.$emit('on-' + type, this.player)
      }
    }
  }
</script>

<style scoped>

</style>
