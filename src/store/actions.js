export default {
  startNewGame: ({ commit, state }) => {
    if (!state.isGamePaused) commit('toggleGamePlay')

    commit('emptyObjectsArrays')
    commit('updateFallingInterval', true)

    commit('createObject')
    commit('createObject')

    commit('createObject', true)
  }
}
