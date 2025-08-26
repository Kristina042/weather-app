<script setup lang="ts">
import CurrentWeatherCard from '@/components/currentWeatherCard.vue';
import WeekForcastCard from '@/components/weekForcastCard.vue'
import MiniCard from '@/components/miniCard.vue'
import Header from '@/components/header.vue';
import type { CurrentWeather } from '@/types';
import { mockWeekForcast } from '@/mocks/mockData';
import sun from '@/components/icons/sun.vue';
import sunCloud from '@/components/icons/sun-cloud-icon.png'
import termometerIcon from '@/components/icons/termometer.png'
import WindIcon from '@/components/icons/wind.png'
import Sunrise from '@/components/icons/sunrise.png'
import Sunset from '@/components/icons/sunset.png'

  const weather: CurrentWeather = {
    city: 'Gdansk',
    temp: 25,
    description:'mostly sunny',
    timestamp: '12:42'
  }
</script>

<template>
  <div class="home">
    <Header/>
    <CurrentWeatherCard :icon="sun" :weather="weather"></CurrentWeatherCard>
    <WeekForcastCard :forcast="mockWeekForcast"/>

    <div class="mini-cards">
      <MiniCard name="humidity" value="83%" text="it's super moist today" :icon="sunCloud"/>
      <MiniCard name="feels like" value="28 °" text="humitity makes it feel hotter" :icon="termometerIcon"/>
      <MiniCard name="wind" value="16 m/s" text="it's fokin wimbdy today" :icon="WindIcon"/>
      <MiniCard name="sunrise" value="6:14" text="early rise" :icon="Sunrise"/>
      <MiniCard name="sunset" value="22:09" text="bedtime" :icon="Sunset"/>
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
