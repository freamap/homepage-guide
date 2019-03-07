import { Page } from '~/types/Page'

export interface PageState {
  title: string | null
  topicPath: Page[]
  currentGlobalPage: string | null
  pages: {
    [key: string]: Page
  }
}
