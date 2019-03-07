import { PageState } from './types'

export default (): PageState => ({
  title: '',
  topicPath: [],
  pages: {
    top: {
      title: 'TOP',
      path: '/'
    },
    html5: {
      title: 'HTML5',
      path: '/html5'
    }
  }
})
