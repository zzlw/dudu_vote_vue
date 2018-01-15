<template>
    <div class="flex-wrp flex-between overflow-hidden bg-alpha" :style="{'border-radius': '50px','border-top-right-radius':'10px','border-bottom-right-radius':'10px'}">
        <div class="flex-wrp">
            <base-avatar :src="src" size="small"/>
            <div class="color1 pl5 flex-wrp flex-cell flex-middle overflow-hidden" :style="{width: rem(150)}">
                <div class="size22 color1 text-nowrap">{{title}}</div>
                <div class="size16 color1 text-nowrap">{{text}}</div>
            </div>
        </div>
        <div class="ptb10 flex-wrp flex-center">
            <div class="flex-wrp flex-center plr20 border-l">
                <div class="size22 color1 pr15 text-nowrap">{{`推荐码：${(String(number)).toUpperCase()}`}}</div>
                <div class="size16 border border-radius5 ptb5 plr10 bg-grey overflow-hidden lh150 color2 text-nowrap">邀请好友</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        },
        number: {
            type: [String, Number],
            required: true
        }
    },

    data () {
        return {
            status: false
        }
    },

    mounted () {},

    components: {
    },

    methods: {}
}
</script>

<style lang="scss" scoped>

</style>

