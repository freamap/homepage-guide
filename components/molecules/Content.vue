<template lang="pug">
  div.content
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
export default class Content extends Vue {}
</script>
<style lang="scss" scoped>
.content {
  padding: 80px 0;

  .body {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }
}
</style>
