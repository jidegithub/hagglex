export const state = () => ({
  user: ""
})

export const mutations = {
  changeUser(state, user){
    state.user = user
  },
}

export const getters = {
  userData(state) {
    return state.user;
  }
}