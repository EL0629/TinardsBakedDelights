<template>
  <q-layout view="hHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated style="background-color: #FCE4EC;">
      <q-toolbar class="mainmenuheader" height="60px">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <img src="../../public/img/tinards-logo.png" width="140" height="40" class="q-p-md q-ml-sm" />

        <q-btn
          @click="logoutUser"
          flat
          icon="account_circle"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :width="300"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <form>
          <q-item-label header>Tinards Baked Delights</q-item-label>
        </form>
        <q-separator />

        <q-item
          v-for="nav in topnavs"
          :key="nav.label"
          :to="nav.to"
          active-class="text-green-6"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,

      //Array navigation Bar
      topnavs: [
        {
          label: "Dashboard",
          icon: "home",
        },
        {
          label: "Account",
          icon: "manage_accounts",
        },
        {
          label: "Products",
          icon: "inventory_2"
        }
      ],
    };
  },
  methods: {
    ...mapState("auth", ["loggedIn"]),
    ...mapActions("auth", ["logoutUser"]),
    openURL
  }
};
</script>

<style lang="stylus">
.footer-bottom {
  height: 40px;
}

.footer-bottom p {
  color: #ffffff;
  text-align: center;
  padding: 10px 0px;
  height: 40px;
  margin: 0%;
}

.btn_account {
  background: #f6bb28;
  color: #ffffff;
}

.q-drawer .q-item__label {
  font-size: 18px;
  color: #333333;
}

.q-drawer .q-item {
  height: 60px;
  padding: 0px 20px;
}

.mainmenuheader {
  height: 75px;
}

.q-item__section--side > .q-icon {
  font-size: 28px;
}

.q-btn .q-icon, .q-btn .q-spinner {
  font-size: 34px;
}

.q-btn--flat {
  font-size: 18px;
}
</style>