export const state = () => ({
  user: null,
  accessToken: null,
  isAuthenticated: false
})

export const mutations = {
  changeUser(state, user) {
    state.user = user
  },
  changeAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  logout(state) {
    state.accessToken = null;
    state.user = null;
    state.isAuthenticated = false;
  },
  setAuth(state, status) {
    state.isAuthenticated = status;
  }
}

export const actions = {
  fetchAccessToken({ commit }) {
    commit('changeAccessToken', localStorage.getItem('accessToken'));
  },
  logout({ commit }) {
    localStorage.removeItem('accessToken');
    commit('logout');
    this.$router.push('/');
  }
}

export const getters = {
  userData(state) {
    return state.user;
  },
  Authenticated(state) {
    return state.isAuthenticated
  }
}