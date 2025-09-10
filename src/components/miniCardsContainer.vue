<script setup lang="ts">
import MiniCard from '@/components/miniCard.vue'
import sunCloud from '@/components/icons/sun-cloud-icon.png'
import termometerIcon from '@/components/icons/termometer.png'
import Sunrise from '@/components/icons/sunrise.png'
import Sunset from '@/components/icons/sunset.png'
import WindCard from './windCard.vue';
import type { CurrentWeatherWithLocalTime } from '@/types';

defineProps<{
    currentWeather: CurrentWeatherWithLocalTime | null,
}>()
</script>

<template>
    <div class="mini-cards">
        <MiniCard name="feels like" :value="currentWeather?.temp.feels_like" unit="°C" text="some text" :icon="termometerIcon"/>
        <MiniCard name="temp high" :value="currentWeather?.temp.temp_max" unit="°C" text="some text" :icon="termometerIcon"/>
        <MiniCard name="temp low" :value="currentWeather?.temp.temp_min" unit="°C" text="some text" :icon="termometerIcon"/>
        <MiniCard name="humidity" :value="currentWeather?.humidity" unit="%" text="some text" :icon="sunCloud"/>
    </div>
    <WindCard class="wind-card" :wind="currentWeather?.wind"/>
    <div class="mini-cards">
        <MiniCard name="sunrise" :value="currentWeather?.sun.sunrise" text="some text" :icon="Sunrise"/>
        <MiniCard name="sunset" :value="currentWeather?.sun.sunset" text="some text" :icon="Sunset"/>
        <MiniCard name="pressure" :value="currentWeather?.pressure" unit="hPa" text="some text" :icon="termometerIcon"/>
        <MiniCard name="clouds" :value="currentWeather?.clouds" unit="%" text="some text" :icon="sunCloud"/>
        <MiniCard name="sea level" :value="currentWeather?.sea_level" unit="hPa" text="some text" :icon="sunCloud"/>
        <MiniCard name="ground" :value="currentWeather?.grnd_level" unit="hPa" text="some text" :icon="sunCloud"/>
    </div>
</template>


<style scoped lang="scss">
  .mini-cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

</style>