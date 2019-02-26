<template lang="pug">
  div
    SubHeader
      template(slot="title") {{ page.title }}
      template(slot="topic-path") {{ page.topicPath }}
    nuxt
    Footer
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { PageState } from '../store/page/types'
import SubHeader from '~/components/organisms/SubHeader.vue'
import Footer from '~/components/organisms/Footer.vue'

@Component({
  components: {
    SubHeader,
    Footer
  }
})
export default class Sub extends Vue {
  @State('page') page!: PageState
}
</script>
