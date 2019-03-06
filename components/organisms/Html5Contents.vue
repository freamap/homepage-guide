<template lang="pug">
  div
    Description
      template(slot="title")
        | 説明
      template(slot="body")
        p
          | HTML5とはHTML5とはHTML5とはHTML5とはHTML5とは
    HtmlReference
    HtmlLearning
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Description from '~/components/molecules/Description.vue'
import HtmlReference from '~/components/molecules/HtmlReference.vue'
import HtmlLearning from '~/components/molecules/HtmlLearning.vue'

@Component({
  components: {
    Description,
    HtmlReference,
    HtmlLearning
  }
})
export default class Html5Contents extends Vue {}
</script>

<style lang="scss" scoped>

</style>
