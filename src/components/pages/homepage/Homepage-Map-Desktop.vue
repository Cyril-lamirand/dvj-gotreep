<template>
  <div class="desktop-homepage-section-3 mt-5" :style="{'background-image': 'url(' + require('@/assets/banner/desktop_banner_home2.jpg') + ')'}">
    <b-container fluid="true">
      <b-container>
        <b-row>
          <b-col lg="4" xl="4">
          </b-col>
          <b-col lg="8" xl="8" class="mt-4">
            <div class="text-center">
              <h2 class="color-white">Et avec la map gotreep…</h2>
              <p class="color-white pt-2">Si vous ne savez pas ou partir, bénéficiez des meilleures suggestions<br>vol et hébergement pour un voyage plus respectueux.</p>
              <router-link to="/">
                <b-button class="btn-desktop-homepage-section-3 mt-3 pr-5 pl-5 pt-2 pb-2">
                  Découvrir la carte Gotreep
                </b-button>
              </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Homepage-Map-Desktop"
}
</script>

<style scoped>

.desktop-homepage-section-3{
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.btn-desktop-homepage-section-3 {
  background-color: white;
  border: none;
  color: #5F5F5F;
  border-radius: 32px;
}
</style>