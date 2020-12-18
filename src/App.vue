<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style>

body{ margin: unset; }

</style>
<script>
import Navbar from "@/components/layouts/Navbar"

export default {
  components: {Navbar}
}
</script>