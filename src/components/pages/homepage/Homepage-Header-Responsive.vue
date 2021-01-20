<template>
  <div class="homepage-header-responsive">
    <b-container fluid="true" class="homepage-responsive-content mb-5" :style="{'background-image': 'url(' + require('@/assets/banner/responsive_banner_home.png') + ')'}">
      <b-row class="h-100 d-flex justify-content-center align-items-center">
        <b-col cols="3" sm="3" md="3"></b-col>
        <b-col cols="6" sm="6" md="6" class="">
          <div>
            <router-link to="/">
              <div class="shadow pt-2 pb-2" style="width: 100%; height: auto; background-color: white; border-radius: 16px;">
                <div class="text-center pt-2">
                  <img :src="require('@/assets/homepage/icon_1.png')" alt="" class="img-responsive-card-header-homepage">
                  <h2 class="h2-homepage-responsive-header mt-3">Je veux<br>un greener*<br>vol</h2>
                </div>
              </div>
            </router-link>
          </div>

          <div class="pt-3 pt-sm-5 pt-md-5">
            <router-link to="/">
              <div class="shadow pt-2 pb-2" style="width: 100%; height: auto; background-color: white; border-radius: 16px;">
                <div class="text-center pt-2">
                  <img :src="require('@/assets/homepage/icon_2.png')" alt="" class="img-responsive-card-header-homepage">
                  <h2 class="h2-homepage-responsive-header mt-3">Je veux<br>un greener*<br>hébergement</h2>
                </div>
              </div>
            </router-link>
          </div>

          <div class="pt-3 pt-sm-5 pt-md-5">
            <router-link to="/">
              <div class="shadow pt-2 pb-2" style="width: 100%; height: auto; background-color: white; border-radius: 16px;">
                <div class="text-center pt-2">
                  <img :src="require('@/assets/homepage/icon_3.png')" alt="" class="img-responsive-card-header-homepage">
                  <h2 class="h2-homepage-responsive-header mt-3">Je veux<br>une greener* idée<br>de voyage</h2>
                </div>
              </div>
            </router-link>
          </div>

        </b-col>
        <b-col cols="3" sm="3" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Homepage-Header-Responsive"
}
</script>

<style scoped>

.homepage-responsive-content{
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  padding-top: 50px;
  padding-bottom: 50px;
}

.img-responsive-card-header-homepage{
  width: 80px;
}

.h2-homepage-responsive-header{
  color: #28BA8D;
  font-size: 16px;
  text-transform: uppercase;
}
@media screen and (min-width: 991.9px) {

}


</style>