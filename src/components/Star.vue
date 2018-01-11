<template>
    <div>
        <i v-for="n in max" class="i mr5 i-star" :class="{'color34':n <= value,'color4':n > value}" @click="onChange(n)"/>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 5
            }
        },
        methods: {
            onChange (value) {
                this.$emit('onChange', value)
            }
        }
    }
</script>
