<template>
  <div class="navbar-responsive-component fixed-top">
    <b-container fluid="true">
      <b-row>
        <b-col cols="3" sm="3" md="3">
          <div class="burger-responsive-navbar" @click="contentNavbar()">
            <font-awesome-icon v-if="this.contentStatus === false" :icon="['fa', 'bars']" />
            <font-awesome-icon v-if="this.contentStatus === true" :icon="['fa', 'times']" />
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
        <b-col cols="3" sm="3" md="3" class="text-align-right">
          <img :src="require('@/assets/flags/fr.png')" v-if="$store.state.locale == 'fr'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/uk.png')" v-else-if="$store.state.locale == 'en'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/es.png')" v-else-if="$store.state.locale == 'es'" class="img-locale-navbar-reponsive"/>
          <img :src="require('@/assets/flags/jp.png')" v-else-if="$store.state.locale == 'jp'" class="img-locale-navbar-reponsive"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="content-navbar-responsive" fluid="true" class="content-navbar-homepage-responsive">

    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar-Responsive",
  data: function() {
    return {
      contentStatus: false
    }
  },
  methods: {
    contentNavbar: function () {
      const section = document.getElementById('content-navbar-responsive')
      if (this.contentStatus === false) {
        section.style.display = 'block'
        this.contentStatus = true
      }else {
        section.style.display = 'none'
        this.contentStatus = false
      }

    }
  }
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
  cursor: pointer;
}

.img-locale-navbar-reponsive{
  border:0.5px solid black;
  width: 40px;
  margin-top: 22px;
  margin-right: 25px;
}

.content-navbar-homepage-responsive{
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>