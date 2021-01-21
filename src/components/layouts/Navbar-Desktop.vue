<template>
  <div class="navbar-desktop-component fixed-top">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="4" class="d-flex align-items-center h-100">
          <b-row>
            <div class="pl-1 pt-1 pb-1">
              <a href="">
                <img class="logo-navbar-gotreep" :src="require('@/assets/logo-gotreep.png')"/>
              </a>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <span class="pl-3">{{ $t('navbar.slogan') }}</span>
            </div>
          </b-row>
        </b-col>
        <b-col cols="8" class="d-flex justify-content-center align-items-center h-100">
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.fly') }}</span>
          </router-link>
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.accommodation') }}</span>
          </router-link>
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.tripidea') }}</span>
          </router-link>
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.gotreep') }}</span>
          </router-link>
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.addetablishment') }}</span>
          </router-link>
          <router-link to="/link" class="router-link">
            <span>{{ $t('navbar.account') }}</span>
          </router-link>

          <b-dropdown id="dropdown-locales" right :text="$store.state.locale.toUpperCase()" class="dropdown-navbar" no-caret>
            <b-dropdown-item class="text-center" href="/en" @click="currentLocale('en')">
              <img :src="require('@/assets/flags/uk.png')" class="flag-local-dropdown">
            </b-dropdown-item>
            <b-dropdown-item class="text-center" href="/fr" @click="currentLocale('fr')">
              <img :src="require('@/assets/flags/fr.png')" class="flag-local-dropdown">
            </b-dropdown-item>
            <b-dropdown-item class="text-center" href="/es" @click="currentLocale('es')">
              <img :src="require('@/assets/flags/es.png')" class="flag-local-dropdown">
            </b-dropdown-item>
            <b-dropdown-item class="text-center" href="/jp" @click="currentLocale('jp')">
              <img :src="require('@/assets/flags/jp.png')" class="flag-local-dropdown">
            </b-dropdown-item>
          </b-dropdown>

          <b-dropdown id="dropdown-devise" right text="€" class="dropdown-navbar" no-caret>
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar-Desktop",
  methods: {
    currentLocale: function(value) { return this.$store.state.locale = value }
  },
  mounted: function() {
    this.$store.state.locale = this.$route.params.lang
  }
}

</script>

<style scoped>

.navbar-desktop-component{
  background: white;
  -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  height: 70px;
  width: 100vw;
}
.router-link{
  padding-left: 5px;
  padding-right: 5px;
  text-transform: uppercase;
  font-size: 11px;
  color:#5E5E5E;
}
.dropdown-navbar{
  width: 47px;
  margin-left: 3px;
  margin-right: 3px;
}
.flag-local-dropdown{
  width: 25px;
  height: 18px;
  border:1px solid black;
}
b-dropdown-item{
  width: 20px;
}
.logo-navbar-gotreep{
  width: 120px;
  height: 37px;

}
@media screen and (min-width: 992.9px) and (max-width: 1199.9px) {
  .router-link{ font-size: 9px; }
}
</style>