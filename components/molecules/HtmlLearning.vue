<template lang="pug">
  section.section.html-learning
    div.container
      header
        HeadLine2
          | HTMLを学ぶ
      div.body
        | bbbbbbbbb
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
export default class HtmlLearning extends Vue {}
</script>
<style lang="scss" scoped>
.html-learning {
  .body {
    margin-top: 48px;
    display: flex;
    justify-content: center;

  }
}
</style>
