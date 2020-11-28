<template>
    <v-dialog
      v-model="isModalOpen"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Game Over
        </v-card-title>
        <v-card-text>Unfortunately, Teeter-Totter is out of balance. </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="startNewGame"
          >
            New Game
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapState([
      'isModalOpen'
    ])
  },

  methods: {
    ...mapActions([
      'startNewGame'
    ])
  }
}
</script>
