<template>
  <div class="homepage-sponsorised-section mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0">
    <div class="text-align-right">
      <span>Annonce sponsorisée</span>
    </div>
    <div class="section-2-sponsorised mt-2 pb-4 shadow">
      <div class="section-2-sponsorised-header text-center">
        <h3 class="h3-section-1-sponsorised pb-3 pt-3">Hôtel éco-responsable</h3>
      </div>
      <div class="sponsorised-hotel-name text-center">
        <h4 class="h4-desktop-homepage-section-2 pt-4">Hôtel Lagon attitude ****</h4>
        <h5 class="h5-desktop-homepage-section-2 pt-2">Île Maurice</h5>
      </div>
      <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100 pr-3 pl-3 pt-4 pb-4"/>
      <b-row class="pl-3 pr-3 mt-2 pb-3">
        <b-col cols="12" sm="12" md="12" lg="7" xl="7">
          <h5 class="h5-desktop-homepage-section-2">Mercede accepta lucris et obscuros.</h5>
          <p class="p-desktop-homepage-section-2 text-align-justify">Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="5" xl="5" class="hidden-mobile">
          <img :src="require('@/assets/fake-images/rectangle.png')" alt="" class="w-100"/>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="4" xl="4">
          <img :src="require('@/assets/homepage/logo_hotel.png')" alt="" class="w-100"/>
        </b-col>
        <b-col cols="2" sm="2" md="2" lg="2" xl="2">
          <img :src="require('@/assets/homepage/logo_label.png')" alt="" class="w-75"/>
        </b-col>
        <b-col cols="6" sm="6" md="6" lg="6" xl="6">
          <router-link to="/">
            <b-button block class="btn-sponsorised-desktop">
              Découvrir l'hôtel
            </b-button>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage-Sponsorised-Section"
}
</script>

<style scoped>

.section-2-sponsorised{
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}

.section-2-sponsorised-header{
  background-color:#8ECB82;
  color: white;
}
.h3-section-1-sponsorised{ font-size: 16px; }
.h4-desktop-homepage-section-2{
  color: #8ECB82;
}
.h5-desktop-homepage-section-2{
  font-size: 15px;
  color: #8ECB82;
}
.p-desktop-homepage-section-2{
  font-size: 12px;
}
.btn-sponsorised-desktop{
  background-color: #8ECB82;
  color: white;
  border:none;
}

@media screen and (max-width: 991.9px) {
  .hidden-mobile{ display: none; }
}

</style>