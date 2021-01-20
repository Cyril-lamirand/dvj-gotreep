<template>
  <div class="homepage-map-responsive">
    <b-container fluid="true" class="homepage-map-responsive-container mt-5" :style="{'background-image': 'url(' + require('@/assets/banner/responsive_banner_home2.png') + ')'}">
      <b-col cols="12" sm="12" md="12" class="text-center pt-5">
        <h2 class="h2-homepage-responsive-map"><b>Et</b> avec la <b>map<br>gotreep...</b></h2>
        <p class="p-homepage-responsive-map pt-3">Si vous ne savez pas ou partir, bénéficiez des meilleures suggestions vol et hébergement pour un voyage plus respectueux.</p>
        <router-link to="/">
          <b-button class="btn-homepage-responsive-map mt-3 mb-5 shadow">
            <b>Découvrir la map</b>
          </b-button>
        </router-link>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
name: "Homepage-Map-Responsive"
}
</script>

<style scoped>

.homepage-map-responsive-container{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.h2-homepage-responsive-map{
  padding-top: 100px;
  color: white;
}

.p-homepage-responsive-map{
  color: white;
}

.btn-homepage-responsive-map{
  background-color: white;
  color: #707070;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
}
</style>