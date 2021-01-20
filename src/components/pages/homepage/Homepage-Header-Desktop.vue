<template>
  <div class="homepage-header-desktop">
    <b-container fluid="true">
      <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="homepage-desktop-banner" :style="{'background-image': 'url(' + require('@/assets/banner/desktop_banner_home.jpg') + ')'}">
        <div class="h-100 w-100 d-flex justify-content-center align-items-center">
          <div class="homepage-desktop-content-banner">
            <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="pt-4 pb-4 text-center">
              <h2 class="h2-homepage-desktop">Et si on <b>diminuait tous</b><br>le <b>bilan carbone</b> de nos voyages<br>en <b>agrandissant nos forêts ?</b></h2>
            </b-col>
            <b-row class="pr-3 pl-3 pb-3 pt-3">
              <b-col cols="12" sm="12" md="4" lg="4" xl="4">
                <router-link to="/">
                  <div class="homepage-desktop-cards-top shadow-sm pl-2 pr-2 pt-2 pb-2 text-center">
                    <img :src="require('@/assets/homepage/icon_1.png')" class="pb-2 pt-2" alt="">
                    <h3 class="h3-homepage-desktop">Je veux<br>un greener*<br>vol</h3>
                  </div>
                </router-link>
              </b-col>
              <b-col cols="12" sm="12" md="4" lg="4" xl="4">
                <router-link to="/">
                  <div class="homepage-desktop-cards-top shadow-sm pl-2 pr-2 pt-2 pb-2 text-center">
                    <img :src="require('@/assets/homepage/icon_2.png')" class="pb-2 pt-2" alt="">
                    <h3 class="h3-homepage-desktop">Je veux<br>un greener*<br>hébergement</h3>
                  </div>
                </router-link>
              </b-col>
              <b-col cols="12" sm="12" md="4" lg="4" xl="4">
                <router-link to="/">
                  <div class="homepage-desktop-cards-top shadow-sm pl-2 pr-2 pt-2 pb-2 text-center">
                    <img :src="require('@/assets/homepage/icon_3.png')" class="pb-2 pt-2" alt="">
                    <h3 class="h3-homepage-desktop">Je veux une<br>greener* idée<br>de voyage</h3>
                  </div>
                </router-link>
              </b-col>
            </b-row>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <span><i>*Greener = plus vert</i></span>
            </b-col>
          </div>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Homepage-Header-Desktop"
}
</script>

<style scoped>
.homepage-desktop-banner{
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 700px;
}

.homepage-desktop-content-banner{
  margin-top: 100px;
  margin-bottom: 100px;
  width: 750px;
  height: 400px;
  background-color: white;
}

.h2-homepage-desktop{
  color: #5F5F5F;
  font-weight: normal;
}

.homepage-desktop-cards-top{
  width: 100%;
  height: 150px;
  border-radius: 16px;
}

.h3-homepage-desktop{
  font-size: 18px;
  text-transform: uppercase;
  color:#28BA8D;
}

</style>