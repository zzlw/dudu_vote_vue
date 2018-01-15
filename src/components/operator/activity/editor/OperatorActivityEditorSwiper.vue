<template>

    <div class="swiper">
        <div v-for="(item, index) in items">
            <OperatorActivityEditorSwiperItem v-model="items[index]" :remove="() => remove(index)" :preview="preview"/>
        </div>

        <OperatorActivityEditorSwiperItem v-model="newItem" :preview="preview"/>

    </div>

</template>

<script>
    import OperatorActivityEditorSwiperItem from '@/components/operator/activity/editor/OperatorActivityEditorSwiperItem'

    export default {
        components: {
            OperatorActivityEditorSwiperItem
        },
        props: [
            'value',
            'preview'
        ],
        data () {
            return {
                items: this.value,
                newItem: {
                    img: '',
                    url: ''
                }
            }
        },
        watch: {
            value () {
                this.items = this.value
            },
            newItem () {
                if (this.newItem.img) {
                    this.items.push({
                        img: this.newItem.img,
                        url: this.newItem.url
                    })
                    this.newItem.img = ''
                    this.newItem.url = ''
                    this.$emit('input', this.items)
                }
            }
        },
        methods: {
            remove (index) {
                this.items = this.items.filter((v, i) => i !== index)
                this.$emit('input', this.items)
            }
        }
    }
</script>

<style scoped>
    .swiper {
        border: 3px gray dashed;
        padding: 10px;
        margin: 10px;
    }
</style>
