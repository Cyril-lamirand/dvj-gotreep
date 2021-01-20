<template>
  <div id="app">
    <div class="desktop-navbar-content">
      <NavbarDesktop/>
    </div>
    <div class="responsive-navbar-content">
      <NavbarResponsive/>
    </div>
    <div class="global-website-content">
      <router-view/>
    </div>
    <div class="global-footer-content">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/layouts/Footer"
import NavbarDesktop from "@/components/layouts/Navbar-Desktop"
import NavbarResponsive from "@/components/layouts/Navbar-Responsive"

export default {
  components: {
    NavbarResponsive,
    NavbarDesktop,
    Footer
  }
}
</script>

<style>

body{ margin: unset; }

.global-website-content{ padding-top: 70px; }

@media screen and (min-width: 992px) {
  .desktop-navbar-content{ display: block; }
  .responsive-navbar-content{ display: none; }
}

@media screen and (max-width: 991.9px) {
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