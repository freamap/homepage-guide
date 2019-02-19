<template lang="pug">
  div.header
    | ヘッダー
    GlobalNavi
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'

@Component({
  components: {
    GlobalNavi
  }
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  background-color: red;
}
</style>
