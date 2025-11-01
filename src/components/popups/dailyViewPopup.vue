<script lang="ts" setup>
import { useWeatherForecastStore } from '@/stores/weatherForecast'
import { computed, onMounted } from 'vue';
import MultiLineChart from '@/components/charts/multiLineChart.vue';
import type { DayForecast } from '@/types';
import { WeatherParameter } from '@/enums.ts';
import HourlyForecastCard from '@/components/hourlyForecastCard.vue';
import popupWrapper from './popupWrapper.vue';

const props = defineProps<{ dayIdx: number }>()

const forecastStore = useWeatherForecastStore()

const oneDayForecast = computed<DayForecast | null>(() => {
  if (!forecastStore.detailedForecastDto) return null
  return forecastStore.detailedForecastDto.days[props.dayIdx]
})

onMounted(async () => {
    if (forecastStore.detailedForecastDto) return
    await forecastStore.fetchDetailedForecast("Gdansk")
})
</script>

<template>
    <popupWrapper>
        <div class="detailedForecast">
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
    </popupWrapper>
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