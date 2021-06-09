<template>
    <q-page class="constrain-more q-pa-md" style="font-family: CenturyGothic">
        <div class="text-subtitle1 q-mb-sm text-weight-bold">
            Account Credentials
        </div>
        
        <div class="text-subtitle2 q-mb-xs">
            New Password
        </div>

        <modal-pass :password.sync="formData.password" ref="modalPassword" />

        <div class="text-subtitle2 q-mb-xs">
            ReType New Password
        </div>

        <modal-confirmpass
            :confirmpassword.sync="formData.confirmpassword"
            ref="modalConfirmPassword"
        />
        
        <div align="right">
            <q-btn
                outline
                rounded
                v-bind:disable="
                formData.password === '' ||
                    formData.password != formData.confirmpassword
                "
                label="Submit"
                style="min-width: 220px; min-height: 50px;"
                type="submit"
                class="bg-blue-8 text-white text-bold"
                @click.prevent="submitPassword()"
            />
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return{
            formData: {
                password: "",
                confirmpassword: ""
            },
        }
    },
    components: {
    "modal-pass": require("components/Account/Modals/ModalPassword.vue")
      .default,
    "modal-confirmpass": require("components/Account/Modals/ModalConfirmPassword.vue")
      .default
    },
    methods: {
        ...mapActions("auth", ["updatePassword"]),
        submitPassword() {
            this.updatePassword(this.formData);
            this.$emit("close");
        }
    }
}
</script>