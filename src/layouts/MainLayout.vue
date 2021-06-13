<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="text-grey-10"
      style="background-color: #FCE4EC;"
      bordered
    >   
      <img
        class="q-ma-sm small-screen-only img-breakpoint"
        height="50"
        src="../../public/img/tinards-logo.png"
        width="120"
      />
        <q-toolbar>
          <img
            class="q-ma-sm large-screen-only"
            height="50"
            src="../../public/img/tinards-logo.png"
            width="130"
          />
          <q-space/>
          <q-tabs
            v-model="selected_tab"
            style="background-color: #FCE4EC;"
            class="text-grey-10 large-screen-only text-app"
            active-color="pink"
            indicator-color="transparent"
            
          >
            <q-tab
              @click="scrollToElement('id_home')"
              class="text-capitalize"
              style="width: 120px;"
              label="Home"
            />
            <q-tab
              @click="scrollToElement('id_about')"
              class="text-capitalize"
              style="width: 120px;"
              label="About"
            />
            <q-tab
              @click="scrollToElement('id_shop')"
              class="text-capitalize"
              style="width: 120px;"
              label="Shop"
            />
            <q-tab
              @click="scrollToElement('id_contact')"
              class="text-capitalize"
              style="width: 120px;"
              label="Contact Us"
            />
            <q-route-tab
              to="/LoginForm"
              class="text-capitalize"
              style="width: 120px;"
              label="Login"
            />
          </q-tabs>
        </q-toolbar>
    </q-header>

    <q-footer
      class="bg-white small-screen-only"
      bordered
    >
      <q-tabs
        style="background-color: #FCE4EC;"
        class="text-grey-10"
        active-color="pink"
        indicator-color="transparent"
        v-model="selected_tab"
      >
        <q-tab
          icon="eva-home-outline"
          @click="scrollToElement('id_home')"
        />
        <q-tab
          icon="eva-info-outline"
          @click="scrollToElement('id_about')"
        />
        <q-tab
          icon="eva-shopping-cart-outline"
          @click="scrollToElement('id_shop')"
        />
        <q-tab
          icon="eva-phone-outline"
          @click="scrollToElement('id_contact')"
        />
        <q-route-tab
          icon="account_circle"
          to="/LoginForm"
        />
      </q-tabs>
    </q-footer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {scroll} from 'quasar'
const {getScrollTarget, setScrollPosition} = scroll
export default {
  name: 'MainLayout',
  data() {
    return {
      selected_tab: 't_0',
    }
  },
  methods: {
    scrollToElement(id) {
        let el = document.getElementById(id)
        const target = getScrollTarget(el)
        const offset = el.offsetTop
        const duration = 800
        setScrollPosition(target, offset, duration)
    }
  },
}
</script>

<style lang="sass">
  .q-header
    @media (max-width: $breakpoint-xs-max)
      .img-breakpoint
        display: block
        margin-left: auto
        margin-right: auto
        width: 35%
      .q-toolbar
        display: none
  .text-app
    .q-tab__label
      font-size: 18px
</style>
