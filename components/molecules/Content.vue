<template lang="pug">
  div.content
    HeadLine2
      slot(name="title")
    div.body
      slot(name="body")
    div.advertisement
      div 広告
      div.advertisement-body
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeadLine2 from '~/components/atoms/HeadLine2.vue'

@Component({
  components: {
    HeadLine2
  }
})
export default class Content extends Vue {}
</script>
<style lang="scss" scoped>
.content {
  padding: 80px 0;

  .body {
    margin-top: 48px;
  }

  .advertisement {

    >.advertisement-body {
      width: 728px;
      height: 90px;
      border: 1px solid #000000;
    }
  }
}
</style>
