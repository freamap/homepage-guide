<template lang="pug">
  div.headline1
    div.mark
      img(src="~/assets/images/title-mark.svg")
    div.headline
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

  > .headline {
    font-size: 4.8rem;
    font-weight: bold;
    padding: 0 
  }

  > .mark {
    margin: 0 40px;

    > img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
