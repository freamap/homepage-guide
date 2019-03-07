import { PageState } from './types'

export default {
  setPage (state: PageState, page: PageState) {
    state.title = page.title ? page.title : ''
    state.topicPath = page.topicPath
  },
  clearPage (state: PageState) {
    state.title = ''
    state.topicPath = []
  }

}
