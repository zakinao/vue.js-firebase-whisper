import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyC4Rp938kTCx5OuRBMOWk8zkZlqDOL-7hw",
  authDomain: "whisperer-f3717.firebaseapp.com",
  projectId: "whisperer-f3717",
  storageBucket: "whisperer-f3717.appspot.com",
  messagingSenderId: "345127776256",
  appId: "1:345127776256:web:7c4ee40004cb931619a8e5",
  measurementId: "G-F9EZ536RM6"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
