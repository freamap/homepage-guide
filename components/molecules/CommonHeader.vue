<template lang="pug">
  div.common-header.container
    div LOGO
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
export default class CommonHeader extends Vue {}
</script>

<style scoped lang="scss">
.common-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
