import { ActionTree } from 'vuex'
import { ProfileState } from './types'
import { RootState } from '~/store/types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData ({ commit }): any {
    const payload = {
      firstName: 'firstNameのデータ',
      lastName: 'lastNameのデータ',
      email: 'sample@example.com',
      phone: '＋819000000000'
    }
    commit('profileLoaded', payload)
  }
}
