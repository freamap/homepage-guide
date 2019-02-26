<template lang="pug">
  div.footer-links
    div(
      v-for="(value, key) in pages"
      :key="key"
    )
      | {{ value.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FooterLinks extends Vue {
  pages = {
    company: {
      link: '/company',
      title: '運営会社'
    },
    privacy: {
      link: '/privacy',
      title: 'プライバシーポリシー'
    }
  }
}
</script>

<style scoped lang="scss">
.footer-links {
  display: flex;
  justify-content: center;
  font-size: 16px;
  > div {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>