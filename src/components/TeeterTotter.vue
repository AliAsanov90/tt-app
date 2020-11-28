<template>
  <div class="teeter-totter">
    <div
      class="teeter-totter__board"
      :style="boardStyles"
    >
      <!-- Placed objects on the left side -->
      <Object
        v-for="obj in placedObjects"
        :key="obj.id"
        :object="obj"
        onBoard
      />

      <!-- Randomly placed objects on the right side -->
      <Object
        v-for="obj in randomlyPlacedObjects"
        :key="obj.id"
        :object="obj"
        onBoard
        randomlyPlaced
      />
    </div>
    <div class="teeter-totter__beam"></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { BOARD_HEIGHT, MAX_BENDING_DURATION, BENDING_ANGLE_RANGE } from '@/constants'
import Object from './Object'

export default {
  name: 'TeeterTotter',
  components: {
    Object
  },

  data () {
    return {
      boardBendingDuration: 0
    }
  },

  computed: {
    ...mapState([
      'placedObjects',
      'randomlyPlacedObjects'
    ]),

    ...mapGetters([
      'isBoardAngleWithinLimits',
      'boardBendingAngle',
      'objectsMomentumDifference'
    ]),

    bendingDurations () {
      const durations = []
      for (let i = BENDING_ANGLE_RANGE; i >= 1; i--) {
        const duration = MAX_BENDING_DURATION * (i / BENDING_ANGLE_RANGE)
        durations.push(Math.round(duration))
      }
      return durations
    },

    boardStyles () {
      return {
        height: `${BOARD_HEIGHT}px`,
        transform: `rotate(${this.boardBendingAngle / 2}deg)`,
        'transition-duration': `${this.boardBendingDuration}ms`
      }
    },

    boardObjectsDiff () {
      return this.placedObjects.length - this.randomlyPlacedObjects.length
    }
  },

  watch: {
    boardObjectsDiff (current) {
      if (current && this.isBoardAngleWithinLimits) {
        this.createObject(true)
      }
    },
    boardBendingAngle (currentAngle, previousAngle) {
      const bendingAngleChange = Math.abs(Math.round(currentAngle - previousAngle))
      this.boardBendingDuration = this.bendingDurations[bendingAngleChange] || 20
    }
  },
  methods: {
    ...mapMutations([
      'createObject'
    ])
  }
}
</script>
