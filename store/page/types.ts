import { Page } from '~/types/Page'

export interface PageState {
  title: string | null
  topicPath: Page[]
  pages: {
    [key: string]: Page
  }
}
