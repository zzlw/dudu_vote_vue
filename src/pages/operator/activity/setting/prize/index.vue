<template>
  <div class="pb60">
    <base-navigation title="奖品管理"></base-navigation>
    <div class="flex-wrp flex-around bg-white ptb20 mt20">

      <router-link to="prize-add-rank">
        <div class="flex-wrp flex-between flex-align-center size26 plr20 ptb5 border-radius5"
             :style="{height: rem(40),border:'1px solid #29d6bf'}">
          <div class="h100" :style="{width: rem(30)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-jia1-copy`"></use>
            </svg>
          </div>
          <div class="color13 lh100 pl10">添加排名奖</div>
        </div>
      </router-link>

      <router-link to="prize-add">
        <div class="flex-wrp flex-between flex-align-center size26 plr20 ptb5 border-radius5"
             :style="{height: rem(40),border:'1px solid #29d6bf'}">
          <div class="h100" :style="{width: rem(30)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-jia1-copy`"></use>
            </svg>
          </div>
          <div class="color13 lh100 pl10">添加鼓励奖</div>
        </div>
      </router-link>

    </div>
    <div v-for="prize in prizes" class="pd20">

      <div class="border-radius5 bg-white overflow-hidden">
        <div class="bg-ddd relative" :style="{height: rem(300)}">
          <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
               :style="{backgroundImage:`url(${getPrizeImage(prize)})`}"/>
          <div class="numberImg border border-radius50 bg-alpha color1 plr30 size16 ptb5">
            {{prize.type===0?`排名奖`:'鼓励奖'}}
          </div>
          <div class="numberText bg-alpha color1 plr15 size22 ptb5 ">{{prize}}</div>
        </div>
        <div class="flex-wrp flex-align-center flex-between plr30 ptb20">
          <div class="color2 size26"></div>
          <div class="flex-wrp">
            <div class="size26 color13 plr30 ptb5 border-radius5 mr20" :style="{border:'1px solid #29d6bf'}"
                 @click="onClickDelete(prize)"
            >删除
            </div>
            <div class="size26 color13 plr30 ptb5 border-radius5" @click="onClickEdit(prize)"
                 :style="{border:'1px solid #29d6bf'}">修改
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState} = createNamespacedHelpers('operator')

  export default {
    data () {
      return {
        srcImg: '',
        prizes: [],
      }
    },
    computed: {
      ...mapState({
        'activity': state => state.activity.info,
      }),
    },
    async created () {
      this.fetchData()
    },

    methods: {
      async fetchData () {
        this.$store.dispatch('loading')
        const {data} = await api.get('operator_prizes', {
          activity_id: this.activity.id,
        })
        this.$store.dispatch('loaded')

        this.prizes = data.data
      },
      getPrizeImage (prize) {
        let item = prize.details.find((it, a) => {
          return it.image !== undefined
        })

        if (item) {
          return item.image
        } else {
          return ''
        }
      },
      async onClickDelete (prize) {
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_prize_delete', {
          prize_id: prize.id,
        })
        this.$store.dispatch('loaded')

        this.$vux.toast.text(data.message, 'middle')
        if (!data.error) {
          this.fetchData()
        }
      },
      onClickEdit (prize) {
        if (prize.type === 1) {
          this.$router.push('prize-edit/' + prize.id)
        } else {
          this.$router.push('prize-edit-rank/' + prize.id)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .numberImg {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .numberText{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
