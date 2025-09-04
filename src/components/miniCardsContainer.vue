<script setup lang="ts">
import MiniCard from '@/components/miniCard.vue'
import sun from '@/components/icons/sun.vue';
import sunCloud from '@/components/icons/sun-cloud-icon.png'
import termometerIcon from '@/components/icons/termometer.png'
import WindIcon from '@/components/icons/wind.png'
import Sunrise from '@/components/icons/sunrise.png'
import Sunset from '@/components/icons/sunset.png'
import type { CurrentWeatherWithLocalTime } from '@/types';

defineProps<{
    currentWeather: CurrentWeatherWithLocalTime | null,
}>()
</script>

<template>
    <div class="mini-cards">
      <MiniCard name="humidity" :value="currentWeather?.humidity" unit="%" text="some text" :icon="sunCloud"/>
      <MiniCard name="feels like" :value="currentWeather?.temp.feels_like" unit="°" text="some text" :icon="termometerIcon"/>
      <MiniCard name="wind" :value="currentWeather?.wind.speed" unit="m/s" text="some text" :icon="WindIcon"/>
      <MiniCard name="sunrise" :value="currentWeather?.sun.sunrise" text="some text" :icon="Sunrise"/>
      <MiniCard name="sunset" :value="currentWeather?.sun.sunset" text="some text" :icon="Sunset"/>
      <MiniCard name="pressure" :value="currentWeather?.pressure" unit="hPa" text="some text" :icon="termometerIcon"/>
    </div>
</template>


<style scoped lang="scss">
  .mini-cards {
    max-width: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

</style>