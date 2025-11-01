<script setup lang="ts">
import type { DayForecast } from '@/types';
import Rain from '@/components/icons/svg/rain.vue'
import HeavyRain from '@/components/icons/svg/heavyRain.vue'
import SunCloud1 from '@/components/icons/svg/sunCloud1.vue'
import SunCloud2 from '@/components/icons/svg/sunCloud2.vue'
import lightRain from './icons/svg/lightRain.vue';
import scatteredThunderStorm from './icons/svg/scatteredThunderStorm.vue';
import lightningCloud from './icons/svg/lightningCloud.vue';
import rainAndSnow from './icons/svg/rainAndSnow.vue';

import { getWeatherIcon } from '@/utils/weatherIconUtil';
import { onMounted } from 'vue';

const props = defineProps<{
  forecast: DayForecast,
}>()

</script>


<template>
  <div class="hourly-card">
    <div class="hourly-card__header">{{ forecast.dayOfWeek }} hourly forecast</div>
    <div v-for="(item, index) in forecast.data" :key="index" class="hourly-card__day">
      <div class="hourly-card__item hourly-card__item--hour">{{ item.hour }}</div>
      <!-- <lightRain class="hourly-card__item hourly-card__item--icon"/> -->
      <div  class="hourly-card__item hourly-card__item--icon">
        <component :is="getWeatherIcon(item.weather.description)"/>
      </div>
      <div class="hourly-card__item hourly-card__item--temp">{{ Math.round(item.temp.temp) }} °</div>
      <div class="hourly-card__item">---</div>
      <div class="hourly-card__item hourly-card__item--description"> {{ item.weather.description }} </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.hourly-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0px;

  background-color: rgba($color: $dark-blue, $alpha: 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1x);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow:
  0 10px 20px rgba(0, 0, 0, 0.5),
  inset 0 2px 0 rgba(255, 255, 255, 0.7),
  inset 0 -2px 0 rgba(255, 255, 255, 0.1);

  &__header {
    border-bottom: solid 3px rgba(255, 255, 255, 0.2);
    padding: 10px;
  }

  &__day {
    display:flex;
    gap: 10px;
    border-bottom: solid 3px rgba(255, 255, 255, 0.3);
    padding: 4px 0;

    &:last-child {
      border-bottom: none;
    }

  }


  &__item {
    display: flex;
    justify-content: center;
    align-items: center;


    &--hour {
      min-width: 65px;
      padding-left: 10px;
    }

    &--temp {
      min-width: 40px;
    }

    &--icon {
      width: 30px;
      height: 30px;
    }

  }
}
</style>