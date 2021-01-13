<template>
  <div class="homepage-view">
    <HelloI18n/>
    <Homepage/>
  </div>
</template>

<script>
import Homepage from "@/components/pages/Homepage"
import HelloI18n from "@/components/HelloI18n"

export default {
  name: "HomepageView",
  components: {Homepage, HelloI18n}
}
</script>

<style scoped>

.homepage-view{}

</style>