<template>
    <div class="pt50 plr50 overflow-hidden">
        <div class="relative card" :class="[user.vip_info ? 'card2' : 'card1']">
            <avatar class="avatar" :src="user.avatar"/>
            <div class="size26 color36 text-nowrap bold nickname">{{user.nickname}}</div>
            <nuxt-link to="/vip_introduce" class="introduce"/>
            <template v-if="user.vip_info">
                <div class="size28 color43 card-no">NO.{{user.vip_info.card_no}}</div>
                <div v-if="moment().isAfter(user.vip_info.end_time)" class="overdue"/>
                <nuxt-link to="/vip_myvip" class="myCard"/>
                <nuxt-link to="/order_vip" class="color43 size24 ptb5 plr30 border-radius30 button">立即续费</nuxt-link>
                <div class="color43 size24 exp_time">{{user.vip_info.end_time}}到期</div>
                <template v-if="user.vip_info.discount">
                    <div class="color36 size24 discount_use">已用优惠金￥{{user.vip_info.discount.use | number_format}}</div>
                    <div v-if="moment().isBefore(user.vip_info.end_time)" class="color36 size24 text-center price">￥{{(parseFloat(user.vip_info.discount.use) + parseFloat(user.vip_info.discount.stock)) | number_format}}优惠金</div>
                    <div class="color36 size24 price3">可用会员优惠金￥{{user.vip_info.discount.stock | number_format}}</div>
                </template>
            </template>
            <nuxt-link v-else to="/order_vip" class="color43 size24 ptb5 plr30 border-radius30 button">立即开通</nuxt-link>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .button{
        position: absolute;
        z-index: 10;
        transform: translate(50%, -50%);
        top: 82%;
        right :21%;
        background:linear-gradient(#fff1ba,#e9d070);
        box-shadow: rgba(0,0,0,.2) 0 0 10px;
    }
    .card{
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% auto;
        height:43vw;
        border-radius: 10px;
    }
    .head {
        position: absolute;
        z-index: 3;
        top: 37%;
        transform: translateY(-50%);
        left: 43px;
    }
    .avatar{
        position: absolute;
        left:43px;
        top:90px;
        border:3px solid #e0c777;
        width:90px;
        height:90px;
    }
    .nickname{
        position: absolute;
        left:150px;
        top:100px;
        width:120px;
        font-size: 28px;
        font-weight: bold;
    }
    .card-no{
        position: absolute;
        left:150px;
        top:130px;
    }
    .exp_time,
    .discount_use{
        position: absolute;
        z-index: 10;
        top: 76%;
        left: 5%;
    }
    .discount_use{
        display: none;
    }
    .price{
        display: none;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 10;
        left:77%;
        top:50%;
        width: 200px;
    }
    .price3{
        display: none;
        position: absolute;
        z-index: 10;
        right:5%;
        top:76%;
    }
    .introduce {
        position: absolute;
        z-index: 10;
        width: 70px;
        height: 70px;
        right: 10px;
        top: 10px;
    }
    .myCard {
        position: absolute;
        z-index: 5;
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
    }

    .overdue {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 44%;
        top: 53%;
        z-index: 3;
        width: 117px;
        height: 96px;
        background: url("https://public.duduapp.net/dolife/static/images/vip_overdue.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .card1{
        background-image: url('https://public.duduapp.net/dolife/static/images/vip_card1.png');
    }
    .card2{
        background-image: url('https://public.duduapp.net/dolife/static/images/vip_card2.png');
    }

    .my-vip{
        .avatar{
            left:80px;
            top:50px;
        }
        .nickname{
            text-align: center;
            left:65px;
            top:140px;
        }
        .exp_time{
            left:6%;
            top:57%;
        }
        .button,
        .card-no{
            display: none;
        }
        .discount_use,
        .price,
        .price3{
            display: block;
        }
    }
</style>
