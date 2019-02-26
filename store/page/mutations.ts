import { PageState } from './types'

export default {
  setPage (state: PageState, pageState: PageState) {
    state.title = pageState.title
    state.topicPath = pageState.topicPath
  },
  clearPage (state: PageState) {
    state.title = ''
    state.topicPath = []
  }

}
