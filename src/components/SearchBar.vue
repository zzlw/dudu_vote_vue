<template>
    <div class="bg-white flex-wrp flex-align-center">
        <nuxt-link to="/citys" class="ptb30 pl30 size28">
            {{current.title}}
            <i class="i i-arrow-down-o size20"/>
        </nuxt-link>
        <div class="pd20 flex-item relative weui-icon-search color5">
            <input type="search" class="bg-grey color5 border-radius30 size26 pd15 nbr w100 search-input" v-model="message" @keyup.enter="submit" placeholder="请输入搜索条件"/>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            current: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                message: ''
            }
        },
        methods: {
            async submit () {
                if (!this.message) return

                this.$router.push({
                    path: '/search',
                    query: {
                        keyword: this.message
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .weui-icon-search:before{
        position: absolute;
        top:50%;
        left:40px;
        transform: translateY(-50%);
    }
    .search-input{
        text-indent: 1.5rem;
    }
</style>
