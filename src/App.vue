<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/currentWeatherCard.vue'
</script>

<template>
<div class="app">
</div>
<router-view></router-view>
</template>

<style scoped>
.app {
  display: flex;
}
</style>
