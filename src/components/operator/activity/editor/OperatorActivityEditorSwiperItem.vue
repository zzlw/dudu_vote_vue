<template>

  <div class="swiper-item flex-wrp flex-between flex-cell h100 " :class="{editing: !preview}" :style="divStyle">

    <div class="flex-wrp flex-between" :style="{height: rem(156)}">
      <activity-button :upload="upload" v-if="!preview"/>
      <custom-button v-if="!preview && remove" :onclick="remove" thatText="删除" thatIcon="icon-guanbi"/>
    </div>
    <input v-if="!preview" class="w100 bg-alpha pd10 color1 size16" :style="{border:'none'}" ref="url" type="text"
           placeholder="跳转链接（以http://开头）" @change="input" :value="value.url">

  </div>

</template>

<script>
  import api from '@/api'
  import wx from '@/sdk/wx'

  export default {
    props: [
      'value',
      'preview',
      'remove',
    ],
    data () {
      return {
        uploading: false,
      }
    },
    computed: {
      divStyle () {
        return {
          'backgroundImage': 'url(' +
          (this.value.img || 'http://pic.xshapp.com/201710/056917bb_533_400.jpg') + ')',
        }
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
          this.$emit('input', {
            img: data.data,
            url: this.$refs.url.value,
          })
          this.$vux.toast.hide()
        } catch (e) {
          this.$vux.toast.hide()
          alert('上传失败, 请重试')
        }
      },
      input () {
        this.$emit('input', {
          url: this.$refs.url.value,
          img: this.value.img,
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .editing {
    border: 1px red dashed;
  }
</style>


