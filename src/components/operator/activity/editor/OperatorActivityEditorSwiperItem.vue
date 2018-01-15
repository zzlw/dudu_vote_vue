<template>

    <div class="swiper-item pd10 flex-wrp flex-between flex-cell" :style="divStyle">
        <!-- <div class="" >
            轮播图Item
        </div> -->
        <div class="flex-wrp flex-between" :style="{height: rem(156)}">
            <activity-button :upload="upload" v-if="!preview" ></activity-button>
            <activity-delete v-if="!preview && remove" :remove="remove" />
        </div>
        <input v-if="!preview" class="w100 bg-alpha pd10 color1 size16" :style="{border:'none'}" ref="url" type="text" placeholder="跳转链接（以http://开头）" @change="input" :value="value.url">
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
                    'height': this.rem(300)
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

<style lang="scss" scoped>
    // input {
    //     border: 1px solid;
    //     width: 80%;
    // }

    .swiper-item {
        border: 1px red dashed;
    }
</style>


