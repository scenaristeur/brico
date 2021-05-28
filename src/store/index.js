import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import brico from './modules/brico'

Vue.use(Vuex)

export default new Vuex.Store({
  //plugins: [IdbPlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { solid, brico
  }
})
