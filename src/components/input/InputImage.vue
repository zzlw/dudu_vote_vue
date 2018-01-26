<template>

  <div @click="upload" class="flex-wrp flex-center overflow-hidden">
    <img v-if="image" width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
         :style="{backgroundImage:`url(${image})`}"/>
    <div v-if="!image" class="flex-wrp flex-cell flex-center">
      <svg :style="{width:rem(70), height: rem(70)}" class="icon base-menu-icon" aria-hidden="true">
        <use :xlink:href="`#icon-jia1`"></use>
      </svg>
      <div v-if="description" class="size26 color4">{{description}}</div>
    </div>
  </div>

</template>

<script>
  import { api, wx } from 'h5sdk'

  export default {
    props: ['value', 'description'],
    data () {
      return {
        image: this.value,
      }
    },
    watch: {
      value () {
        this.image = this.value
      },
    },
    methods: {
      async upload () {
        try {
          // 显示
          this.$vux.toast.show({
            text: '上传中',
          })
          const {localIds} = await wx.chooseImage()
          const {serverId} = await wx.uploadImage({
            localId: localIds[0],
          })
          const {data} = await api.post('upload', {
            'server_id': serverId,
          })
          this.$emit('input', data.data)
        } catch (e) {
          alert('上传失败, 请重试')
        } finally {
          this.$vux.toast.hide()
        }
      },
    },
  }
</script>

<style scoped>

</style>
