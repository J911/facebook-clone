<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./spa/Home.vue";
import Main from "./spa/Main.vue";
export default {
  name: 'app',
  components: {
    'app-home': Main
  }
}
</script>