<script setup lang="ts">
import type { DayForecast } from '@/types';
import { WeatherParameter } from '@/enums.ts';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { computed, ref } from 'vue';
import { LineChart } from 'vue-chart-3'

 const props = defineProps<{
    numOfLines: 1 | 2 | 3
    forecast: DayForecast,
    line1: WeatherParameter,
    line2?:  WeatherParameter,
    line3?:  WeatherParameter,
 }>()

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale
)

const activeType1 = ref(props.line1 as WeatherParameter)
const activeType2 = ref(props.line2 as WeatherParameter)
const activeType3 = ref(props.line3 as WeatherParameter)

const activeType = ref<WeatherParameter>(activeType1.value )

const getDataSet = (dataType: WeatherParameter): (number | null)[] => {
  const dataSets: Record<WeatherParameter, number[]> = {
    [WeatherParameter.WIND]: props.forecast.data.map(item => item.wind.speed),
    [WeatherParameter.GUST]: props.forecast.data.map(item => item.wind.gust ?? null),
    [WeatherParameter.TEMP]: props.forecast.data.map(item => item.temp.temp),
    [WeatherParameter.FEELS_LIKE]: props.forecast.data.map(item => item.temp.feels_like),
    [WeatherParameter.PRESSURE]: props.forecast.data.map(item => item.pressure),
    [WeatherParameter.CLOUDS]: props.forecast.data.map(item => item.clouds),
    [WeatherParameter.HUMIDITY]: props.forecast.data.map(item => item.humidity),
    [WeatherParameter.SEA_LEVEL]: props.forecast.data.map(item => item.sea_level),
    [WeatherParameter.GROUND_LEVEL]: props.forecast.data.map(item => item.grnd_level),
    [WeatherParameter.WIND_DIRECTION]: props.forecast.data.map(item => item.wind.deg)
  }

  return dataSets[dataType] || []
}

const getUnit = (dataType: WeatherParameter): string => {
    if (dataType === WeatherParameter.WIND || dataType === WeatherParameter.GUST)
      return '(m/s)'
    if (dataType === WeatherParameter.TEMP || dataType === WeatherParameter.FEELS_LIKE)
      return '(°C)'
    if (dataType === WeatherParameter.PRESSURE || dataType === WeatherParameter.SEA_LEVEL || dataType === WeatherParameter.GROUND_LEVEL)
      return '(hPa)'
    if (dataType === WeatherParameter.CLOUDS || dataType === WeatherParameter.HUMIDITY)
      return '(%)'
    if (dataType === WeatherParameter.WIND_DIRECTION)
      return '( ° )'

    return ''
}


const chartData = computed(() => {
  const labels = props.forecast.data.map(item => item.hour)
  const types = [activeType1.value, activeType2?.value, activeType3?.value].slice(0, props.numOfLines)

  const datasets = types.map(type => ({
    label: activeType.value === type ? `${type} ${getUnit(type)}` : '',
    data: getDataSet(type),
    borderColor: activeType.value === type ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
    pointBackgroundColor: activeType.value === type ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
    tension: 0.3,
    fill: true,
    pointRadius: 3,
  }))

  return { labels, datasets }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { labels: { boxWidth: 0, color: 'white', font: {size: 14} } },
    tooltip: { mode: 'index', intersect: false },
  },
  scales: {
    x: {
      ticks: { color: 'white', font: {size: 14} },
      grid: {
        display: false,
        drawBorder: false,
        color: 'white',
      },
    },
    y: {
      ticks: { color: 'white', font: {size: 14} },
      grid: {
        display: false,
        drawBorder: false,
        color: 'white',
      },
    },
  },
}


</script>

<template>
  <div class="chart__wrapper">
    <div v-if="forecast" class="chart">
      <LineChart v-if="forecast" class="chart__data" :chart-data="chartData" :options="chartOptions" />

    <div class="chart__buttons" v-if="numOfLines >= 2">
      <button
        v-for="(type, index) in [activeType1, activeType2, activeType3].slice(0, numOfLines)"
        :key="index"
        :class="[
          index === 0 ? 'chart__button-left' : index === numOfLines - 1 ? 'chart__button-right' : 'chart__button-middle',
          { active: activeType === type }
        ]"
        @click="activeType = type"
      >
        {{ type }}
      </button>
    </div>

    </div>
  </div>


</template>

<style scoped lang="scss">
.chart {
  background-color: rgba($color: $dark-blue, $alpha: 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.5),
    inset 0 2px 0 rgba(255, 255, 255, 0.7),
    inset 0 -2px 0 rgba(255, 255, 255, 0.1);
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &__data {
    height: 250px;
    width: 300px;
  }

  &__buttons {
    display: flex;

    button {
      min-width: 95px;
      padding: 5px 8px;
      border: none;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.4);
      color: white;
      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.6s;

      &.active {
        background-color: rgba(255, 255, 255, 0.7);
        color: rgb(177, 124, 182);
      }
    }
  }

  &__button-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__button-right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
