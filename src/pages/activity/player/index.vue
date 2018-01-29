<!--
  运营商端
-->
<template>
    <router-view v-if="player.info"></router-view>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapActions} = createNamespacedHelpers('activity')

  export default {
    data () {
      return {
        follow: true,
      }
    },
    computed: {
      ...mapState([
        'player',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchPlayer',
      ]),
    },
    mounted () {
      let playerId = this.$route.params.player_id
      if (
        this.player.info === null ||
        this.player.info.id !== playerId
      ) {
        this.fetchPlayer(playerId)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .that_tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

