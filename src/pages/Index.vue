<template>
  <q-layout view="lHh Lpr lFf">
    <div
      v-bind:class="{
        main: $q.platform.is.desktop,
        mobile_main: $q.platform.is.ipad || $q.platform.is.mobile
      }"
      class="full-height"
    >
      <q-header class="header q-py-sm" style="background-color: #FCE4EC;">
        <img src="../../public/img/tinards-logo.png" width="120" height="50" class="q-p-lg q-ml-md q-mt-xs" />
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"
          ><span class="navicon"></span
        ></label>
        <ul class="menu">
          <li><a href="#work">Our Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#about-page">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </q-header>

      <section>
        <div
          class="full-height full-width flex flex-center"
          style="z-index:0; height: 100vh !important;"
        >
          <div class="text-h4 q-pa-md" style="color: #1A1A1A;">
            <img
              src="../../public/img/TinardsLogoRemoveBg.png"
              height="315px"
              width="315px"
              class="q-p-xs q-ml-sm"
            />
            Tinard’s Baked Delights is a variety of delightful treats made
            entirely from scratch using, simple, natural ingredients.
          </div>
        </div>
      </section>
    </div>

    <div style="background-color:#33495e" id="about-page">
      <div
        style="background-color:#FCE4EC; color: #54595F"
        class="q-pa-md text-center text-weight-bolder text-h4"
      >
        About
      </div>
      <div
        class="text-body2 q-pa-md about-text"
        style="background-color: #FFFBE8"
      >
        <div class="text-body2 text-center">
          Welcome to Tinard’s Baked Delights!!
        </div>
        <q-space class="q-mt-md q-mb-md" />
        We are committed to using fresh, high end and local ingredients. The
        shop boasts a beautiful, light filled cafe where you can enjoy a
        croissant warm from the oven, or you can take your treats to our patio
        and enjoy the outdoors with your dessert both day and night.
        <q-space class="q-mt-md q-mb-md" />
        Here at the shop we believe in small batch baking and providing top
        quality sweets and pastries with no shortcuts and our open kitchen
        concept allows visitors to watch our staff at work. Whether piping away
        on a tray of freshly baked cupcakes, or mixing up a homemade batch of
        cookies, the shop is both a delight for the young and old. We also have
        vegan/gluten free options on our menu!
        <q-space class="q-mt-md q-mb-md" />
        Our love and passion for baking is reflected in our collection.
        <q-space class="q-mt-md q-mb-md" />
        We personally choose each and every piece, examine it and then decide if
        it is good enough to represent Tinard’s Baked Delights.
        <q-space class="q-mt-md q-mb-md" />
        We always ensure the fashion pieces we stock is the most stylish, high
        quality, affordable and eye-catching to make sure it stand out from the
        crowd.
        <q-space class="q-mt-md q-mb-md" />
        Thankyou to each and every soul out there who chooses to purchase from
        us, you are making our dreams come true one cake at a time.
        <q-space class="q-mt-md q-mb-md" />
        So whether a birthday, a dinner party, a wedding or shower, let us help
        you cater your next special event!
      </div>
    </div>
    <div style="background-color:#F3D6E2" id="product-page">
      <div class="row q-pa-md">
        <div
          class="text-h4 text-center text-weight-bolder q-py-sm q-my-md full-width"
          style="border-top:3px solid #ffffff;border-bottom: 3px solid #ffffff; color: #54595F;"
        >
          Our Products
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Chocobutternut Bittes.jpg"
                    height="295px"
                    width="280px"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Choco Butternut Bites
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 130.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" style="border-radius: 20px;" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Cookies.jpg"
                    height="295px"
                    width="280px"
                    style="border-radius: 20px;"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Cookies
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 75.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Crinkles.jpg"
                    height="295px"
                    width="280px"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Chocolate Crinkles
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 75.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Caramel Bars with Almonds.jpg"
                    height="295px"
                    width="280px"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Caramel Bars With Almonds
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 130.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Pork Floss Buns.jpg"
                    height="295px"
                    width="280px"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Pork Floss Buns (per piece)
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 35.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img
                    src="../../public/img/Products/Baked Sushi.jpg"
                    height="295px"
                    width="280px"
                  />
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">
                  Baked Sushi (5x7 tub)
                </div>
                <div class="text-h6 text-center text-pink q-pa-md">
                  &#8369; 130.00
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div id="contact_us">
      <div style="background-color: #FFF7DA !important;">
        <div class="column q-pa-md">
          <div
            class="text-h5 col-12 text-center q-pt-md q-pb-md text-weight-bold"
            style="color: #54595F;"
          >
            Tinards Baked Delights
            <div
              class="text-h5 text-center q-pt-md q-pt-md q-pb-md text-weight-bold"
              style="color: #54595F;"
            >
              We have a variety of delightful treats!!
            </div>
          </div>
          <div
            class="text-h5 col-12 text-center q-pt-md q-pb-md text-weight-bold"
            style="color: #54595F;"
          >
            Visit Our Store
            <div
              class="text-h6 text-center q-pt-md q-pb-md text-weight-bold"
              style="color: #54595F;"
            >
              Cabuyao, Calabarzon, Philippines 4025 Cabuyao, Philippines
            </div>
            <div
              class="text-h5 text-center q-pt-md text-weight-bold"
              style="color: #54595F;"
            >
              Opening Hours
            </div>
            <div
              class="text-h6 text-center text-weight-bold"
              style="color: #54595F;"
            >
              Monday - Friday 8:00AM - 5:00PM
            </div>
            <div
              class="text-h6 text-center text-weight-bold"
              style="color: #54595F;"
            >
              Saturday - Sunday 9:00AM - 5:00PM
            </div>
          </div>

          <div
            class="text-h5 col-12 text-center q-pt-md q-pt-md q-pb-md text-weight-bold"
            style="color: #54595F;"
          >
            Contact Us
            <div class="q-pa-md q-gutter-md">
              <q-btn
                target="_blank"
                round
                type="a"
                href="https://www.facebook.com/"
                style="background-color: #F7B8B2; color: #ffffff;"
                icon="fab fa-facebook-f"
              />
              <q-btn
                target="_blank"
                round
                type="a"
                href="https://twitter.com/"
                style="background-color: #F7B8B2; color: #ffffff;"
                icon="fab fa-twitter"
              />
              <q-btn
                round
                type="a"
                href="http://instagram.com/"
                style="background-color: #F7B8B2; color: #ffffff;"
                icon="fab fa-instagram"
              />
            </div>
            <div
              class="text-body2 text-center text-weight-bold"
              style="color: #54595F;"
            >
              tinardsbakeddelights@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-toolbar
      class="flex flex-center text-center"
      style="background-color: #FFFBE8;"
      id="id_contact_me"
    >
      <div class="q-pa-sm q-gutter-sm">
        <div class="text-subtitle2" style="color: #1A1A1A;">
          &copy; All Right Resevered By TinardsBakedDelights
        </div>
      </div>
    </q-toolbar>
  </q-layout>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      name: "",
      email: "",
      message: "",
      selected_tab: "t_0",

      //Array navigation Bar
      topnavs: [
        {
          label: "Home",
          icon: "home",
          click: "scrollToElement('id_about_me')"
        },
        {
          label: "About",
          icon: "fact_check",
          click: "scrollToElement('id_about_me')"
        },
        {
          label: "Shop",
          icon: "shopping_cart"
        },
        {
          label: "Contact Us",
          icon: "call"
        }
      ]
    };
  }
};
</script>

<style>
.main {
  background: url(../../public/img/Banner.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}
.mobile_main {
  background: url(../../public/img/Banner.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}
.my-card {
  width: 100%;
  max-width: 800px;
  border: none;
  border-radius: 0px;
}
.project_link:hover {
  text-decoration: underline !important;
}
.sketch_desktop {
  width: 450px;
  height: 620px;
  border: 20px solid #30313b;
}
.sketch_mobile {
  width: 100%;
  height: 100% !important;
  border: 20px solid #30313b;
}

.custom_tab {
  width: 130px;
}
body {
  overflow-x: hidden;
}
section {
  position: relative;
}
section > * {
  z-index: 9;
  position: relative;
  top: 0;
}
section > canvas {
  z-index: 1;
  position: absolute;
  left: 0;
}
</style>
