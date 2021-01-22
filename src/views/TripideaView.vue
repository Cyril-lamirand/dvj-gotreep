<template>
  <div class="tripidea-view">
    <TripideaHeaderSection/>
    <b-container>
      <TripideaInformationsSection/>
    </b-container>
  </div>
</template>

<script>
import TripideaHeaderSection from "@/components/pages/tripidea/Tripidea-Header-Section"
import TripideaInformationsSection from "@/components/pages/tripidea/Tripidea-Informations-Section"

export default {
  name: "TripideaView",
  components: {
    TripideaInformationsSection,
    TripideaHeaderSection
  }
}
</script>

<style scoped>

</style>