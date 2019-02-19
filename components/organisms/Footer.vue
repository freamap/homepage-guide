<template lang="pug">
  div フッター
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'

@Component({
  components: {
    GlobalNavi
  }
})
export default class Footer extends Vue {}
</script>