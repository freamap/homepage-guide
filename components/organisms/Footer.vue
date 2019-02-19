<template lang="pug">
  footer.footer
    div.logo
      img(src="~/assets/images/title-mark.svg")
    div.contents
      div
        FooterLinks
      div.copyright
        | Copyright© freamap ホームページ制作入門 , 2019 All Rights Reserved.
    div.logo
      img(src="~/assets/images/title-mark.svg")
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

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  color: #236AF7;
  background-color: #FFFFFF;
  height: 107px;
  margin-top: 23px;
  margin-bottom: 30px;
}

.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  margin-left: 40px;
}

.copyright {
  font-size: 12px;
  font-weight: bold;
  margin-top: 12px;
}

.logo {
  width: 56px;
}
</style>