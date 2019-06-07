import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: String,
    contact: Object
  },
  mutations: {
    saveUser(state, payload) {
      state.userName = payload.portals[0].account_name
    },
    saveContact(state, payload) {
      state.contact = payload
    }
  },
  getters: {

  }

})
