import { ActionContext } from 'vuex'
import { PageState } from './types'
import { RootState } from '~/store/types'

export default {
  fetchData (
    { commit, state }: ActionContext<PageState, RootState>,
    page: {title: string; topicPath: string[]}
  ): any {
    const topicPath = page.topicPath.map((topic) => {
      return state.pages[topic]
    })
    commit('setPage', { title: page.title, topicPath: topicPath })
  }
}
