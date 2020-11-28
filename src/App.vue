<template>
  <v-app class="app">
    <ControlPanel></ControlPanel>
    <PlayingArea></PlayingArea>
    <Modal></Modal>
  </v-app>
</template>

<script>
import ControlPanel from '@/components/ControlPanel.vue'
import PlayingArea from '@/components/PlayingArea.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    ControlPanel,
    PlayingArea,
    Modal
  }
}
</script>
