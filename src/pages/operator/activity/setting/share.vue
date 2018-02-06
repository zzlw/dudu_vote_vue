<template>
  <div class="pb60">

    <base-navigation title="分享设置"></base-navigation>

    <group label-width="3rem" label-align="left" gutter=".3rem">
      <x-input title="分享主标题:" placeholder="填写分享主标题" required v-model="share.title"/>
      <x-input title="分享副标题:" placeholder="填写分享副标题" required v-model="share.assistant_title"/>

      <cell class="">
        <label slot="icon" class="weui-label">分享图片:</label>
        <InputImage slot="title" v-model="share.image"/>
      </cell>

    </group>

    <div class="plr20 pt30">
      <div @click="onSubmit" class="size26 color1 plr30 ptb15 border-radius5 text-center bg-29d6bf">保存</div>
    </div>
  </div>
</template>

<script>
  import InputImage from '@/components/input/InputImage'
  import { api } from 'h5sdk'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('operator')

  export default {
    components: {
      InputImage,
    },
    data () {
      return {
        share: {
          title: '',
          assistant_title: '',
          image: '',
        },
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
      ...mapActions({
        'reloadActivity': 'reloadActivity',
      }),
      async onSubmit () {
        let activityId = this.$route.params.activity_id
        this.$store.dispatch('loading')
        const {data} = await api.post('operator_activity_config', {
          id: activityId,
          share_config: this.share,
        })
        this.$store.dispatch('loaded')

        this.$vux.toast.show({
          text: data.message,
        })
        await this.reloadActivity()
        this.fetchData()
      },
      fetchData () {
        this.share.title = this.activity.share_config.title
        this.share.assistant_title = this.activity.share_config.assistant_title
        this.share.image = this.activity.share_config.image
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
