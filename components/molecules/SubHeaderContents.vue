<template lang="pug">
  div
    HeadLine1
      slot(name="title")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeadLine1 from '~/components/atoms/HeadLine1.vue'

@Component({
  components: {
    HeadLine1
  }
})
export default class GlobalNavi extends Vue {}
</script>