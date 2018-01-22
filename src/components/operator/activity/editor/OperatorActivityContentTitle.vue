<template>
    <div class="flex-wrp flex-center pd10">
        <div class="size16 color2">——</div>
        <div
            ref="details"
            class="mlr20 color2 plr10 ptb5 size26"
            :class="{'editable':!preview}"
            :contenteditable="!preview"
            @input="input()"
        >
            {{ innerText }}
        </div>
        <div class="size16 color2">——</div>
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
}
</style>
