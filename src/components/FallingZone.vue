<template>
  <div class="falling-zone">
    <Object
      v-for="obj in fallingObjects"
      :key="obj.id"
      :object="obj"
      :id="`falling-object-${obj.id}`"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { BOARD_HEIGHT, BOARD_WIDTH } from '@/constants'
import Object from './Object.vue'

export default {
  name: 'FallingZone',
  components: {
    Object
  },
  data () {
    return {
      intervalId: null,
      objectBottomLimit: null
    }
  },
  computed: {
    ...mapState([
      'fallingObjects',
      'isGamePaused',
      'fallingInterval'
    ]),
    ...mapGetters([
      'boardBendingAngle'
    ]),
    fallingObjectEl () {
      const id = this.fallingObjects[0].id
      return document.getElementById(`falling-object-${id}`)
    }
  },
  watch: {
    isGamePaused (isPaused) {
      if (isPaused) {
        console.log('paused')
        clearInterval(this.intervalId)
      } else {
        this.getObjectBottomLimit()
        this.animateFallingObject()
      }
    }
  },
  methods: {
    ...mapMutations([
      'createObject',
      'addPlacedObject',
      'updateFallingInterval'
    ]),
    animateFallingObject () {
      this.intervalId = setInterval(() => {
        if (this.fallingObjects[0].top >= this.objectBottomLimit) {
          const placedObject = this.fallingObjects.shift()

          clearInterval(this.intervalId)

          this.addPlacedObject(placedObject)
          this.updateFallingInterval()
          this.createObject()
          this.animateFallingObject()
        } else {
          this.fallingObjects[0].top += 1
          this.fallingObjectEl.style.top = `${this.fallingObjects[0].top}px`
          console.log('aminssdf')
        }
      }, this.fallingInterval)
    },

    getObjectBottomLimit () {
      const boardBounds = document.querySelector('.teeter-totter__board').getBoundingClientRect()
      const panelBounds = document.querySelector('.control-panel').getBoundingClientRect()
      const objectBounds = this.fallingObjectEl.getBoundingClientRect()

      console.log('true')

      // Similarity of triangles
      const totterCathet = boardBounds.bottom - boardBounds.top - BOARD_HEIGHT
      const similarCathet = (this.fallingObjects[0].position * totterCathet) / BOARD_WIDTH

      this.objectBottomLimit = this.boardBendingAngle >= 0
        ? boardBounds.top + similarCathet - objectBounds.height - panelBounds.height
        : boardBounds.bottom - similarCathet - objectBounds.height - panelBounds.height
    }
  }
}
</script>
