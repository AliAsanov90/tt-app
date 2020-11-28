<template>
  <div
    class="object"
    :class="objectClasses"
    :style="objectStyles"
  >
    <div class="object__weight">{{ object.weight + 'kg' }}</div>
  </div>
</template>

<script>
// import { BOARD_WIDTH } from '@/constants'
export default {
  name: 'Object',
  props: {
    object: {
      type: Object,
      required: true
    },
    onBoard: {
      type: Boolean,
      default: false
    },
    randomlyPlaced: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      correction: 0
    }
  },
  computed: {
    objectLeftPosition () {
      const { position } = this.object
      // const boardCenter = BOARD_WIDTH / 2
      // const stepPercentage = 100 / BOARD_WIDTH
      // const randomlyPlacedPosition = (boardCenter + position) * stepPercentage
      // const placedPosition = (boardCenter - position) * stepPercentage

      return this.randomlyPlaced
        ? `calc(${60 + position}% - ${this.correction}px)`
        : `${position}%`
    },
    objectStyles () {
      const { shape, color, scale } = this.object

      const objectStyles = {
        left: this.objectLeftPosition,
        transform: `translateY(${this.onBoard ? -100 : 0}%) scale(${scale})`,
        transformOrigin: `${this.onBoard ? 'bottom' : 'top'} left`
      }

      shape === 'triangle'
        ? objectStyles.borderBottomColor = color
        : objectStyles.backgroundColor = color

      return objectStyles
    },
    objectClasses () {
      const { shape } = this.object

      return {
        square: shape === 'square',
        circle: shape === 'circle',
        triangle: shape === 'triangle'
      }
    }
  },
  methods: {
    correctRandomlyPlacedPosition (position) {
      const { width } = this.$el.getBoundingClientRect()
      if (this.randomlyPlaced && position > 35) this.correction = width
    }
  },
  mounted () {
    this.$watch('object.position', this.correctRandomlyPlacedPosition, { immediate: true })
  }
}
</script>
