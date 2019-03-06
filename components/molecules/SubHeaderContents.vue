<template lang="pug">
  div.sub-header-contents.container
    div
      HeadLine1
        slot(name="title")
      div.topic-path
        TopicPath(:topicPath="topicPath")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HeadLine1 from '~/components/atoms/HeadLine1.vue'
import TopicPath from '~/components/atoms/TopicPath.vue'
import { PageState } from '../../store/page/types'

@Component({
  components: {
    HeadLine1,
    TopicPath
  }
})
export default class SubHeaderContents extends Vue {
  @Prop() topicPath!: PageState['topicPath']
}
</script>

<style lang="scss" scoped>
.sub-header-contents {
  > div {
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
