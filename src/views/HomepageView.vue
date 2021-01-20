<template>
  <div class="homepage-view" id="homepage-view-id">
    <div class="homepage-desktop-components">
      <HomepageHeaderDesktop/>
      <b-container>
        <b-row>
          <b-col lg="6" xl="6">
            <div class="mt-4">
              <HomepageGotreepSection/>
            </div>
            <HomepageCreditsSection/>
          </b-col>
          <b-col lg="6" xl="6">
            <div class="mt-5">
              <HomepageSponsorisedSection/>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <HomepageMapDesktop/>
    </div>
    <div class="homepage-responsive-components">
      <HomepageHeaderResponsive/>
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="12">
            <HomepageGotreepSection/>
          </b-col>
          <b-col cols="12" sm="12" md="12">
            <HomepageSponsorisedSection/>
          </b-col>
          <b-col cols="12" sm="12" md="12">
            <HomepageCreditsSection/>
          </b-col>
        </b-row>
      </b-container>
      <HomepageMapResponsive/>
    </div>
    <HomepageFooterSection/>
  </div>
</template>

<script>
import HomepageHeaderDesktop from "@/components/pages/homepage/Homepage-Header-Desktop"
import HomepageGotreepSection from "@/components/pages/homepage/Homepage-Gotreep-Section";
import HomepageSponsorisedSection from "@/components/pages/homepage/Homepage-Sponsorised-Section";
import HomepageCreditsSection from "@/components/pages/homepage/Homepage-Credits-Section";
import HomepageFooterSection from "@/components/pages/homepage/Homepage-Footer-Section";
import HomepageHeaderResponsive from "@/components/pages/homepage/Homepage-Header-Responsive";
import HomepageMapDesktop from "@/components/pages/homepage/Homepage-Map-Desktop";
import HomepageMapResponsive from "@/components/pages/homepage/Homepage-Map-Responsive";

export default {
  name: "HomepageView",
  components: {
    HomepageMapResponsive,
    HomepageMapDesktop,
    HomepageHeaderResponsive,
    HomepageFooterSection,
    HomepageCreditsSection,
    HomepageSponsorisedSection,
    HomepageGotreepSection,
    HomepageHeaderDesktop,
  },
}
</script>

<style scoped>

.homepage-view{}

.homepage-responsive-components{ display: none;}

@media screen and (min-width: 992px) {
  .homepage-desktop-components{ display: block; }
  .homepage-responsive-components{ display: none; }
}

@media screen and (max-width: 991.98px) {
  .homepage-responsive-components{ display: block; }
  .homepage-desktop-components{ display: none; }
}

</style>