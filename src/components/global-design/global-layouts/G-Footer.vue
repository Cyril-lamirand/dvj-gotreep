<template>
  <div class="global-footer-component mt-5">
    <b-container class="h-100">
      <b-row class="h-100 d-flex align-items-center">
        <b-col cols="6" sm="6" md="6" lg="6" xl="6" class="text-align-left">
          <p class="style-text-footer">GOTREEP © 2021</p>
        </b-col>
        <b-col cols="6" sm="6" md="6" lg="6" xl="6" class="text-align-right">
          <router-link to="/" class="style-text-footer">
            Mentions Légales
          </router-link>
          <router-link to="/" class="style-text-footer pl-3">
            CGU
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "G-Footer"
}
</script>

<style scoped>

.global-footer-component{
  height: 50px;
  background-color: #F7F7F7;
}

.style-text-footer{
  margin: unset;
  font-size: 12px;
  color: #707070;
}

</style>