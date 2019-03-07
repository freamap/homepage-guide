import { PageState } from './types'

export default {
  setPage (state: PageState, page: { title: PageState['title'], topicPath: PageState['topicPath'], currentGlobalPage: string }) {
    state.title = page.title
    state.topicPath = page.topicPath
    state.currentGlobalPage = page.currentGlobalPage
  },
  clearPage (state: PageState) {
    state.title = ''
    state.topicPath = []
  }

}
