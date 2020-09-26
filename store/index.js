export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  changeUser(state, user) {
    state.user = user
  },
  changeAccessToken(state, token) {
    state.token = token;
    localStorage.setItem('token', state.token)
    // this.$apolloHelpers.onLogin(state.token);
  },
  logout(state) {
    state.token = null;
    state.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}

export const actions = {
  async logout({ commit }) {
    await this.$apolloHelpers.onLogout();
    commit('logout');
    this.$router.push('/');
  }
}

export const getters = {
  currentUser(state) {
    return state.user;
  }
}