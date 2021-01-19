<template>
  <div class="homepage-view" id="homepage-view-id">
    <!-- DESKTOP -->
    <div class="homepage-desktop-components">
      <DHomepageSection1/>
      <DHomepageSection2/>
      <DHomepageSection3/>
    </div>
    <!-- RESPONSIVE -->
    <div class="homepage-responsive-components">
      <RHomepageSection1/>
      <RHomepageSection2/>
      <RHomepageSection3/>
      <RHomepageSection4/>
      <RHomepageSection5/>
    </div>
    <!-- GLOBAL -->
    <div class="homepage-global-component">
      <GHomepageEnd/>
    </div>
  </div>
</template>

<script>
import DHomepageSection1 from "@/components/desktop-design/desktop-pages/homepage/D-Homepage-Section-1"
import DHomepageSection2 from "@/components/desktop-design/desktop-pages/homepage/D-Homepage-Section-2"
import DHomepageSection3 from "@/components/desktop-design/desktop-pages/homepage/D-Homepage-Section-3"
import RHomepageSection1 from "@/components/responsive-design/responsive-pages/homepage/R-Homepage-Section-1"
import RHomepageSection2 from "@/components/responsive-design/responsive-pages/homepage/R-Homepage-Section-2"
import RHomepageSection3 from "@/components/responsive-design/responsive-pages/homepage/R-Homepage-Section-3"
import RHomepageSection4 from "@/components/responsive-design/responsive-pages/homepage/R-Homepage-Section-4"
import RHomepageSection5 from "@/components/responsive-design/responsive-pages/homepage/R-Homepage-Section-5"
import GHomepageEnd from "@/components/global-design/global-pages/homepage/G-Homepage-End"

export default {
  name: "HomepageView",
  components: {
    GHomepageEnd,
    RHomepageSection1,
    RHomepageSection2,
    RHomepageSection3,
    RHomepageSection4,
    RHomepageSection5,
    DHomepageSection1,
    DHomepageSection2,
    DHomepageSection3
  },
}
</script>

<style scoped>

.homepage-view{}

.homepage-desktop-components, .homepage-responsive-components{ display: none; }

@media screen and (min-width: 1200px) {
  .homepage-desktop-components{ display: block; }
  .homepage-responsive-components{ display: none; }
}

@media screen and (max-width: 1199.9px) {
  .homepage-responsive-components{ display: block; }
  .homepage-desktop-components{ display: none; }
}

</style>