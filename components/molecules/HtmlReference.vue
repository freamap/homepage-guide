<template lang="pug">
  div.html-reference.container
    HeadLine2
      | リファレンス
    div.body
      | aaaaaaaaaaa
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
export default class HtmlReference extends Vue {}
</script>
<style lang="scss" scoped>
.html-reference {
  padding-top: 80px;
  padding-bottom: 80px;

  .body {
    margin-top: 48px;
    display: flex;
    justify-content: center;

  }
}
</style>
