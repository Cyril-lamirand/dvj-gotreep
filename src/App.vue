<template>
  <div id="app">
    <div class="desktop-navbar-content">
      <DNavbar/>
    </div>
    <div class="responsive-navbar-content">
      <RNavbar/>
    </div>
    <div class="global-website-content">
      <router-view/>
    </div>
    <div class="global-footer-content">
      <GFooter/>
    </div>
  </div>
</template>

<script>
import DNavbar from "@/components/desktop-design/desktop-layouts/D-Navbar"
import RNavbar from "@/components/responsive-design/responsive-layouts/R-Navbar"
import GFooter from "@/components/global-design/global-layouts/G-Footer"

export default {
  components: {
    GFooter,
    RNavbar,
    DNavbar
  }
}
</script>

<style>

body{ margin: unset; }

.global-website-content{ padding-top: 70px; }

@media screen and (min-width: 1200px) {
  .desktop-navbar-content{ display: block; }
  .responsive-navbar-content{ display: none; }
}

@media screen and (max-width: 1199.9px) {
  .responsive-navbar-content{ display: block; }
  .desktop-navbar-content{ display: none; }
}

.text-align-right{ text-align: right; }
.text-align-left{ text-align: left; }
.text-align-justify{ text-align: justify; }

a:hover{
  text-decoration: none !important;
}

.color-white{ color: white; }

</style>