<template lang="pug">
  Html5Contents
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
      topicPath: ['top'],
      currentGlobalPage: 'html5'
    })
  }
})
export default class HTML5 extends Vue {
}
</script>