<template lang="pug">
  div.headline1
    div.mark
      img(src="~/assets/images/title-mark.svg")
    h1
      slot
    div.mark
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
  align-items: center;

  > h1 {
    font-size: 3.6rem;
    font-weight: bold;
    padding: 0 
  }

  > .mark {
    margin: 0 40px;
    width: 54px;

    > img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
