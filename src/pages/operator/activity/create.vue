<template>
    <div>

        <ActivityThemeDefault :preview="preview" :activity="activity" :publish="publish"/>

    </div>
</template>

<script>
    import ActivityEditorText from '@/components/operator/activity/editor/OperatorActivityEditorText'
    import ActivityEditorSwiper from '@/components/operator/activity/editor/OperatorActivityEditorSwiper'
    import ActivityEditorContent from '@/components/operator/activity/editor/OperatorActivityEditorContent'
    import ActivityThemeDefault from '@/components/operator/activity/themes/OperatorActivityThemesDefault'
    import api from '@/api'

    export default {
        components: {
            ActivityEditorText,
            ActivityEditorSwiper,
            ActivityEditorContent,
            ActivityThemeDefault
        },
        data () {
            return {
                activity: {
                    swiper: [],
                    title: 'title',
                    contentTitle: 'contentTitle',
                    content: [],
                    startTime: '',
                    endTime: '',
                    signUpManner: '',
                    voteType: '',
                    nextVoteTime: 0,
                    limitedExchangeCount: 0
                },
                preview: false
            }
        },
        methods: {
            publish (activity) {
                const requestData = {
                    'sliders': activity.swiper,
                    'title': activity.title,
                    'content_title': activity.contentTitle,
                    'content': activity.content,
                    'start_time': activity.startTime,
                    'end_time': activity.endTime,
                    'sign_up_manner': activity.signUpManner,
                    'vote_type': activity.voteType,
                    'next_vote_time': activity.nextVoteTime,
                    'limited_exchange_count': activity.limitedExchangeCount
                }
                console.log('requestData', requestData)

                const {data} = api.post('operator_activity_create', requestData)

                console.log(data)
            }
        }
    }
</script>

<style scoped>
    button {
        border: 1px solid;
    }
</style>
