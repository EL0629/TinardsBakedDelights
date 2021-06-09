import { LocalStorage, Loading, Dialog } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'
const state = {
    loggedIn: false
}

const mutations = {
    setloggedIn(state, value) {
        state.loggedIn = value
    }
}

const actions = {
    loginUser({}, payload) {
        Loading.show()
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                this.$router.push('/AdminForm').catch(err => { })
                Loading.hide()
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    logoutUser() {
        firebaseAuth.signOut(this.$router.push('/'))
    },
    updatePassword({}, payload) {
        Loading.show()
        var user = firebaseAuth.currentUser;
        var newPassword = payload.password;
        user.updatePassword(newPassword).then(function() {
            Loading.hide()
            Dialog.create({
                title: 'Success',
                message: 'Successfully Updated'
            })
        }).catch(error => {
            showErrorMessage(error.message)
        })
    },
    forgotPassword({}, payload) {
        Loading.show()
        firebaseAuth.sendPasswordResetEmail(payload.email)
            .then(response => {
                Loading.hide()
                Dialog.create({
                    title: 'Success',
                    message: 'Successfully Sent'
                })
            }).catch(error => {
                showErrorMessage(error.message)
            })
    },
    handleAuthStateChange({ commit }) {
        firebaseAuth.onAuthStateChanged(user => {
            Loading.hide()
            if (user) {
                LocalStorage.set('loggedIn', true)
                this.$router.push('/AdminForm').catch(err => {})
            } else {
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/LoginForm').catch(err => {})
            }
        })
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}