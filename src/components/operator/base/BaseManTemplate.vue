<template>
    <div class="pd20">
        <div class="border-radius5 bg-white overflow-hidden">
            <div class="bg-ddd" :style="{height: rem(300)}">
                <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                     :style="{backgroundImage:`url(${src})`}"/>
            </div>
            <div class="flex-wrp flex-align-center flex-between plr30 ptb20">
                <div class="color2 size26">男神模板</div>
                <div class="size16 color4">{{`已使用${parseInt(number)}次`}}</div>
                <div @click="goCreate" class="size26 color1 bg-29d6bf plr30 ptb5 border-radius5">制作投票</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        number: {
          type: [String, Number],
          required: true
        },
        src: {
          type: [String],
          required: false
        }
      },
      data () {
        return {
          status: false
        }
      },

      mounted () {},

      components: {},

      methods: {
        goCreate () {
          this.$router.push('/operator/activity-create')
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>

