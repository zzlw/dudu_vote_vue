<!--
  运营商申请
-->

<template>
    <div>

        <h2></h2>

        <form action="">

            平台名称 <input type="text" name="title" v-model="title"> <br>
            地区 <input type="text" name="location" v-model="location"> <br>
            申请人 <input type="text" name="name" v-model="name"> <br>
            联系方式 <input type="text" name="mobile" v-model="mobile"> <br>
            推荐码 <input type="text" name="code" v-model="code"> <br>

            <button type="button" @click="submit()">申请</button>
        </form>

    </div>
</template>

<script>
    import api from '@/api'

    export default {
        data () {
            return {
                title: null,
                location: null,
                name: null,
                mobile: null,
                code: null
            }
        },
        async created () {
            const {data} = await api.get('operator')
            this.operator = data.data

            if (this.operator && this.operator.status === 2) {
                this.$router.push('/operator')
            }
        },
        methods: {
            async submit () {
                const {data} = await api.post('operator_join', {
                    title: this.title,
                    location: this.location,
                    name: this.name,
                    mobile: this.mobile,
                    code: this.code
                })

                alert(data.message)

                if (data.error) {
                    return
                }

                this.$router.push('/operator/join')
            }
        }
    }
</script>

<style scoped>

</style>
