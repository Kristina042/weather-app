<script setup lang="ts">
import { useWeatherForecastStore } from '@/stores/weatherForecast'
import { useRoute } from 'vue-router'
import Header from '@/components/header.vue';
import { computed } from 'vue';
import DualLineChart from '@/components/charts/dualLineChart.vue';
import type { DayForecast } from '@/types';
const route = useRoute()
const index = Number(route.params.index)

const forecastStore = useWeatherForecastStore()

// Fetch forecast if empty
if (!forecastStore.detailedForecastDto) {
  forecastStore.fetchDetailedForecast("Gdansk")
}



const oneDayForecast = computed<DayForecast | null>(() => {
  if (!forecastStore.detailedForecastDto) return null
  return forecastStore.detailedForecastDto.days[index]
})
</script>

<template>
    <div class="detailedForecast">
        <Header class="detailedForecast__header"/>

        <div class="detailedForecast__cards">
            <DualLineChart
                v-if="oneDayForecast"
                line1="Temperature"
                line2="Feels like"
                :forecast="oneDayForecast"
            />

            <DualLineChart
                v-if="oneDayForecast"
                line1="Wind speed"
                line2="Gusts"
                :forecast="oneDayForecast"
            />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.detailedForecast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;


    margin-bottom: 100px;

    &__cards {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>