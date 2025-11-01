<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from 'vue';

import { useCurrentWeatherStore } from "@/stores/currentWeather";
import { useWeatherForecastStore } from '@/stores/weatherForecast';

import Rain from '@/components/icons/svg/rain.vue'
import Header from '@/components/header.vue';
import ShortForecastCard from '@/components/shortForecastCard.vue';
import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
import MiniCardsContainer from '@/components/miniCardsContainer.vue';
import dailyViewPopup from '@/components/popups/dailyViewPopup.vue';


const currentWeatherStore = useCurrentWeatherStore()
const { currentWeatherDto, currentWeather, loading, error } = storeToRefs(currentWeatherStore)

const forecastStore = useWeatherForecastStore()
const { shortForecastDto } = storeToRefs(forecastStore)

forecastStore.fetchDetailedForecast('Gdansk')
forecastStore.fetchShortForecast()


onBeforeMount(async () => {
  await currentWeatherStore.fetchWeather("Gdansk")
})

const forecastToShow = ref<number>()

const goToForecast = (index: number) => {
  forecastToShow.value = index
}
</script>


<template>

  <div class="home">
    <Header class="home__header"/>
    <div class="home__weather-cards">
      <CurrentWeatherCard :icon="Rain" :weather="currentWeather"></CurrentWeatherCard>
      <ShortForecastCard :forecast="shortForecastDto" @select="goToForecast" :isLoading="loading || !!error"/>
      <MiniCardsContainer :currentWeather="currentWeatherDto"/>

      <dailyViewPopup
        v-if="forecastToShow !== undefined"
        :dayIdx="forecastToShow"
        @close="forecastToShow = undefined"
      />
    </div>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
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
