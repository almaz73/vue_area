import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    night: true
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    night({ commit }, val) {
      commit('set', { type: 'night', items: val })
    }
  }
})

export default store
