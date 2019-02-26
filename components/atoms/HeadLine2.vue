<template lang="pug">
  div.headline2
    div
      slot
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeadLine2 extends Vue {}
</script>
<style lang="scss" scoped>
.headline2 {
  display: flex;
  justify-content: center;

  > div {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #333;
    }
  }
}
</style>
