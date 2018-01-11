<template>
    <div class="bg-white pl30 pt30">
        <div class="flex-wrp flex-align-center pb30">
            <div>
                <avatar :src="comment.user.avatar" class="img-80"/>
            </div>
            <div class="flex-item pl30 size26">
                <div>{{comment.user.nickname}}</div>
                <div class="flex-wrp flex-align-center pt5">
                    <star :max="5" :value="parseInt(comment.score)"/>
                    <div class="pl20 color4 pt5">{{moment(comment.create_at).format('MM-DD HH:mm')}}</div>
                </div>
            </div>
        </div>
        <div class="size26 border-b">
            <div class="pb30 pr30">{{comment.content}}</div>
            <div class="pb30">
                <base-img v-for="(pic,index) in comment.pics" v-if="pic" :key="index" :src="pic" @click="imagePreview(index)" class="inline-block mr10 mb5 thumb"/>
            </div>
        </div>
        <div v-if="comment.reply" class="ptb10 pr10 size28">
            <span class="color9">商家回复：</span>
            <div>{{comment.reply}}</div>
        </div>
    </div>
</template>
<script>
    import Star from '~/components/Star.vue'
    import wx from '~/utils/wx'
    export default {
        components: {
            Star
        },
        props: {
            comment: {
                type: Object,
                required: true
            }
        },
        methods: {
            imagePreview (index) {
                wx.previewImage(this.comment.pics[index], this.comment.pics)
            }
        }
    }
</script>
<style scoped>
    .thumb{
        width:160px;
    }
</style>
