<template>
  <div
    class="object"
    :style="{ transform: `translateY(${ onBoard ? -100 : 0 }%)` }"
  />
</template>

<script>
export default {
  name: 'Object',
  props: {
    onBoard: {
      type: Boolean,
      default: false
    }
  }
}
</script>
