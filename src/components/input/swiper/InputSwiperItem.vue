<template>

  <div class="swiper-item flex-wrp flex-between flex-cell h100 bg-cover" :class="{editing: !preview}" :style="divStyle">

    <div class="flex-wrp flex-between" :style="{height: rem(156)}">
      <button-upload :upload="upload" v-if="!preview"/>
      <button-custom v-if="!preview && remove" :onclick="remove" thatText="删除" thatIcon="icon-guanbi"/>
    </div>
    <input v-if="!preview" class="w100 bg-alpha pd10 color1 size16 outline nbr border-radius0" ref="url" type="text"
           placeholder="跳转链接（以http://开头）" @change="input" :value="value.url">

  </div>

</template>

<script>
  import { api, wx } from 'h5sdk'

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
          const {localIds} = await wx.chooseImage()
          console.log('wx.chooseImage')
          // 显示
          this.$vux.loading.show({
            text: '上传中'
          })

          const {serverId} = await wx.uploadImage({
            localId: localIds[0],
          })
          console.log('wx.uploadImage')
          const {data} = await api.post('upload', {
            'server_id': serverId,
          })
          this.$emit('input', {
            img: data.data,
            url: this.$refs.url.value,
          })
          this.$vux.loading.hide()
        } catch (e) {
          this.$vux.loading.hide()
          this.$vux.alert.show({
            title: '提示',
            content: '上传失败, 请重试',
            onShow () {
            },
            onHide () {
            }
          })
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


