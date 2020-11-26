<template>
  <div class="app">
    <ControlPanel></ControlPanel>
    <PlayingArea></PlayingArea>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel.vue'
import PlayingArea from './components/PlayingArea.vue'
export default {
  name: 'App',
  components: {
    ControlPanel,
    PlayingArea
  }
}
</script>
