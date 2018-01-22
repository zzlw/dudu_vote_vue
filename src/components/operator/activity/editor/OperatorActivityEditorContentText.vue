<template>

    <div class="content-text swiper-item flex-wrp flex-between flex-cell relative h100" >
            <OperatorActivityEditorText class="h100" v-model="text" :preview="preview">
                <!-- <template >
                    <button v-if="!preview" @click="remove">删除</button>
                    <button v-if="!preview" @click="moveup">上移</button>
                    <button v-if="!preview" @click="movedown">下移</button>
                </template> -->
                <div class="flex-wrp flex-between CustomButton" slot="button" >
                    <div/>
                    <div>
                        <CustomButton class="" v-if="!preview" :onclick="remove" thatText="删除" thatIcon="icon-guanbi" />
                        <CustomButton class="mtb10" v-if="!preview" :onclick="moveup" thatText="上移" thatIcon="icon-shangsheng" />
                        <CustomButton class="mtb10" v-if="!preview" :onclick="movedown" thatText="下移" thatIcon="icon-xiajiang" />
                    </div>
                </div>
            </OperatorActivityEditorText>

            <!-- <input v-if="!preview" class="w100 bg-alpha pd10 color1 size16" :style="{border:'none'}" ref="url" type="text" placeholder="跳转链接（以http://开头）" @change="input" :value="value.url"> -->

    </div>

</template>

<script>
    import OperatorActivityEditorText from '@/components/operator/activity/editor/OperatorActivityEditorText'

    export default {
        props: [
            'remove',
            'moveup',
            'movedown',
            'preview',
            'value',
        ],
        components: {
            OperatorActivityEditorText,
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
.CustomButton{
    position: absolute;
    right: 0px;
    top: 0px;
}
</style>
