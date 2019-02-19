import { ActionContext } from 'vuex'
import { ProfileState } from './types'
import { RootState } from '~/store/types'

export default {
  fetchData ({ commit }: ActionContext<ProfileState, RootState>): any {
    const payload = {
      firstName: 'firstNameのデータ',
      lastName: 'lastNameのデータ',
      email: 'sample@example.com',
      phone: '＋819000000000'
    }
    commit('profileLoaded', payload)
  }
}
