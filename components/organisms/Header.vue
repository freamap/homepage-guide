<template>
  <div>
    ヘッダー
    <GlobalNavi />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'

@Component({
  components: {
    GlobalNavi
  }
})
export default class Home extends Vue {}
</script>