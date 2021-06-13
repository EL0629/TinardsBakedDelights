<template>
  <q-layout view="hHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated style="background-color: #FCE4EC; font-family: CenturyGothic;" height="60px" class="text-grey-10">
        <img src="../../public/img/tinards-logo.png" width="120" height="50" class="q-ma-sm q-ml-md" />

        <q-btn
          @click="logout"
          flat
          icon="account_circle"
          label="Logout"
          class="absolute-right"
        />
    </q-header>

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
    };
  },
  methods: {
    ...mapState("auth", ["loggedIn"]),
    ...mapActions("auth", ["logoutUser"]),
    openURL,
    logout() {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to logout?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.logoutUser()
      }).onOk(() => {
        this.logoutUser()
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
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