import { ActionContext } from 'vuex'
import { PageState } from './types'
import { RootState } from '~/store/types'

export default {
  fetchData ({ commit }: ActionContext<PageState, RootState>, state: PageState): any {
    commit('setPage', state)
  }
}
