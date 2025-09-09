<script setup lang="ts">
import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
import shortForcastCard from '@/components/shortForcastCard.vue'
import Header from '@/components/header.vue';
import sun from '@/components/icons/sun.vue';
import { storeToRefs } from "pinia";
import { useCurrentWeatherStore } from "@/stores/currentWeather";
import { useWeatherForecastStore } from '@/stores/weatherForecast';
import MiniCardsContainer from '@/components/miniCardsContainer.vue';
import type { DetaliedTempForecast } from '@/types';
import router from '@/router';

const currentWeatherStore = useCurrentWeatherStore()
const { currentWeatherDto, currentWeather, loading, error } = storeToRefs(currentWeatherStore)
currentWeatherStore.fetchWeather("Gdansk")

const forecastStore = useWeatherForecastStore()
const { shortForecastDto } = storeToRefs(forecastStore)
forecastStore.fetchDetailedForecast('Gdansk')
forecastStore.fetchShortForecast()

const goToForecast = (index: number) => {
  router.push({ name: 'forecast', params: { index } })
}

</script>


<template>

  <div class="home">
    <Header class="home__header"/>

    <div class="home__weather-cards">

      <CurrentWeatherCard :icon="sun" :weather="currentWeather"></CurrentWeatherCard>
      <div v-if="loading">loading current weather...</div>
      <div v-if="error">{{ error }}</div>

      <shortForcastCard :forcast="shortForecastDto" @select="goToForecast"/>

      <MiniCardsContainer :currentWeather="currentWeatherDto"/>
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


  &__weather-cards {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

</style>
