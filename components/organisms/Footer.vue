<template lang="pug">
  div フッター
    FooterLinks
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FooterLinks from '~/components/molecules/FooterLinks.vue'

@Component({
  components: {
    FooterLinks
  }
})
export default class Footer extends Vue {}
</script>