<template>
    <div class="relative flex-wrp flex-between flex-align-center"
         :class="[cls,{'shadow':shadow,'border-b':br && !shadow,'bg-white':bg}]">
        <div class="plr20 ptb15" @click="back">
            <i class="i i-arrow-left-o"/>
        </div>
        <div class="header-title">
            <slot name="title">
                {{title}}
            </slot>
        </div>
        <slot name="right">
            <div class="plr20 ptb15">
                {{right}}
            </div>
        </slot>
    </div>
</template>
<script>
    export default {
        props: {
            right: {
                type: String
            },
            title: {
                type: String
            },
            leftClick: {
                type: Function
            },
            shadow: {
                type: Boolean,
                default: false
            },
            bg: {
                type: Boolean,
                default: true
            },
            br: {
                type: Boolean,
                default: true
            },
            cls: {
                type: String,
                default: ''
            }
        },
        methods: {
            back () {
                if (this.leftClick) {
                    this.leftClick()
                } else if (history.state) {
                    history.back()
                } else {
                    this.$router.push('/')
                }
            }
        }
    }
</script>
<style scoped>
    .shadow{
        box-shadow: rgba(0,0,0,.3) 0 0 20px;
        z-index: 2;
    }
    .header-title{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        display: flex;
    }
</style>
