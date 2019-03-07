<template lang="pug">
  section.hero
    div.hero-body
      div.container
        HeadLine1
          | {{ page.title }}
        div.topic-path
          TopicPath(:page="page")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeadLine1 from '~/components/atoms/HeadLine1.vue'
import TopicPath from '~/components/atoms/TopicPath.vue'
import { PageState } from '../../store/page/types'
import { State } from 'vuex-class'

@Component({
  components: {
    HeadLine1,
    TopicPath
  }
})
export default class SubHeaderContents extends Vue {
  @State('page') page!: PageState
}
</script>

<style lang="scss" scoped>
.hero-body {
  > .container {
    position: relative;
    width: 100%;
    padding: 80px 0;

    > .topic-path {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
