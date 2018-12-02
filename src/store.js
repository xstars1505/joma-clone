import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    toggleIsLoading(state, status) { state.isLoading = status; },
  },
  actions: {
    toggleIsLoadingss({ commit }, status) { commit('toggleIsLoading', status); },
  },
});
