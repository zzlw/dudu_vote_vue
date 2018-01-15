<template>
    <div class="content-text">
        <OperatorActivityEditorText v-model="text" :preview="preview"/>

        <button v-if="!preview" @click="remove">删除</button>
        <button v-if="!preview" @click="moveup">上移</button>
        <button v-if="!preview" @click="movedown">下移</button>
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
            'value'
        ],
        components: {
            OperatorActivityEditorText
        },
        name: 'image-text',
        data () {
            return {
                text: this.value.text
            }
        },
        watch: {
            text () {
                this.$emit('input', {
                    text: this.text
                })
            },
            value () {
                this.text = this.value.text
            }
        }
    }
</script>

<style scoped>
    .content-text {
        border: 1px solid;
    }
</style>
