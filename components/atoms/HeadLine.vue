<template lang="pug">
  div.headline
    div
      img(src="~/assets/images/title-mark.svg")
    slot
    div
      img(src="~/assets/images/title-mark.svg")
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeadLine extends Vue {}
</script>
<style lang="scss" scoped>
.headline {
  display: flex;
  justify-content: center;
}
</style>
