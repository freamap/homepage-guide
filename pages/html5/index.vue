<template lang="pug">
  Html5Contents
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { PageState } from '../../store/page/types'
import Html5Contents from '~/components/organisms/Html5Contents.vue'
const namespace: string = 'page'

@Component({
  components: {
    Html5Contents
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