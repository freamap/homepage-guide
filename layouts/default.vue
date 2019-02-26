<template>
  <div>
    <TopHeader />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopHeader from '~/components/organisms/TopHeader.vue'
import Footer from '~/components/organisms/Footer.vue'

@Component({
  components: {
    TopHeader,
    Footer
  }
})
export default class Default extends Vue {}
</script>
