<template lang="pug">
  div
    Description
      template(slot="title")
        | 説明
      template(slot="body")
        p
          | HTML5とはHTML5とはHTML5とはHTML5とはHTML5とは
      
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Description from '~/components/molecules/Description.vue'

@Component({
  components: {
    Description
  }
})
export default class Html5Contents extends Vue {}
</script>

<style lang="scss" scoped>

</style>
