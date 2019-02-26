import { PageState } from './types'

export default {
  title (state: PageState): PageState['title'] {
    return state.title
  },
  topicPath (state: PageState): PageState['topicPath'] {
    return state.topicPath
  }
}
