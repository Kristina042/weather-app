<script setup lang="ts">
  import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
  import sun from '@/components/icons/sun.vue';
import type { CurrentWeather } from '@/types';

  const weather: CurrentWeather = {
    city: 'gdansk',
    temp: 25,
    description:'mostly sunny',
    timestamp: '12:42'
  }
</script>

<template>
  <div class="home">
    <CurrentWeatherCard :icon="sun" :weather="weather"></CurrentWeatherCard>
  </div>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
