<template lang="pug">
  div.headline2
    div
      h2
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
      width: 36px;
      border-bottom: 6px solid #236AF7;
    }

    > h2 {
      font-size: 3rem;
      font-weight: bold;
      margin: 0;
    }
  }
}
</style>
