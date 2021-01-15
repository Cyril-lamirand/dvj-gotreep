<template>
  <div class="homepage-view">
    <Homepage/>
    <HelloI18n/>
  </div>
</template>

<script>
import Homepage from "@/components/desktop/pages-desktop/Homepage"
import HelloI18n from "@/components/HelloI18n"

export default {
  name: "HomepageView",
  components: {Homepage, HelloI18n}
}
</script>

<style scoped>

.homepage-view{}

</style>