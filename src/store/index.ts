import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => {
    return {
      user: {avatar: '', name: '桉树叶'}
    }
  },
  mutations: {
    setUser(state, user) {
      Object.assign(state.user, user)
    }
  },
  actions: {},
  modules: {}
})
