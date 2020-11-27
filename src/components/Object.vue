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
export default {
  name: 'Object',
  props: {
    onBoard: {
      type: Boolean,
      default: false
    },
    object: {
      type: Object,
      required: true
    }
  },
  computed: {
    objectStyles () {
      const { shape, color, scale } = this.object

      const objectStyles = {
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
  }
}
</script>
