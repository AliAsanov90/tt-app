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
import { mapState } from 'vuex'
import { BOARD_HEIGHT } from '@/constants'
import Object from './Object'

export default {
  name: 'TeeterTotter',
  components: {
    Object
  },
  computed: {
    ...mapState([
      'placedObjects',
      'randomlyPlacedObjects'
    ]),
    boardStyles () {
      return {
        height: `${BOARD_HEIGHT}px`
      }
    }
  }
}
</script>
