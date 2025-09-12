<script setup lang="ts">
import MiniCard from '@/components/miniCard.vue'
import sunCloud from '@/components/icons/sun-cloud-icon.png'
import termometerIcon from '@/components/icons/termometer.png'
import Sunrise from '@/components/icons/sunrise.png'
import Sunset from '@/components/icons/sunset.png'
import WindCard from './windCard.vue';
import type { CurrentWeatherWithLocalTime } from '@/types';
import * as weather from '@/utils/weatherDescriptions'

defineProps<{
  currentWeather: CurrentWeatherWithLocalTime | null,
}>()

</script>

<template>
    <div class="mini-cards" v-if="currentWeather">
      <MiniCard
        name="feels like"
        :value="currentWeather.temp.feels_like"
        :icon="termometerIcon"
        unit="°C"
        :text="weather.getTemperatureDescription(currentWeather.temp.feels_like)"
      />
      <MiniCard
        name="temp high"
        :value="currentWeather.temp.temp_max"
        :icon="termometerIcon"
        unit="°C"
        text="Today's high"
      />
      <MiniCard
        name="temp low"
        :value="currentWeather.temp.temp_min"
        unit="°C"
        text="Todays low"
        :icon="termometerIcon"
      />
      <MiniCard
        name="humidity"
        :value="currentWeather.humidity"
        unit="%"
        :text="weather.getHumidityDescription(currentWeather.humidity)"
        :icon="sunCloud"
      />
    </div>
    <WindCard
      class="wind-card"
      v-if="currentWeather"
      :wind="currentWeather.wind"
    />
    <div class="mini-cards" v-if="currentWeather">
      <MiniCard
        name="sunrise"
        :value="currentWeather.sun.sunrise"
        text=""
        :icon="Sunrise"
      />
      <MiniCard
        name="sunset"
        :value="currentWeather.sun.sunset"
        text=""
        :icon="Sunset"
      />
      <MiniCard
        name="clouds"
        :value="currentWeather.clouds"
        unit="%"
        :text="weather.getCloudsDescription(currentWeather?.clouds)"
        :icon="sunCloud"
      />
      <MiniCard
        name="pressure"
        :value="currentWeather.pressure"
        unit="hPa"
        :text="weather.getPressureDescription(currentWeather.pressure)"
        :icon="termometerIcon"
      />
      <MiniCard
        name="sea level"
        :value="currentWeather.sea_level"
        unit="hPa" text="Pressure at sea level"
        :icon="sunCloud"
      />
      <MiniCard
        name="ground"
        :value="currentWeather.grnd_level"
        unit="hPa"
        text="Pressure at ground level"
        :icon="sunCloud"
      />
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