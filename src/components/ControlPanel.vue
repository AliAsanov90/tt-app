<template>
  <div class="control-panel">
    <div class="control-panel__objects-records">
      <p>Total weight:
        <span>{{ totalPlacedObjectsWeight }}</span>
      </p>
      <p>Momentum:
        <span>0</span>
      </p>
    </div>
    <div class="control-panel__buttons">
      <button>Play</button>
      <button>Reset</button>
    </div>
    <div class="control-panel__objects-records">
      <p>Total weight:
        <span>{{ totalRandomlyPlacedObjectsWeight }}</span>
      </p>
      <p>Momentum:
        <span>0</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'ControlPanel',
  computed: {
    ...mapState([
      'fallingObjects'
    ]),
    ...mapGetters([
      'totalPlacedObjectsWeight',
      'totalRandomlyPlacedObjectsWeight'
    ])
  }
}
</script>
