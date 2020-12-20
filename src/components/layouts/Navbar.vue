<template>
  <div class="navbar-component fixed-top">

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
  background: white;
  -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.5);
}

/* DESKTOP */


</style>