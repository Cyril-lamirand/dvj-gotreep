<template>
  <div class="navbar-component fixed-top">
    <!-- DESKTOP -->
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col lg="4" xl="4">
          <b-row class="h-100">
            <b-col lg="6" xl="6" class="d-flex justify-content-center align-items-center">
              <a href="">
                <img :src="require('@/assets/logo-gotreep.png')" class="logo-gotreep-desktop" alt=""/>
              </a>
            </b-col>
            <b-col lg="6" xl="6" class="d-flex align-items-center">
              <span class="slogan-desktop">{{ $t('navbar.slogan') }}</span>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4" xl="4">
          <b-row class="h-100">
            <b-col lg="3" xl="3" class="d-flex justify-content-center align-items-center">
              <a class="navbar-desktop-link" href="">{{ $t('navbar.fly') }}</a>
            </b-col>
            <b-col lg="4" xl="4" class="d-flex justify-content-center align-items-center">
              <a class="navbar-desktop-link" href="">{{ $t('navbar.accommodation') }}</a>
            </b-col>
            <b-col lg="5" xl="5" class="d-flex justify-content-center align-items-center">
              <a class="navbar-desktop-link" href="">{{ $t('navbar.tripidea') }}</a>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4" xl="4">
          <b-row class="h-100">
            <b-col lg="6" xl="6" class="d-flex justify-content-center align-items-center less-padding">
              <a class="navbar-desktop-link" href="">{{ $t('navbar.addetablishment') }}</a>
            </b-col>
            <b-col lg="4" xl="4" class="d-flex justify-content-center align-items-center less-padding">
              <a class="navbar-desktop-link" href="">{{ $t('navbar.contact') }}</a>
            </b-col>
            <b-col lg="2" xl="2" class="d-flex justify-content-center align-items-center">
              <b-dropdown right no-caret>
                <template #button-content>
                  <img id="flag-target" :src="require('@/assets/flags/fr.png')" width="20" />
                </template>
                <b-dropdown-item href="#" class="text-center">
                  <img :src="require('@/assets/flags/fr.png')" width="20"/>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="text-center">
                  <img :src="require('@/assets/flags/fr.png')" width="20"/>
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <!-- MOBILE -->
  </div>
</template>

<script>

export default {
  name: "Navbar",
  mounted() {
    let a = document.getElementById('flag-target').parentNode
    a.removeAttribute('class')
    a.style.background = 'none'
    a.style.border = 'none'
  }
}

</script>

<style scoped>

.navbar-component{
  width: 100%;
  height: 70px;
  background: white;
  -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
}

/* DESKTOP */

.logo-gotreep-desktop{ width: 128px; }

.slogan-desktop{ color: #5F5F5F; font-size: 16px; }

.navbar-desktop-link{
  font-size: 12px;
  color: #5F5F5F;
  text-transform: uppercase;
}

.less-padding{ padding-left: 5px !important; padding-right: 5px !important; }

.btn-dropdown{
  background-color: red !important;
}

button{
  background: none !important;
  border: none !important;
}

/* MOBILE */

</style>