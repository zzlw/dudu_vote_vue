<template>
    <div class="plr20">
        <div class="flex-wrp flex-middle ptb40" >
            <img src="~assets/img/web/login-head.jpg" :style="{width: '110px',height:'110px'}" class="border-radius5 overflow-hidden"/>
        </div>
        <group>
            <x-input placeholder="请输入手机号" required v-model="phone" :is-type="()=>validateTel(this.phone)"></x-input>
            <x-input placeholder="请输入登录密码" :type="showPassword?'text':'password'" required v-model="password" :is-type="()=>validatePass(this.password)">
                <x-button action-type="button" type="primary" mini :text="showPassword?'隐藏密码':'显示密码'" slot='right' @click.native="showPassword=!showPassword" />
            </x-input>
        </group>
        <x-button action-type="button" type="primary" size="large" class="mt60" text="确认登录" @click.native="onSubmit"  />
        <div class="flex-wrp flex-middle pt60" >
            <base-avatar icon="icon-weixin" class="bg-white" size="large"></base-avatar>
        </div>
        <div class="flex-wrp flex-middle pt10 size32 color2" >微信登录</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            status: false,
            phone: '',
            password: '',
            showPassword: false
        }
    },

    mounted () {},

    components: {
    },

    methods: {
        onSubmit () {
            let text = this.isEmpty([this.validateTel(this.phone), this.validatePass(this.password)])
            if (text) {
                this.$vux.toast.show({
                    width: '8rem',
                    type: 'warn',
                    text
                })
                return
            }

            this.$vux.toast.show({
                type: 'success',
                text: 'Loading'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

