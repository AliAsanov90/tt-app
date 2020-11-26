<template>
  <div class="teeter-totter">
    <div
      class="teeter-totter__board"
      :style="boardStyles"
    >
      <Object
        v-for="obj in randomlyPlacedObjects"
        :key="obj.id"
        onBoard
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
