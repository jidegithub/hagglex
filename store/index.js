export const state = () => ({
  user: null,
  accessToken: null
})

export const mutations = {
  changeUser(state, user) {
    state.user = user
  },
  changeAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  logout: (state) => {
    state.accessToken = null;
    state.user = null;
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
  isAuthenticated(state) {
    if (state.user.user && state.token)
      return true
  }
}