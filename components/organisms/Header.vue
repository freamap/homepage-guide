<template lang="pug">
  div.header
    div.navi
      | ヘッダー
      GlobalNavi
    HeadLine
      h1 div
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'
import HeadLine from '~/components/atoms/HeadLine.vue'

@Component({
  components: {
    GlobalNavi,
    HeadLine
  }
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  background-color: red;

  .navi {
    display: flex;
    justify-content: space-between;
  }
}
</style>
