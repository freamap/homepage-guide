<template lang="pug">
  div.header
    CommonHeader
    TopHeaderContents
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CommonHeader from '~/components/molecules/CommonHeader.vue'
import TopHeaderContents from '~/components/molecules/TopHeaderContents.vue'

@Component({
  components: {
    CommonHeader,
    TopHeaderContents
  }
})
export default class TopHeader extends Vue {}
</script>

<style scoped lang="scss">
</style>
