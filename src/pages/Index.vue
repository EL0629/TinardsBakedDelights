<template>
  <q-layout view="lHh Lpr lFf">
    <banner-section/>

    <about-section/>
    
    <product-section/>
    
    <topfooter-section/>
    
    <footer-section/>

  </q-layout>
</template>

<script>
export default {
  components: {
    "about-section": require("components/WebsiteForm/Tools/AboutSection.vue").default,
    "product-section": require("components/WebsiteForm/Tools/ProductSection.vue").default,
    "banner-section": require("components/WebsiteForm/Tools/BannerSection.vue").default,
    "topfooter-section": require("components/WebsiteForm/Tools/TopFooterSection.vue").default,
    "footer-section": require("components/WebsiteForm/Tools/FooterSection.vue").default
  }
}
</script>