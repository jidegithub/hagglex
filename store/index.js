import USER_SIGNUP from "~/gql/mutations/userSignup"
import USER_LOGIN from "~/gql/mutations/userLogin"
import USER_GET from "~/gql/queries/user"
// import USER_VERIFY from "~/gql/mutations/userVerify"

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  logout(state) {
    state.token = null;
    state.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}

export const actions = {
  async USER_SIGNUP({ commit }, creds) {
    const apollo = this.app.apolloProvider.defaultClient;

    try {
      let res = await apollo.mutate({
        mutation: USER_SIGNUP,
        variables: {
          email: creds.email,
          password: creds.password,
          username: creds.username,
          phonenumber: creds.phonenumber,
          referralCode: creds.referralCode,
          PhoneNumberDetailsInput: {
            phoneNumber: creds.phonenumber,
            callingCode: "234",
            flag: "flag"
          }
        }
      });
    } catch (error) {
      console.log("Sign up error", error);
      throw error;
      return false;
    }
    return res.data
  },

  async USER_LOGIN({ commit, dispatch }, creds) {
    const apollo = this.app.apolloProvider.defaultClient;

    try {
      var res = await apollo.mutate({
        mutation: USER_LOGIN,
        variables: {
          email: creds.email,
          password: creds.password,
        }
      });
    } catch (e) {
      console.log("Login error", e);
      return false;
    }

    // Set tokens so Apollo is authenticated for future requests. Save to store for refresh token use later.
    const auth = res.data.login;
    commit("SET_TOKEN", auth.token);
    await this.$apolloHelpers.onLogin(auth.token);

    // Now get and save user to store
    const user = await dispatch("USER_GET", auth.user);
    // console.log(user)
    commit("SET_USER", user);

    return user;
  },

  async USER_GET({ commit }, user) {
    const apollo = this.app.apolloProvider.defaultClient;

    try {
      var res = await apollo.query({
        query: USER_GET,
        variables: {
          user: user
        }
      });
    } catch (e) {
      console.log("User get error", e);
      throw e;
    }

    return res.data.user;
  },

  async USER_LOGOUT({ commit }) {
    await this.$apolloHelpers.onLogout();
    commit("SET_TOKENS", {});
    commit("SET_USER", {});
  },

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