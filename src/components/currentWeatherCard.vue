<script setup lang="ts">
import type { CurrentWeather } from '@/types';

defineProps<{
  weather: CurrentWeather,
  icon: {}
}>()
</script>

<template>
  <div class="weather-card">
     <img class="weather-card__icon" src="./icons/sun-cloud-icon.png"/>

    <div class="weather-card__info">
      <div class="weather-card__info--city">{{ weather.city }}</div>
      <div class="weather-card__info--temp">{{ weather.temp }} °C</div>
      <div class="weather-card__info--description">{{ weather.description }}</div>
    </div>

    <div class="weather-card__timestamp">{{ weather.timestamp }}</div>
  </div>
</template>

<style lang="scss">
@media (max-width: 4000px) {

.weather-card {
  color: white;
  padding: 20px;

  min-width: 300px;
  min-height: 200px;

  background-color: rgba(31, 0, 205, 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1x);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow:
  0 10px 20px rgba(0, 0, 0, 0.5),
  inset 0 2px 0 rgba(255, 255, 255, 0.7),
  inset 0 -2px 0 rgba(255, 255, 255, 0.1);

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &--city {
      font-size: 28px;
    }

    &--temp {
      font-size: 40px;
    }

    &--description {
      font-size: 20px;
    }
  }

  &__timestamp {
    font-size: 10px;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }

  &__icon {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 60px;
    height: 60px;
  }
}


}
</style>
