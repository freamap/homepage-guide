<template lang="pug">
  div
    SubHeader
    nuxt
    Footer
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SubHeader from '~/components/organisms/SubHeader.vue'
import Footer from '~/components/organisms/Footer.vue'

@Component({
  components: {
    SubHeader,
    Footer
  }
})
export default class Sub extends Vue {}
</script>
