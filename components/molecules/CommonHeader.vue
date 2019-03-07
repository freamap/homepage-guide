<template lang="pug">
  nav.navbar(role="navigation" aria-label="main navigation")
    div.navbar-brand
      nuxt-link.navbar-item(to="/") LOGO
      a.navbar-burger.burger(
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="bugerClick"
        :class="{ 'is-active': menuActive }"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    div.navbar-menu#navbarMenu(:class="{ 'is-active': menuActive }")
      div.navbar-end
        nuxt-link.navbar-item(
          v-for="(globalLink, index) in globalLinks"
          :to="globalLink.path"
          :key="index"
        )
          | {{ globalLink.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { PageState } from '../../store/page/types'
import { Page } from '../../types/page'

@Component
export default class CommonHeader extends Vue {
  @State('page') page!: PageState
  menuActive: boolean = false

  bugerClick () {
    this.menuActive = !this.menuActive
  }

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

<style scoped lang="scss">
</style>
