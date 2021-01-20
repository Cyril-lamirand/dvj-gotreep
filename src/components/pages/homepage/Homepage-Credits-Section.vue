<template>
  <div class="section-1-green-content pt-3 pb-3 pl-3 pr-3 mt-4 shadow">
    <div class="text-center">
      <h3>Vos Crédits Arbres</h3>
      <p><b>Gotreep a opté pour le Zéro Impact financier pour vous :</b></p>
      <p><b>L’achat et la plantation des arbres sont pris à notre charge</b> sans effet sur les tarifs négociés que nous vous proposons. Chaque crédit arbre obtenu correspond à un arbre à planter. Vous trouverez vos crédits dans votre compte gotreep.</p>
    </div>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" xl="6" class="mt-2 mb-2">
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
      <b-col cols="12" sm="12" md="12" lg="12" xl="6" class="mt-2 mb-2">
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
</template>

<script>
export default {
name: "Homepage-Credits-Section"
}
</script>

<style scoped>

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