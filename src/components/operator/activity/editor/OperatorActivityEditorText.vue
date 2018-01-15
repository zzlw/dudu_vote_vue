<template>
    <div
        ref="details"
        :class="{'editable':!preview}"
        :contenteditable="!preview"
        @input="input()"
    >
        {{ innerText }}
    </div>
</template>

<script>
    export default {
        props: [
            'value',
            'preview'
        ],
        data () {
            return {
                innerText: this.value
            }
        },
        methods: {
            input () {
                this.$emit('input', this.$refs.details.innerText)
            }
        }
    }
</script>

<style scoped>
    .editable {
        border: thin dashed #ef184d;
        border-radius: .4rem;
        outline: none;
    }
</style>
