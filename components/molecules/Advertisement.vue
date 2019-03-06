<template lang="pug">
  div.advertisement
    div
      div.advertisement-title 広告
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
.advertisement {
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    > .advertisement-body {
      width: 728px;
      height: 90px;
      border: 1px solid #000000;
    }
  }
}
</style>
