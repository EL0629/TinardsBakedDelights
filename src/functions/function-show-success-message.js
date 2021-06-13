import { Notify, Dialog, Loading } from 'quasar'

export function showSuccessMessage(successMessage) {
    Loading.hide()
    Notify.create({
        color: "positive",
        title: successMessage,
        message: "Successfully LoggedIn",
        position: "top-right",
        timeout: 2500,
        actions: [{ icon: "check", color: "white" }]
    })
}
