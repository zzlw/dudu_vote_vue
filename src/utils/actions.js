import { analytics, api } from 'h5sdk'

export const activityVoting = async () => {
  const {data} = await api.get('activity_voting', {
    player_id: this.player.id,
  })
  analytics.go()
  return data
}
