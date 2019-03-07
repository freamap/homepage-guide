import { Page } from '~/types/Page'

export interface PageState {
  title: string
  topicPath: Array<Page>
  pages: {
    [key: string]: Page
  }
}
