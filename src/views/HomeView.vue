<script setup lang="ts">
import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
import WeekForcastCard from '@/components/weekForcastCard.vue'
import Header from '@/components/header.vue';
import { mockWeekForcast } from '@/mocks/mockData';
import sun from '@/components/icons/sun.vue';
import { storeToRefs } from "pinia";
import { useCurrentWeatherStore } from "@/stores/currentWeather";
import MiniCardsContainer from '@/components/miniCardsContainer.vue'

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

    <MiniCardsContainer :currentWeather="currentWeatherDto"/>


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
}

</style>
