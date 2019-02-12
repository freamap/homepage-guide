import { MutationTree } from 'vuex'
import { ProfileState } from './types'
import { User } from '~/types/User'

export const mutations: MutationTree<ProfileState> = {
  profileLoaded (state, payload: User) {
    state.error = false
    state.user = payload
  },
  profileError (state) {
    state.error = true
    state.user = undefined
  }
}
