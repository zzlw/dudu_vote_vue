<template>
    <img :src="src" class="bg-cover border-radius" :style="{backgroundImage:'url(https://public.duduapp.net/dolife/static/images/avatar_default.png)'}"/>
</template>
<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>
