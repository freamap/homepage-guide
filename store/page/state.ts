import { PageState } from './types'

export default (): PageState => ({
  title: '',
  topicPath: [],
  currentGlobalPage: null,
  pages: {
    top: {
      title: 'TOP',
      path: '/',
      globalNaviOrder: 0
    },
    web: {
      title: 'WEBサイトを作ろう',
      path: '/web',
      globalNaviOrder: 1
    },
    html5: {
      title: 'HTML5',
      path: '/html5',
      globalNaviOrder: 2
    },
    css3: {
      title: 'CSS3',
      path: '/css3',
      globalNaviOrder: 3
    },
    javascript: {
      title: 'JavaScript',
      path: '/javascript',
      globalNaviOrder: 4
    }
  }
})
