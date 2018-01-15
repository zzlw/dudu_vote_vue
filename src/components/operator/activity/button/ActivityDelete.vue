<template>

    <div @click="remove" :style="{height: rem(40)}" class="flex-wrp flex-between flex-align-center bg-alpha plr15">
        <div class="h100" :style="{width: rem(16)}">
            <svg class="icon base-menu-icon" aria-hidden="true">
                <use :xlink:href="`#icon-guanbi`"></use>
            </svg>
        </div>
        <div class="color1 lh100 pl10">删除</div>
    </div>
</template>

<script>
    export default {
        props: ['remove'],
        data () {
            return {}
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>

<style lang="scss" scoped>

</style>


