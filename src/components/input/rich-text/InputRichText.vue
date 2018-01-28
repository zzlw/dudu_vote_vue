<template>

  <div>
    <div v-if="!preview" v-for="(item, index) in items" :key="index">

      <div class="plr10 ptb5" v-if="item.text" :style="{height: rem(300)}">
        <OperatorActivityEditorContentText

          v-model="items[index]"
          :preview="preview"
          :remove="()=>remove(index)"
          :moveup="()=>moveUp(index)"
          :movedown="()=>moveDown(index)"
        />
      </div>


      <div class="plr10 ptb5" v-if="item.image" :style="{height: rem(300)}">
        <OperatorActivityEditorContentImage
          v-model="items[index]"
          :preview="preview"
          :remove="()=>remove(index)"
          :moveup="()=>moveUp(index)"
          :movedown="()=>moveDown(index)"
        />
      </div>

    </div>

    <template v-if="preview" v-for="(item, index) in items">
      <p v-if="item.text" >
        {{item.text}}
      </p>
      <p v-if="item.image">
        <img :src="item.image" alt="">
      </p>
    </template>


    <div v-if="!preview" class="plr10 pt5 pb30">
      <div class="ptb5">
        <div class="flex-wrp flex-center size22 border border-radius5 ptb15 bg-white" @click="addImage">
          <div class="flex-wrp flex-center" :style="{height: rem(30),width: rem(40)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-jia1`"></use>
            </svg>
          </div>
          <div class="color4 lh100">添加图片</div>
        </div>
      </div>
      <div class="ptb5">
        <div class="flex-wrp flex-center size22 border border-radius5 ptb15 color4 bg-white" v-if="!preview"
             @click="addText">
          <div class="flex-wrp flex-center" :style="{height: rem(30),width: rem(40)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
              <use :xlink:href="`#icon-jia1`"></use>
            </svg>
          </div>
          <div class="color4 lh100">添加文本</div>
        </div>
      </div>
    </div>
    <slot/>
  </div>

</template>

<script>
  import Vue from 'vue'
  import OperatorActivityEditorContentImage from './InputRichTextImage'
  import OperatorActivityEditorContentText from './InputRichTextText'

  export default {
    components: {
      OperatorActivityEditorContentText,
      OperatorActivityEditorContentImage,
    },
    props: [
      'value',
      'preview',
    ],
    data () {
      return {
        items: this.value,
      }
    },
    computed: {
      textStyle () {
        if (this.preview) {
          return {}
        }
        return {
          'minHeight': this.rem('300')
        }
      },
      imageStyle () {
        if (this.preview) {
          return {}
        }
        return {
          'minHeight': this.rem('300')
        }
      },
    },
    watch: {
      value () {
        this.items = this.value
      }
    },
    methods: {
      addText () {
        this.items.push({
          text: '本活动主要为大家提供娱乐有趣的活动，增加生活情调，享受生活美好，不会存在任何欺骗、诈骗，本平台也不会以任何中奖名义要求转账或者其他欺骗行为。',
        })
      },
      addImage () {
        this.items.push({
          image: 'http://staticvote.xshwp.com/templates/voteT3/demo/shop.jpg',
        })
      },

      // 删除
      remove (index) {
        this.items = this.items.filter((v, i) => i !== index)
        this.$emit('input', this.items)
      },

      // 上移
      moveUp (index) {
        if (index <= 0) {
          return false
        }

        let prevItem = this.items[index - 1]
        Vue.set(this.items, index - 1, this.items[index])
        Vue.set(this.items, index, prevItem)
      },

      // 下移
      moveDown (index) {
        if (index >= this.items.length - 1) {
          return false
        }

        let nextItem = this.items[index + 1]
        Vue.set(this.items, index + 1, this.items[index])
        Vue.set(this.items, index, nextItem)
      },

    },
  }
</script>

<style lang="sass" scoped>

</style>
