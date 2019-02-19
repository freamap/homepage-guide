<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '~/components/organisms/Header.vue'
import Footer from '~/components/organisms/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Home extends Vue {}
</script>
