<template lang="pug">
  div.header
    CommonHeader
    SubHeaderContents
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CommonHeader from '~/components/molecules/CommonHeader.vue'
import SubHeaderContents from '~/components/molecules/SubHeaderContents.vue'

@Component({
  components: {
    CommonHeader,
    SubHeaderContents
  }
})
export default class SubHeader extends Vue {
}
</script>

<style scoped lang="scss">
</style>
