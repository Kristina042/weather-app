<script setup lang="ts">
import type { ShortForecastDto } from '@/types';
import sunIcon from '@/components/icons/sun.vue'

const props = defineProps<{
  forcast: ShortForecastDto | null,
}>()


const emit = defineEmits<{
  (e: 'select', index: number): void
}>()

</script>

<template>
  <div class="card">
    <div class="card__header">5-day forecast</div>
    <div @click="emit('select', index)" v-for="(item, index) in forcast?.days" class="card__day">
      <div class="card__item">{{ item.dayOfWeek.slice(0, 3)}}</div>
      <div class="card__item"><component :is="sunIcon"/></div>
      <div class="card__item">low: {{ Math.round(item.temp_min) }} °C</div>
      <div class="card__item">high: {{ Math.round(item.temp_max) }} °C</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
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
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 2.3fr;
    border-bottom: solid 3px rgba(255, 255, 255, 0.2);

    &:last-child {
      border-bottom: none;
    }

  }


  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 5px 10px;
  }
}
</style>