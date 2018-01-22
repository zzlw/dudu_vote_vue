<template>
  <div>

    <ActivityThemeDefault v-if="activity" :activity="activity" :publish="publish"/>
    <divider>我是有底线的</divider>

  </div>
</template>

<script>
  import ActivityThemeDefault from '@/components/operator/activity/themes/OperatorActivityThemesDefault'
  import api from '@/api'

  export default {
    components: {
      ActivityThemeDefault,
    },
    data () {
      return {
        activity: null,
      }
    },
    created () {
      console.log('asdfasdf')
      this.fetchData()
    },
    methods: {
      async publish (activity) {
        const requestData = {
          'id': activity.id,
          'sliders': activity.swiper,
          'title': activity.title,
          'content_title': activity.contentTitle,
          'content': activity.content,
          'start_time': activity.startTime,
          'end_time': activity.endTime,
          'sign_up_manner': activity.signUpManner,
          'vote_type': activity.voteType,
          'next_vote_time': activity.nextVoteTime,
          'limited_exchange_count': activity.limitedExchangeCount,
        }

        const {data} = await api.post('operator_activity_update', requestData)

        alert(data.message)

        if (data.error) {
        } else {
          this.$router.push('/operator')
        }
      },
      async fetchData () {
        const {data} = await api.post('operator_activity', {id: this.$route.params.id})

        if (data.error) {
          alert(data.message)
          return
        }

        this.activity = {}
        this.activity.id = data.data.id
        this.activity.swiper = data.data.sliders
        this.activity.title = data.data.title
        this.activity.contentTitle = data.data.content_title
        this.activity.content = data.data.content
        this.activity.startTime = data.data.start_time
        this.activity.endTime = data.data.end_time
        this.activity.signUpManner = data.data.sign_up_manner
        this.activity.voteType = data.data.vote_type
        this.activity.nextVoteTime = data.data.next_vote_time
        this.activity.limitedExchangeCount = data.data.limited_exchange_count
      },
    },
  }
</script>

<style scoped>
  button {
    border: 1px solid;
  }
</style>
