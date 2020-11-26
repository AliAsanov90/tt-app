export default {
  startNewGame: ({ commit, state }, payload) => {
    commit('createObject')
    commit('createObject')

    commit('createObject', true)
  }
}
