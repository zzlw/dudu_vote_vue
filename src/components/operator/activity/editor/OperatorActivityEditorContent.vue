<template>

    <div class="swiper">
        <div v-for="(item, index) in items">

            <OperatorActivityEditorContentText
                v-if="item.text"
                v-model="items[index]"
                :preview="preview"
                :remove="()=>remove(index)"
                :moveup="()=>moveUp(index)"
                :movedown="()=>moveDown(index)"
            />

            <OperatorActivityEditorContentImage
                v-if="item.image"
                v-model="items[index]"
                :preview="preview"
                :remove="()=>remove(index)"
                :moveup="()=>moveUp(index)"
                :movedown="()=>moveDown(index)"
            />

        </div>

        <button v-if="!preview" @click="addText">添加文本</button>
        <button v-if="!preview" @click="addImage">添加图片</button>

    </div>

</template>

<script>
    import Vue from 'vue'
    import OperatorActivityEditorContentImage from './OperatorActivityEditorContentImage'
    import OperatorActivityEditorContentText from './OperatorActivityEditorContentText'

    export default {
        components: {
            OperatorActivityEditorContentText,
            OperatorActivityEditorContentImage
        },
        props: [
            'value',
            'preview'
        ],
        data () {
            return {
                items: this.value
            }
        },
        methods: {
            addText () {
                this.items.push({
                    text: '本活动主要为大家提供娱乐有趣的活动，增加生活情调，享受生活美好，不会存在任何欺骗、诈骗，本平台也不会以任何中奖名义要求转账或者其他欺骗行为。'
                })
            },
            addImage () {
                this.items.push({
                    image: 'http://staticvote.xshwp.com/templates/voteT3/demo/shop.jpg'
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
            }

        }
    }
</script>

<style scoped>
    .swiper {
        border: 3px gray dashed;
        padding: 10px;
        margin: 10px;
    }
</style>
