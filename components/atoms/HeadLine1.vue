<template lang="pug">
  div.headline1
    div
      img(src="~/assets/images/title-mark.svg")
    div
      slot
    div
      img(src="~/assets/images/title-mark.svg")
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeadLine1 extends Vue {}
</script>
<style lang="scss" scoped>
.headline1 {
  display: flex;
  justify-content: center;
}
</style>
