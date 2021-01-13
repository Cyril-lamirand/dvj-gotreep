<template>
  <div class="navbar-component fixed-top">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="4" class="d-flex align-items-center h-100">
          <b-row>
            <div class="pl-1 pt-1 pb-1">
              <a href="">
                <img class="w-100" :src="require('@/assets/logo-gotreep.png')"/>
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
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
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
  name: "Navbar",
  /*
  mounted() {
    let a = document.getElementById('flag-target').parentNode
    a.removeAttribute('class')
    a.style.background = 'none'
    a.style.border = 'none'
  }
  */
  methods: {
    currentFlag: function(value) {
      const flag_en = require('@/assets/flags/uk.png')
      const flag_fr = require('@/assets/flags/fr.png')
      const flag_es = require('@/assets/flags/es.png')
      const flag_jp = require('@/assets/flags/jp.png')

      if (value === "en") {
        return flag_en
      }else if (value === "fr") {
        return flag_fr
      }else if (value === "es") {
        return flag_es
      }else if (value === "jp") {
        return flag_jp
      }
    }
  }
}

</script>

<style scoped>

.navbar-component{
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
  font-size: 12px;
  color:#5E5E5E;
}

.dropdown-navbar{
  width: 47px;
  margin-left: 3px;
  margin-right: 3px;
}



/* DESKTOP */


</style>