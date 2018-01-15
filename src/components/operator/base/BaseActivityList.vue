<template>
    <div class="pl20 ptb30 flex-wrp flex-between bg-white" @click.stop="$router.push(to)">
        <div class="" :style="{width: rem(360),height: rem(130)}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${src})`}" />
        </div>
        <div class="plr20 border-r flex-wrp flex-cell flex-between" >
            <div class="title size26 color5 text-nowrap-three">{{title}}</div>
            <div class="flex-wrp">
                <div class="flex-wrp pr10 flex-center" v-for="(icon, index) in icons" :key="index">
                    <div :style="{width: rem(30),height: rem(30)}" class="mr5">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#${icon}`"></use>
                        </svg>
                    </div>
                    <div class="size16 color5">{{parseInt(numbers[index])}}</div>
                </div>
            </div>
        </div>
        <div class="flex-wrp flex-cell flex-middle plr30" >
            <!-- <div class="border ptb5 plr10 border-radius5 text-center color1 size22 overflow-hidden color13" :style="{'border-color':'#29d6bf'}"  >设置</div>
            <div class="relative">
                <div v-show="status" class="border border-radius5 overflow-hidden size22 bg-white" :style="{width: '100px', position: 'absolute', top: '2px', right: '0px'}">
                    <div class="color4 border-b text-center ptb10" @click.stop="$router.push(setUp.ewm)">活动二维码</div>
                    <div class="color4 border-b text-center ptb10" @click.stop="$router.push(setUp.edit)">编辑</div>
                    <div class="color4 border-b text-center ptb10" @click.stop="$router.push(setUp._delete)">删除</div>
                    <div class="color4 text-center ptb10" @click.stop="$router.push(setUp.more)">更多设置</div>
                </div>
            </div> -->
            <slot name="setUp" :v-show="setUpStatus" />
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        setUpStatus: {
            require: false
        },
        onSetUp: {
            default: ()=>{},
            require: false
        },
        title: {
            type: String,
            require: true
        },
        src: {
            type: String,
            require: false
        },
        numbers: {
            type: [Array],
            require: true
        },
        to: {
            type: [Object, String],
            default: '/'
        }
    },
    data () {
        return {
            status: false,
            icons: ['icon-yanjing', 'icon-liwu', 'icon-renshutongji']
        }
    },

    mounted () {},

    components: {},

    methods: {
        sdfd () {
            console.log(23432)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

