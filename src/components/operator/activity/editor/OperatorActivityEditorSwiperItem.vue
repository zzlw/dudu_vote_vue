<template>

    <div class="swiper-item" :style="divStyle">
        <div>
            轮播图Item
        </div>


        <button v-if="!preview" @click="upload()">
            上传图片
        </button>


        <div v-if="!preview">

            <label>
                链接
                <input ref="url" type="text" @change="input" :value="value.url">
            </label>
        </div>

        <button v-if="!preview && remove" @click="remove">删除</button>
    </div>

</template>

<script>
    export default {
        props: [
            'value',
            'preview',
            'remove'
        ],
        data () {
            return {}
        },
        computed: {
            divStyle () {
                return {
                    'backgroundImage': 'url(' +
                    (this.value.img || 'http://pic.xshapp.com/201710/056917bb_533_400.jpg') + ')',
                    'height': '100px'
                }
            }
        },
        methods: {
            upload () {
                this.$emit('input', {
                    img: 'https://www.baidu.com/img/bd_logo1.png',
                    url: this.$refs.url.value
                })
            },
            input () {
                this.$emit('input', {
                    url: this.$refs.url.value,
                    img: this.$refs.img.value
                })
            }
        }
    }
</script>

<style scoped>
    input {
        border: 1px solid;
        width: 80%;
    }

    .swiper-item {
        border: 1px red dashed;
        margin: 5px;
        padding: 5px;
    }
</style>
