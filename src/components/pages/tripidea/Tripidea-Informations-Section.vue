<template>
  <div class="tripidea-informations-section">
    <div class="hidden-mobile">
      <b-row class="mt-3">
        <b-col cols="6">
          <p class="p-tripidea-informations-text text-align-justify">Vols classés par défaut selon le Meilleur choix, comprenant la durée, le prix, le nombre d’escales. Offres pour chaque vol classées selon la qualité des fournisseurs, puis selon leur prix. Offres équivalentes départagées par la rémunération reçue. Nous effectuons des recherches non exhaustives auprès de plus de xxx fournisseurs, avec lesquels nous avons un accord commercial.</p>
        </b-col>
        <b-col cols="6">
          <p class="p-tripidea-informations-text text-align-justify">COVID 19 - Informations / Des avertissements et autres restrictions liés au COVID-19 ont été émis pour votre destination. Informez-vous avant de réserver. Plusieurs pays ont mis en place de nouvelles mesures de restriction aux frontières dû au COVID-19. Informez-vous avant de réserver. En savoir plus</p>
        </b-col>
      </b-row>
    </div>
    <b-row class="mt-3">
      <b-col cols="12" sm="12" md="6" lg="6" xl="3" class="mt-2 mb-2">
        <div class="card-tripidea-informations-section shadow-sm">
          <b-row class="padding-perso h-100">
            <b-col cols="2" sm="2" md="3" lg="2" xl="4" class="padding-unset border-right-blue">
              <img :src="require('@/assets/icons/icon_credit_tree.png')" alt="" class="w-100 h-100"/>
            </b-col>
            <b-col cols="10" sm="10" md="9" lg="10" xl="8" class="border-blue d-flex justify-content-center align-items-center">
              <p class="p-tripidea-informations-text-2 text-center">Obtenez des crédits arbres zones bleues en réservant votre vol via gotreep</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="6" lg="6" xl="3" class="mt-2 mb-2 hidden-mobile">
        <div class="card-tripidea-informations-section shadow-sm">
          <div class="header-card-tripidea-informations text-center">
            <h3 class="h3-tripidea-header-informations pt-1 pb-1">Meilleur prix</h3>
          </div>
          <div class="pl-3">
            <p class="p-tripidea-informations-text-3">Cette sélection correspond au meilleur prix trouvé dans vos dates ou les plus proches.</p>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="6" xl="3" class="mt-2 mb-2 hidden-mobile">
        <div class="card-tripidea-informations-section shadow-sm">
          <div class="header-card-tripidea-informations-2 text-center">
            <h3 class="h3-tripidea-header-informations pt-1 pb-1">Vol + court</h3>
          </div>
          <div class="pl-3">
            <p class="p-tripidea-informations-text-3">Cette sélection correspond aux vols les plus courts suivants les dates  choisies.</p>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="6" xl="3" class="mt-2 mb-2 hidden-mobile">
        <div class="card-tripidea-informations-section card-tripidea-informations-section-special shadow-sm" :style="{'background-image': 'url(' + require('@/assets/icons/icon_choice_gotreep.png') + ')'}">
          <div class="header-card-tripidea-informations-3 text-center">
            <h3 class="h3-tripidea-header-informations pt-1 pb-1">Le choix Gotreep</h3>
          </div>
          <b-row class="not-easy-one">
            <b-col cols="10">
              <p class="p-tripidea-informations-text-3 font-size-special ml-3">Cette sélection correspond au meilleur rapport bilan carbone / prix des vols suivant les dates choisies.</p>
            </b-col>
            <b-col cols="2" class="padding-unset margin-unset">
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Tripidea-Informations-Section"
}
</script>

<style scoped>

.card-tripidea-informations-section-special{
  background-repeat: no-repeat;
  background-position: right 5% bottom 0%;;
  background-size: 15%;
}

.p-tripidea-informations-text{
  font-size: 9px;
  color: #707070;
  margin: unset;
  padding: unset;
}

.p-tripidea-informations-text-2{
  font-size: 10px;
  color:#3DCDF5;
  font-weight: bold;
  margin: unset;
  padding: unset;

}

.p-tripidea-informations-text-3{
  padding: unset;
  margin: unset;
  font-size: 12px;
  color: #707070;
}

.border-blue{
  border:2px solid #3DCDF5;
}

.padding-unset{
  padding: unset;
}

.margin-unset{
  margin:unset;
}

.padding-perso{
  padding-left: 15px;
  padding-right: 15px;
}

.header-card-tripidea-informations{
  background-color: #00A1E0;
}

.header-card-tripidea-informations-2{
  background-color: #3DCDF5;
}

.header-card-tripidea-informations-3{
  background-color: #28BA8D;
}

.h3-tripidea-header-informations{
  font-size: 16px;
  color: white;
  text-transform: uppercase;
}

.not-easy-one{
  margin-top: -4px;
}

.font-size-special{
  font-size: 11px !important;
}

@media screen and (max-width: 767.9px) {
  .hidden-mobile{ display: none; }
}

@media screen and (min-width: 767.9px) and (max-width: 991.9px) {
  .card-tripidea-informations-section{
    height: 84px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199.9px) {
  .card-tripidea-informations-section{
    height: 84px;
  }
}

@media screen and (min-width: 1200px) {
  .card-tripidea-informations-section{
    height: 85px;
  }
}

</style>