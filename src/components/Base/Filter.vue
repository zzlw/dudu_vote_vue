<template>
    <div>
        <div v-if="expend.length > 0" class="weui-mask weui-animate-fade-in"/>
        <div v-if="filters.length > 0" class="bg-white flex-wrp relative ptb20" style="z-index: 1001;">
            <div v-for="n in filters" class="flex-item flex-wrp ptb10 flex-center border-l filter-cate" @click="showFilter(n,0)">
                <div class="size28 color5">{{n.label}}</div>
                <div v-if="expend.length > 0 && expend[0].key === n.key" class="size22 color5 pl10">
                    <i class="i i-arrow-up-o"/>
                </div>
                <div v-else class="size22 color5 pl10">
                    <i class="i i-arrow-down-o"/>
                </div>
            </div>
        </div>
        <div v-if="expend.length > 0" class="filter-wrap weui-animate-fade-in">
            <div class="flex-wrp bg-white size28 w100 filter-box">
                <div v-for="(item, index) in expend" :key="index" class="flex-item" :class="{'bg-grey': index+1 < expend.length}">
                    <div v-for="n in item.items" @click="showFilter(n,index+1)" class="flex-wrp flex-align-center pd30 border-b" :class="{
                        color3:filter[n.key] && filter[n.key] === n.value,
                        'bg-white':(expend.length > index+1 && n.value === expend[index+1].value)
                    }">
                        <span class="flex-item">{{n.label}}</span>
                        <i v-if="n.items" class="i i-arrow-right-o size24 color4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                expend: []
            }
        },
        props: {
            filters: {
                type: Array,
                required: true
            },
            filter: {
                type: Object,
                required: true
            }
        },
        methods: {
            showFilter (item, dep) {
                if (item.items) {
                    if (this.expend.length > dep) {
                        this.expend = this.expend.slice(0, dep + 1)
                        if (!this.expend.every(cate => cate.key === item.key && cate.value === item.value)) {
                            this.expend[dep] = item
                        } else {
                            this.expend.pop()
                        }
                    } else {
                        this.expend.push(item)
                    }
                } else {
                    this.expend = []
                    this.$emit('filter', Object.assign({}, this.filter, {
                        [item.key]: item.value
                    }))
                }
            }
        }
    }
</script>
<style scoped>
    .filter-wrap{
        position: relative;
        z-index: 1002;
    }
    .filter-box{
        position: absolute;
        top:0;
        left:0;
    }
    .filter-cate:first-child{
        border-left:none;
    }
</style>
