<template lang="pug">
  div.header
    CommonHeader
    SubHeaderContents(:topicPath="page.topicPath")
      template(slot="title")
        | {{ page.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CommonHeader from '~/components/molecules/CommonHeader.vue'
import SubHeaderContents from '~/components/molecules/SubHeaderContents.vue'
import { State } from 'vuex-class'
import { PageState } from '../../store/page/types'

@Component({
  components: {
    CommonHeader,
    SubHeaderContents
  }
})
export default class SubHeader extends Vue {
  @State('page') page!: PageState
}
</script>

<style scoped lang="scss">
</style>
