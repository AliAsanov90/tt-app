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
      <button>Play</button>
      <button>Reset</button>
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
import { mapGetters } from 'vuex'
export default {
  name: 'ControlPanel',
  computed: {
    ...mapGetters([
      'totalPlacedObjectsWeight',
      'totalRandomlyPlacedObjectsWeight',
      'totalPlacedObjectsMomentum',
      'totalRandomlyPlacedObjectsMomentum'
    ])
  }
}
</script>
