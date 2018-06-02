<template>
  <div id="app">
    <app-home />
  </div>
</template>

<script>
import Home from "./spa/Home.vue";
export default {
  name: 'app',
  components: {
    'app-home': Home
  }
}
</script>