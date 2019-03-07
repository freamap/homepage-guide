<template lang="pug">
  div.global-navi
    div.nav(
      v-for="(globalLink, index) in globalLinks"
      key="index"
    )
      nuxt-link(
        :to="globalLink.path"
        :class="{'current-page': globalLink.current}"
      )
        | {{ globalLink.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { PageState } from '../../store/page/types'
import { Page } from '../../types/page'

@Component
export default class GlobalNavi extends Vue {
  @State('page') page!: PageState

  get globalLinks () {
    const globalLinks: Page[] = []

    Object.keys(this.page.pages).forEach(key => {
      const globalNaviOrder = this.page.pages[key].globalNaviOrder
      if (globalNaviOrder !== undefined) {
        const globalLink = { ...this.page.pages[key], current: false }

        if (key === this.page.currentGlobalPage) {
          globalLink.current = true
        }

        globalLinks[globalNaviOrder] = globalLink
      }
    })

    return globalLinks
  }
}
</script>

<style lang="scss" scoped>
.global-navi {
  display: flex;
  .nav {
    padding: 0 16px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    > a {
      text-decoration: none;
      font-weight: bold;

      &.current-page {
        color: $primary;
      }
    }
  }
}
</style>
