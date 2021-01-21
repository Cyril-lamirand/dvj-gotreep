<template>
  <b-container fluid="true" class="tripidea-banner-section" :style="{'background-image': 'url(' + require('@/assets/banner/banner_tripidea.png') + ')'}">
    <h1>Hello</h1>

  </b-container>
</template>

<script>
export default {
name: "Tripidea-Header-Section"
}
</script>

<style scoped>
.tripidea-banner-section{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}

</style>