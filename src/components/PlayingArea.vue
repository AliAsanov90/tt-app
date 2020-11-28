<template>
  <div class="playing-area">
    <FallingZone></FallingZone>
    <TeeterTotter></TeeterTotter>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FallingZone from './FallingZone.vue'
import TeeterTotter from './TeeterTotter.vue'

export default {
  name: 'PlayingArea',
  components: {
    FallingZone,
    TeeterTotter
  },

  methods: {
    ...mapActions([
      'startNewGame'
    ])
  },

  mounted () {
    this.startNewGame()
  }
}
</script>
