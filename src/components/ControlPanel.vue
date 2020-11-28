<template>
  <div class="control-panel">
    <div class="control-panel__objects-records">
      <p>Total weight:
        <span>{{ totalPlacedObjectsWeight }}</span>
      </p>
      <p>Momentum:
        <span>{{ totalPlacedObjectsMomentum }}</span>
      </p>
    </div>
    <div class="control-panel__buttons">
      <button
        @click="toggleGamePlay"
      >
        Play
      </button>
      <button
        @click="startNewGame"
      >
        Reset
      </button>
    </div>
    <div class="control-panel__objects-records">
      <p>Total weight:
        <span>{{ totalRandomlyPlacedObjectsWeight }}</span>
      </p>
      <p>Momentum:
        <span>{{ totalRandomlyPlacedObjectsMomentum }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { SPACE_KEY } from '@/constants'
export default {
  name: 'ControlPanel',
  computed: {
    ...mapGetters([
      'totalPlacedObjectsWeight',
      'totalRandomlyPlacedObjectsWeight',
      'totalPlacedObjectsMomentum',
      'totalRandomlyPlacedObjectsMomentum'
    ])
  },
  methods: {
    ...mapActions([
      'startNewGame'
    ]),

    ...mapMutations([
      'toggleGamePlay'
    ]),

    handleSpaceClick (event) {
      event.preventDefault()

      if (event.keyCode === SPACE_KEY) this.toggleGamePlay()
    }
  },
  created () {
    window.addEventListener('keydown', this.handleSpaceClick)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleSpaceClick)
  }
}
</script>
