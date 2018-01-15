<template>
    <div class="content-text" :style="divStyle">

        <button v-if="!preview" @click="upload">上传</button>

        <button v-if="!preview" @click="remove">删除</button>
        <button v-if="!preview" @click="moveup">上移</button>
        <button v-if="!preview" @click="movedown">下移</button>

    </div>
</template>

<script>
    export default {
        props: [
            'remove',
            'moveup',
            'movedown',
            'preview',
            'value'
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
                    'height': '100px'
                }
            }
        },
        methods: {
            upload () {
                this.$emit('input', {
                    image: 'https://www.baidu.com/img/bd_logo1.png'
                })
            }
        }
    }
</script>

<style scoped>
    .content-text {
        border: 1px solid;
    }
</style>
