<template>
  <div class="navbar-responsive-component fixed-top">
    <b-container fluid="true">
      <b-row>
        <b-col cols="3" sm="3" md="3">
          <div class="burger-responsive-navbar">
            <font-awesome-icon :icon="['fa', 'bars']" />
          </div>
        </b-col>
        <b-col cols="6" sm="6" md="6">
          <div class="text-center">
            <router-link to="/">
              <img :src="require('@/assets/logo-gotreep.png')" alt="" class="navbar-responsive-logo">
            </router-link>
            <br>
            <span class="navbar-responsive-slogan">{{ $t('navbar.slogan') }}</span>
          </div>
        </b-col>
        <b-col cols="3" sm="3" md="3">
          <img :src="require('@/assets/flags/fr.png')" v-if="$store.state.locale == 'fr'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/uk.png')" v-else-if="$store.state.locale == 'en'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/es.png')" v-else-if="$store.state.locale == 'es'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/jp.png')" v-else-if="$store.state.locale == 'jp'" class="img-locale-navbar-reponsive"/>

        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar-Responsive"
}
</script>

<style scoped>
.navbar-responsive-component{
  background: white;
  -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  height: 70px;
  width: 100%;
}

.navbar-responsive-logo{
  padding-top: 5px;
  width:125px;
}

.navbar-responsive-slogan{
  font-size: 12px;
  margin-top: -20px;
}

.burger-responsive-navbar{
  font-size: 40px;
  color: #707070;
  padding-left: 15px;
  padding-top: 5px;
}

.img-locale-navbar-reponsive{
  border:0.5px solid black;
  width: 40px;
  margin-top: 22px;
}
</style>