import { ProfileState } from './types'
import { User } from '~/types/User'

export default {
  profileLoaded (state: ProfileState, payload: User) {
    state.error = false
    state.user = payload
  },
  profileError (state: ProfileState) {
    state.error = true
    state.user = undefined
  }
}
