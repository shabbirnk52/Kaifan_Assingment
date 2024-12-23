import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    tickets: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TICKETS(state, tickets) {
      state.tickets = tickets;
    },
  },
  actions: {
    loginUser({ commit }, userData) {
      // In a real app, this would be an API call
      commit("SET_USER", userData);
    },
    logoutUser({ commit }) {
      commit("SET_USER", null);
      localStorage.removeItem("user-token");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user,
  },
});
