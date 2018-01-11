<template>
    <no-ssr>
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
            <loading slot="spinner"/>
            <div slot="no-more" class="weui-loadmore weui-loadmore_line">
                <span class="weui-loadmore__tips">没有更多了~</span>
            </div>
            <div slot="no-results" class="weui-loadmore weui-loadmore_line">
                <span class="weui-loadmore__tips">暂无数据~</span>
            </div>
        </infinite-loading>
    </no-ssr>
</template>
<script>
    import InfiniteLoading from 'vue-infinite-loading'

    export default {
        props: ['handler', 'fetching', 'container', 'more'],
        components: {
            InfiniteLoading
        },
        methods: {
            async onInfinite ($state) {
                const {isMore, length} = await this.handler()
                if (length > 0) {
                    $state.loaded()
                }
                if (!isMore) {
                    $state.complete()
                }
            }
        }
    }
</script>
