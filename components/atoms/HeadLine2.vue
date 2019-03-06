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
    display: flex;
    align-items: center;
    flex-direction: column;

    &::after {
      display: block;
      content: "";
      margin-top: 12px;
      width: 56px;
      border-bottom: 6px solid #236AF7;
    }

    > * {
      font-size: 4rem;
      font-weight: bold;
      margin: 0;
    }
  }
}
</style>
