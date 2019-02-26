<template lang="pug">
  div
    HeadLine2
      slot(name="title")
    div
      slot(name="body")
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