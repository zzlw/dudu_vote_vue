<template>
    <div class="flex-wrp flex-align-center">
        <div class="ptb5 plr20 border border-radius5" @click="change(value-1)">-</div>
        <div class="plr30">{{number}}</div>
        <div class="ptb5 plr20 border border-radius5" @click="change(value+1)">+</div>
    </div>
</template>
<script>
   export default {
       data () {
           return {
               number: this.value
           }
       },
       props: {
           value: {
               type: Number,
               required: true
           },
           max: {
               type: Number,
               required: true
           },
           min: {
               type: Number,
               required: true
           }
       },
       methods: {
           change (value) {
               if (value > this.max) {
                   return weui.topTips(`最大不超过${this.max}`)
               }
               if (value < this.min) {
                   return weui.topTips(`最小不低于${this.min}`)
               }
               this.number = value
               this.$emit('onChange', value)
           }
       }
   }
</script>
