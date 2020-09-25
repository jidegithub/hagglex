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
    localStorage.setItem('accessToken', state.accessToken)
    this.$apolloHelpers.onLogin(state.accessToken);
  },
  logout(state) {
    state.accessToken = null;
    state.user = null;
    state.isAuthenticated = false;
  },
  setAuth(state, status) {
    state.isAuthenticated = status;
    localStorage.setItem('Authenticated', state.isAuthenticated)
  }
}

export const actions = {
  fetchAccessToken({ commit }) {
    commit('changeAccessToken', localStorage.getItem('accessToken'));
  },
  logout({ commit }) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('Authenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    commit('logout');
    this.$router.push('/');
  },
  // async USER_GET({ commit }, email) {
  //   const apollo = this.app.apolloProvider.defaultClient;

  //   try {
  //     var res = await apollo.query({
  //       query: USER_GET,
  //       variables: {
  //         email: email
  //       }
  //     });
  //   } catch (e) {
  //     console.log("User get error", e);
  //     throw e;
  //   }

  //   return res.data.user;
  // },
}

export const getters = {
  userData(state) {
    return state.user;
  },
  Authenticated(state) {
    return state.isAuthenticated
  }
}