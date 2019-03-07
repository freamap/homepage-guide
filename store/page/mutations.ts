import { PageState } from './types'

export default {
  setPage (state: PageState, page: { title: PageState['title'], topicPath: PageState['topicPath'] }) {
    state.title = page.title
    state.topicPath = page.topicPath
  },
  clearPage (state: PageState) {
    state.title = ''
    state.topicPath = []
  }

}
