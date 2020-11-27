export default {
  startNewGame: ({ commit, state }, payload) => {
    commit('updateFallingInterval', true)

    commit('createObject')
    commit('createObject')

    commit('createObject', true)
  }
}
