<template>
  <div class="playing-area">
    <FallingZone></FallingZone>
    <TeeterTotter></TeeterTotter>
  </div>
</template>

<script>
import FallingZone from './FallingZone.vue'
import TeeterTotter from './TeeterTotter.vue'
export default {
  name: 'PlayingArea',
  components: {
    FallingZone,
    TeeterTotter
  }
}
</script>
