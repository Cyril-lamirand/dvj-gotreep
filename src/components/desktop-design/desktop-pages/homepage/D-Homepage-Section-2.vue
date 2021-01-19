<template>
  <div class="desktop-homepage-section-2">
    <b-container>
      <b-row>
        <b-col lg="6" xl="6" class="pt-4">
          <div class="text-center">
            <img :src="require('@/assets/logo-gotreep.png')" alt="" class=""/>
            <p>Travel Greener*</p>
            <h2 class="h2-homepage-section-1 mt-5">Ensemble, décidons de voyager de manière plus vert...ueuse pour la planète.</h2>
          </div>
          <p class="section-1-paragraph mt-3">Voyager fait partie de nos vies mais ce mode de consommation est de plus en plus critiqué par son impact sur l’environnement. Faute d’une avancée majeure  qui permettrait un jour de voyager sans polluer, nous pouvons cependant agir, dès aujourd’hui, pour neutraliser le bilan carbone de chaque déplacement. Comment ? En choisissant Gotreep, le premier comparateur de voyages qui compense automatiquement chaque voyage — vol ou nuitée d’hôtel — par des plantations d’arbres bénéfiques pour le climat et la biodiversité.</p>
          <div class="text-center">
            <b-button class="btn btn-primary section-1-btn shadow mt-2 pl-4 pr-4">
              En savoir plus sur le comparateur gotreep
            </b-button>
          </div>
          <div class="section-1-green-content mt-5 pt-3 pb-3 pl-5 pr-5 shadow">
            <div class="text-center">
              <h3>Vos Crédits Arbres</h3>
              <p><b>Gotreep a opté pour le Zéro Impact financier pour vous :</b></p>
              <p><b>L’achat et la plantation des arbres sont pris à notre charge</b> sans effet sur les tarifs négociés que nous vous proposons. Chaque crédit arbre obtenu correspond à un arbre à planter. Vous trouverez vos crédits dans votre compte gotreep.</p>
            </div>
            <b-row>
              <b-col lg="6" xl="6">
                <div class="section-1-blue-tree shadow-sm">
                  <div class="section-1-header-blue text-center">
                    <h4 class="h4-section-1 pt-1 pb-1">Vols</h4>
                  </div>
                  <div class="text-center">
                    <img :src="require('@/assets/homepage/icon_1.png')" alt="" class="mt-3"/>
                    <p class="section-1-colored-cards-text mt-2 p-no-mb"><b>1 Vol en avion</b></p>
                    <h5 class="section-1-colored-cards-text h5-section-1">=</h5>
                    <img :src="require('@/assets/homepage/blue-card.png')" alt="" class=""/>
                    <p class="section-1-colored-cards-text pl-1 pr-1 pt-3 p-section-1-style"><i>*Le nombre de crédit(s) « arbre(s) » bleus obtenu dépend de la distance parcourure, du type d’avion, du nombre de passagers...</i></p>
                    <h6 class="section-1-colored-cards-text h6-section-1 pb-3">Valable dans les zones de plantation bleues</h6>
                  </div>

                </div>
              </b-col>
              <b-col lg="6" xl="6">
                <div class="section-1-pink-tree shadow-sm">
                  <div class="section-1-header-pink text-center">
                    <h4 class="h4-section-1 pt-1 pb-1">Hébergement</h4>
                  </div>
                  <div class="text-center">
                    <img :src="require('@/assets/homepage/icon_2.png')" alt="" class="mt-3"/>
                    <p class="section-1-colored-cards-text mt-2 p-no-mb"><b>1 nuit en hébergement</b></p>
                    <h5 class="section-1-colored-cards-text h5-section-1">=</h5>
                    <img :src="require('@/assets/homepage/pink-card.png')" alt="" class=""/>
                    <p class="section-1-colored-cards-text pl-1 pr-1 pt-3 p-section-1-style"><i>Un crédit arbre rose obtenu par nuitée (hôtel, appartements ou autre). Nombre de nuits illimitées.</i></p>
                    <h6 class="section-1-colored-cards-text h6-section-1 pb-3">Valable dans les zones de plantation roses</h6>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col lg="6" xl="6" class="pt-4">
          <div class="text-align-right">
            <span>Annonce sponsorisée</span>
          </div>
          <div class="section-2-sponsorised mt-2 shadow">
            <div class="section-2-sponsorised-header text-center">
              <h3 class="h3-section-1-sponsorised pb-3 pt-3">Hôtel éco-responsable</h3>
            </div>
            <div class="sponsorised-hotel-name text-center">
              <h4 class="h4-desktop-homepage-section-2 pt-3">Hôtel Lagon attitude ****</h4>
              <h5 class="h5-desktop-homepage-section-2 pt-1">Île Maurice</h5>
            </div>
            <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100 pr-3 pl-3 pt-3 pb-3"/>
            <b-row class="pl-3 pr-3 mt-3 pb-3">
              <b-col lg="7" xl="7">
                <h5 class="h5-desktop-homepage-section-2">Mercede accepta lucris et obscuros.</h5>
                <p class="p-desktop-homepage-section-2 text-align-justify">Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.</p>
                <b-row>
                  <b-col lg="6" xl="6">
                    <img :src="require('@/assets/homepage/logo_hotel.png')" alt="" class="w-100"/>
                  </b-col>
                  <b-col lg="6" xl="6">
                    <img :src="require('@/assets/homepage/logo_label.png')" alt="" class="w-25"/>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="5" xl="5">
                <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100"/>
                <b-row>
                  <b-col lg="4" xl="4" class="mt-2">
                    <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100"/>
                  </b-col>
                  <b-col lg="4" xl="4" class="mt-2">
                    <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100"/>
                  </b-col>
                  <b-col lg="4" xl="4" class="mt-2">
                    <img :src="require('@/assets/fake-images/square.png')" alt="" class="w-100"/>
                  </b-col>
                </b-row>
                <div class="mt-2">
                  <router-link to="/">
                    <b-button block class="btn-sponsorised-desktop">
                      Découvrir l'hôtel
                    </b-button>
                  </router-link>
                </div>

              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "D-Homepage-Section-2"
}
</script>

<style scoped>
.h2-homepage-section-1{
  font-size: 14px;
  color: #28BA8D;
}

.section-1-paragraph{
  text-align: justify;
}

.section-1-btn{
  background-color: #28BA8D;
  color: white;
  font-weight: bold;
  border:none;
  border-radius: 32px;
}

.section-1-green-content{
  background-color: #28BA8D;
  color: white;
  border-radius: 16px;
}

.section-1-blue-tree, .section-1-pink-tree{
  background-color: white;
  height: 415px;
}

.section-1-colored-cards-text{
  color: #5F5F5F;
}

.section-1-header-pink{
  background-color:#FE7A9F;
}

.section-1-header-blue{
  background-color: #3DCDF5;
}

.h4-section-1{
  font-size: 20px;
  text-transform: uppercase;
  font-weight: normal;
}

.p-no-mb{
  margin: unset;
}

.h5-section-1{ font-size: 32px;}

.p-section-1-style{
  font-size: 12px;
}

.h6-section-1{
  font-size: 10px;
}

.section-1-align-right{ text-align: right;}

.section-2-sponsorised-header{
  background-color:#8ECB82;
  color: white;
}

.h3-section-1-sponsorised{ font-size: 16px;}

.h4-desktop-homepage-section-2{

}

.h5-desktop-homepage-section-2{
  font-size: 15px;
}

.p-desktop-homepage-section-2{
  font-size: 15px;
}

.btn-sponsorised-desktop{
  background-color: #8ECB82;
  color: white;
  border:none;
}

</style>