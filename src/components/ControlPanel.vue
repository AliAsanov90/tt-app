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
      <v-btn
        class="control-panel__button"
        color="blue-grey"
        x-large
        dark
        @click="toggleGamePlay"
      >
        <v-icon> {{ isGamePaused ? 'mdi-play' : 'mdi-pause' }} </v-icon>
      </v-btn>
      <v-btn
        class="control-panel__button"
        x-large
        dark
        @click="startNewGame"
      >
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
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
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import { SPACE_KEY } from '@/constants'
export default {
  name: 'ControlPanel',
  computed: {
    ...mapState([
      'isGamePaused'
    ]),

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
