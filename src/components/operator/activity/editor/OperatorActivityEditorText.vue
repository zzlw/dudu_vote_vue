<template>
    <div class="flex-wrp flex-align-center flex-between bg-white h100">
        <slot name="icon"/>

        <div
            ref="details"
            class="w100 h100 color2 size16"
            :class="[{'editable':!preview}]"
            :contenteditable="!preview"
            @input="input()"
        >
            <div class="color2 size16 h100">{{ innerText }}</div>
            <slot name="button"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'preview'],
    data () {
        return {
            innerText: this.value,
        }
    },
    methods: {
        input () {
            this.$emit('input', this.$refs.details.innerText)
        },
    },
}
</script>

<style scoped>
.editable {
  border: thin dashed #ef184d;
  outline: none;
}
</style>
