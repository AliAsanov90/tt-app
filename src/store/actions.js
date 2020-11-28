export default {
  startNewGame: ({ commit, state }) => {
    if (!state.isGamePaused) commit('toggleGamePlay')
    if (state.isModalOpen) commit('toggleModal')

    commit('emptyObjectsArrays')
    commit('updateFallingInterval', true)

    commit('createObject')
    commit('createObject')

    commit('createObject', true)
  }
}
