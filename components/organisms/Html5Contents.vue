<template lang="pug">
  div
    Content
      template(slot="title")
        | 説明
      template(slot="body")
        | HTML5とはHTML5とはHTML5とはHTML5とはHTML5とは
      
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Content from '~/components/molecules/Content.vue'

@Component({
  components: {
    Content
  }
})
export default class Html5Contents extends Vue {}
</script>