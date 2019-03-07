<template lang="pug">
  div.topic-path
    div(v-for="(topic, index) in topicPathContain")
      div.path(v-if="index !== 0")
        | {{ '>' }}
      div
        | {{ topic.title }}
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PageState } from '../../store/page/types'

@Component
export default class TopicPath extends Vue {
  @Prop() page!: PageState

  get topicPathContain () {
    const topicPath = this.page.topicPath.concat()
    topicPath.push(
      {
        title: this.page.title,
        path: this.$nuxt.$route.path
      }
    )
    return topicPath
  }
}
</script>
<style lang="scss" scoped>
.topic-path {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;

    > div {
      color: $primary;
      font-weight: bold;
    }

    > .path {
      padding: 0 16px;
    }
  }
}
</style>
