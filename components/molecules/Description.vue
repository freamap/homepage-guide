<template lang="pug">
  section.section.description
    div.container
      header
        HeadLine2
          slot(name="title")
      div.body
        slot(name="body")
      Advertisement
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeadLine2 from '~/components/atoms/HeadLine2.vue'
import Advertisement from '~/components/molecules/Advertisement.vue'

@Component({
  components: {
    HeadLine2,
    Advertisement
  }
})
export default class Description extends Vue {}
</script>
<style lang="scss" scoped>
.description {
  .body {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }
}
</style>
