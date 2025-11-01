<script setup lang="ts">
import { useWeatherForecastStore } from '@/stores/weatherForecast'
import { useRoute } from 'vue-router'
import Header from '@/components/header.vue';
import { computed, onMounted } from 'vue';
import MultiLineChart from '@/components/charts/multiLineChart.vue';
import type { DayForecast } from '@/types';
import { WeatherParameter } from '@/enums.ts';
import HourlyForecastCard from '@/components/hourlyForecastCard.vue';
import { getWeatherIcon } from '@/utils/weatherIconUtil';

const route = useRoute()
const index = Number(route.params.index)

const forecastStore = useWeatherForecastStore()

const oneDayForecast = computed<DayForecast | null>(() => {
  if (!forecastStore.detailedForecastDto) return null
  return forecastStore.detailedForecastDto.days[index]
})

onMounted(async () => {
    if (forecastStore.detailedForecastDto) return
    await forecastStore.fetchDetailedForecast("Gdansk")
})

</script>

<template>
    <div class="detailedForecast">
        <Header class="detailedForecast__header"/>

        <div class="detailedForecast__cards">
            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.TEMP"
                :line2="WeatherParameter.FEELS_LIKE"
                :forecast="oneDayForecast"
                :numOfLines="2"
            />

            <HourlyForecastCard
                v-if="oneDayForecast"
                :forecast="oneDayForecast"
            />

            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.WIND"
                :line2="WeatherParameter.GUST"
                :forecast="oneDayForecast"
                :numOfLines="2"
            />

            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.WIND_DIRECTION"
                :forecast="oneDayForecast"
                :numOfLines="1"
            />

            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.CLOUDS"
                :forecast="oneDayForecast"
                :numOfLines="1"
            />

            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.SEA_LEVEL"
                :line2="WeatherParameter.GROUND_LEVEL"
                :forecast="oneDayForecast"
                :numOfLines="2"
            />

            <MultiLineChart
                v-if="oneDayForecast"
                :line1="WeatherParameter.HUMIDITY"
                :forecast="oneDayForecast"
                :numOfLines="1"
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
        width: 340px;
    }
}
</style>