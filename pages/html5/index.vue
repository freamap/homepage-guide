<template lang="pug">
  div
    HelloWorld
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { PageState } from '../../store/page/types'
import HelloWorld from '~/components/HelloWorld.vue'
const namespace: string = 'page'

@Component({
  components: {
    HelloWorld
  },
  layout: 'sub',
  async fetch ({ store }) {
    await store.dispatch(namespace + '/fetchData',{
      title: 'HTML5',
      topicPath: []
    })
  }
})
export default class HTML5 extends Vue {
  @State('page') page!: PageState
}
</script>