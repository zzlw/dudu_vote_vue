<template>

  <div @click="upload" class="flex-wrp flex-center border-radius10 overflow-hidden mg10" :style="{width:rem(120), height: rem(120),border: '1px solid #8a8a8a'}">
    <img v-if="image" width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${image})`}" />
    <div v-else class="" :style="{width:rem(70), height: rem(70)}">
      <svg class="icon base-menu-icon" aria-hidden="true">
        <use :xlink:href="`#icon-jia1`"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  import {wx, api} from 'h5sdk'
  export default {
    props: ['value'],
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
