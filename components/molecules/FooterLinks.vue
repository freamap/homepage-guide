<template lang="pug">
  div フッターリンク
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FooterLinks extends Vue {
  pages!: {
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