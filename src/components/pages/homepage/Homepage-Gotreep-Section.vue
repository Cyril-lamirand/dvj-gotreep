<template>
  <div class="homepage-gotreep-section">
    <div class="text-center">
      <img :src="require('@/assets/logo-gotreep.png')" alt="" class=""/>
      <p>Travel Greener*</p>
      <h2 class="h2-homepage-section-1 mt-4">Ensemble, décidons de voyager de manière plus vert...ueuse pour la planète.</h2>
    </div>
    <p class="section-1-paragraph mt-2">Voyager fait partie de nos vies mais ce mode de consommation est de plus en plus critiqué par son impact sur l’environnement. Faute d’une avancée majeure  qui permettrait un jour de voyager sans polluer, nous pouvons cependant agir, dès aujourd’hui, pour neutraliser le bilan carbone de chaque déplacement. Comment ? En choisissant Gotreep, le premier comparateur de voyages qui compense automatiquement chaque voyage — vol ou nuitée d’hôtel — par des plantations d’arbres bénéfiques pour le climat et la biodiversité.</p>
    <div class="text-center">
      <b-button class="btn btn-primary section-1-btn shadow mt-2 pl-4 pr-4">
        En savoir plus sur le comparateur gotreep
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage-Gotreep-Section"
}
</script>

<style scoped>
.h2-homepage-section-1{
  font-size: 14px;
  color: #28BA8D;
}

.section-1-paragraph{
  font-size: 13px;
  text-align: justify;
}

.section-1-btn{
  background-color: #28BA8D;
  color: white;
  font-weight: bold;
  border:none;
  border-radius: 32px;
}

</style>