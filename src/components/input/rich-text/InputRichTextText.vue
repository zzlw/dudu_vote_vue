<template>

  <div class="content-text swiper-item flex-wrp flex-between flex-cell relative h100">
    <InputText class="h100" v-model="text" :preview="preview"/>
    <div class="flex-wrp flex-between CustomButton" slot="button">
      <div>
        <ButtonCustom class="" v-if="!preview" :onclick="remove" thatText="删除" thatIcon="icon-guanbi"/>
        <ButtonCustom class="mtb10" v-if="!preview" :onclick="moveup" thatText="上移" thatIcon="icon-shangsheng"/>
        <ButtonCustom class="mtb10" v-if="!preview" :onclick="movedown" thatText="下移" thatIcon="icon-xiajiang"/>
      </div>
    </div>
  </div>

</template>

<script>
  import InputText from '@/components/input/InputText'

  export default {
    props: [
      'remove',
      'moveup',
      'movedown',
      'preview',
      'value',
    ],
    components: {
      InputText,
    },
    name: 'image-text',
    data () {
      return {
        text: this.value.text,
      }
    },
    watch: {
      text () {
        this.$emit('input', {
          text: this.text,
        })
      },
      value () {
        this.text = this.value.text
      },
    },
  }
</script>

<style lang="scss" scoped>
  .CustomButton {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
