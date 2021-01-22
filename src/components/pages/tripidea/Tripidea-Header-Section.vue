<template>
  <b-container fluid="true" class="tripidea-banner-section" :style="{'background-image': 'url(' + require('@/assets/banner/banner_tripidea.png') + ')'}">
    <b-container>
      <b-col cols="12">
        <div class="text-center">
          <h2 class="h2-tripidea-header">Vos greener idées de voyage*</h2>
          <p class="color-white"><i>*Vos idées de voyage + vertes</i></p>
        </div>
      </b-col>
      <div class="hidden-mobile">
        <b-row class="d-flex justify-content-end mt-5">
          <router-link to="/">
            <b-row class="card-tripidea-header shadow pt-2 pb-2">
              <b-col cols="4">
                <img :src="require('@/assets/icons/icon_1.png')" alt="" class="img-tripidea-header">
              </b-col>
              <b-col cols="8">
                <h3 class="h3-tripidea-header">Je veux un<br>greener vol</h3>
              </b-col>
            </b-row>
          </router-link>
          <router-link to="/">
            <b-row class="card-tripidea-header shadow pt-2 pb-2">
              <b-col cols="4">
                <img :src="require('@/assets/icons/icon_2.png')" alt="" class="img-tripidea-header">
              </b-col>
              <b-col cols="8">
                <h3 class="h3-tripidea-header">Je veux un greener<br> hébergement</h3>
              </b-col>
            </b-row>
          </router-link>
        </b-row>
      </div>
    </b-container>
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
  background-position: center center;
  padding-top: 100px;
  padding-bottom: 50px;
}

.h2-tripidea-header{
  color: white;
  text-transform: uppercase;
  font-size: 24px;
}

.card-tripidea-header{
  background-color: white;
  border-radius: 8px;
  width: 270px;
  margin-left: 20px;
  margin-right: 20px;
}

.h3-tripidea-header{
  font-size: 15px;
  color: #28BA8D;
  text-transform: uppercase;
}

.img-tripidea-header{
  width: 50px;
}

@media screen and (max-width: 1023.9px) {
  .hidden-mobile{ display: none; }
}

</style>