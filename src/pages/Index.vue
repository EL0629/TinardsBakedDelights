<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header q-py-sm" style="background-color: #FCE4EC;">
      <img src="../../public/img/tinards-logo.png" width="120" height="50" class="q-p-lg q-ml-md q-mt-xs" />
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact_us">Contact</a></li>
        <li><a href="#login-form">Contact</a></li>
      </ul>
    </q-header>

    <banner-section/>

    <div style="background-color:#33495e" id="about">
      <div style="background-color:#FCE4EC; color: #54595F" class="q-pa-md text-center text-weight-bolder text-h4">
        About
      </div>
      <div class="text-body2 q-pa-md about-text" style="background-color: #FFFBE8; font-family: CenturyGothic">
        <div class="text-body2 text-center">Welcome to Tinard’s Baked Delights!!</div>
        <q-space class="q-mt-md q-mb-md"/>
        We are committed to using fresh, high end and local ingredients. The shop boasts a beautiful, light filled cafe where you can enjoy a 
        croissant warm from the oven, or you can take your treats to our patio and enjoy the outdoors with your dessert both day and night.
        <q-space class="q-mt-md q-mb-md"/>
        Here at the shop we believe in small batch baking and providing top quality sweets and pastries with no shortcuts and our open kitchen 
        concept allows visitors to watch our staff at work. Whether piping away on a tray of freshly baked cupcakes, or mixing up a homemade batch of 
        cookies, the shop is both a delight for the young and old. We also have vegan/gluten free options on our menu!
        <q-space class="q-mt-md q-mb-md"/>
        Our love and passion for baking is reflected in our collection.
        <q-space class="q-mt-md q-mb-md"/>
        We personally choose each and every piece, examine it and then decide if it is good enough to represent Tinard’s Baked Delights.
        <q-space class="q-mt-md q-mb-md"/>
        We always ensure the fashion pieces we stock is the most stylish, high quality, affordable and eye-catching to make sure it stand out from the crowd.
        <q-space class="q-mt-md q-mb-md"/>
        Thankyou to each and every soul out there who chooses to purchase from us, you are making our dreams come true one cake at a time.
        <q-space class="q-mt-md q-mb-md"/>
        So whether a birthday, a dinner party, a wedding or shower, let us help you cater your next special event!
      </div>
    </div>
    <div style="background-color:#F3D6E2" id="shop">
      <div class="row q-pa-md">
        <div class="text-h4 text-center text-weight-bolder q-py-sm q-my-md full-width"
             style="border-top:3px solid #ffffff;border-bottom: 3px solid #ffffff; color: #54595F;">Our Products
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Chocobutternut Bittes.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Choco Butternut Bites</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 130.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Cookies.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Cookies</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 75.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Crinkles.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Chocolate Crinkles</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 75.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Caramel Bars with Almonds.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Caramel Bars With Almonds</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 130.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Pork Floss Buns.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Pork Floss Buns (per piece)</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 35.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-card-section>
                <div class="class">
                  <img src="../../public/img/Products/Baked Sushi.jpg" height="295px" width="280px"/>
                </div>
                <div class="text-h5 text-center text-pink q-pt-md q-pb-xs">Baked Sushi (5x7 tub)</div>
                <div class="text-h6 text-center text-pink q-pa-md">&#8369; 130.00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    
    <topfooter-section/>
    
    <footer-section/>

  </q-layout>
</template>

<script>
export default {
  components: {
    "banner-section": require("components/WebsiteForm/Tools/BannerSection.vue").default,
    "topfooter-section": require("components/WebsiteForm/Tools/TopFooterSection.vue").default,
    "footer-section": require("components/WebsiteForm/Tools/FooterSection.vue").default
  }
}
</script>