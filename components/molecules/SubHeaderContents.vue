<template lang="pug">
  div.sub-header-contents
    HeadLine1
      slot(name="title")
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
  padding: 80px 0;
}
</style>
