<template lang="pug">
  div.topic-path
    div(v-for="(topic, index) in topicPath")
      div(v-if="index !== 0")
        | {{ '>' }}
      div
        | {{ topic.title }}
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PageState } from '../../store/page/types'

@Component
export default class TopicPath extends Vue {
  @Prop() topicPath!: PageState['topicPath']
}
</script>
<style lang="scss" scoped>
.topic-path {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
  }
}
</style>
