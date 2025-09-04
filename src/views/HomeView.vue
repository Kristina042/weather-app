<script setup lang="ts">
import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
import WeekForcastCard from '@/components/weekForcastCard.vue'
import MiniCard from '@/components/miniCard.vue'
import Header from '@/components/header.vue';
import { mockWeekForcast } from '@/mocks/mockData';
import sun from '@/components/icons/sun.vue';
import sunCloud from '@/components/icons/sun-cloud-icon.png'
import termometerIcon from '@/components/icons/termometer.png'
import WindIcon from '@/components/icons/wind.png'
import Sunrise from '@/components/icons/sunrise.png'
import Sunset from '@/components/icons/sunset.png'
import { storeToRefs } from "pinia";
import { useCurrentWeatherStore } from "@/stores/currentWeather";

const store = useCurrentWeatherStore();
const { currentWeatherDto, currentWeather, loading, error } = storeToRefs(store);

store.fetchWeather("Gdansk");

</script>

<template>
  <div class="home">
    <Header/>

    <CurrentWeatherCard :icon="sun" :weather="currentWeather"></CurrentWeatherCard>
    <div v-if="loading">loading current weather...</div>

    <WeekForcastCard :forcast="mockWeekForcast"/>

    <div class="mini-cards">
      <MiniCard name="humidity" :value="currentWeatherDto?.humidity" unit="%" text="some text" :icon="sunCloud"/>
      <MiniCard name="feels like" :value="currentWeatherDto?.temp.feels_like" unit="°" text="some text" :icon="termometerIcon"/>
      <MiniCard name="wind" :value="currentWeatherDto?.wind.speed" unit="m/s" text="some text" :icon="WindIcon"/>
      <MiniCard name="sunrise" :value="currentWeatherDto?.sun.sunrise" text="some text" :icon="Sunrise"/>
      <MiniCard name="sunset" :value="currentWeatherDto?.sun.sunset" text="some text" :icon="Sunset"/>
      <MiniCard name="pressure" :value="currentWeatherDto?.pressure" unit="hPa" text="some text" :icon="termometerIcon"/>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;

  .mini-cards {
    max-width: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 20px;
  }
}

</style>
