<template>
  <div class="content-text swiper-item flex-wrp flex-between flex-cell" :style="divStyle">
    <!-- <div class="" >
        轮播图Item
    </div> -->
    <div class="flex-wrp flex-between">
      <ButtonUpload :upload="upload" v-if="!preview"/>
      <div>
        <ButtonCustom class="" v-if="!preview" :onclick="remove" thatText="删除" thatIcon="icon-guanbi"/>
        <ButtonCustom class="mtb10" v-if="!preview" :onclick="moveup" thatText="上移" thatIcon="icon-shangsheng"/>
        <ButtonCustom class="mtb10" v-if="!preview" :onclick="movedown" thatText="下移" thatIcon="icon-xiajiang"/>
      </div>
    </div>
    <!-- <input v-if="!preview" class="w100 bg-alpha pd10 color1 size16" :style="{border:'none'}" ref="url" type="text" placeholder="跳转链接（以http://开头）" @change="input" :value="value.url"> -->

  </div>
</template>

<script>
  import { api, wx } from 'h5sdk'

  export default {
    props: [
      'remove',
      'moveup',
      'movedown',
      'preview',
      'value',
    ],
    components: {},
    name: 'image-text',
    data () {
      return {}
    },
    computed: {
      divStyle () {
        return {
          'backgroundImage': 'url(' +
          (this.value.image || 'http://pic.xshapp.com/201710/056917bb_533_400.jpg') + ')',
          height: '100%',
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
            image: data.data,
          })
          this.$vux.toast.hide()
        } catch (e) {
          console.log(e)
          this.$vux.toast.hide()
          alert('上传失败, 请重试')
        }
      },
    }
    ,
  }
</script>

<style lang="scss" scoped>
  .content-text {
    border: thin dashed #ef184d;
  }
</style>
