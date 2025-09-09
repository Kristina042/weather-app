<script setup lang="ts">
import type { DayForecast, DetaliedTempForecast } from '@/types';
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
    forecast: DayForecast,
    line1: 'Wind speed' | 'Gusts' |'Temperature' | 'Pressure' | 'Feels like',
    line2:  'Wind speed' | 'Gusts' |'Temperature' | 'Pressure' | 'Feels like',
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

// State for selected dataset
const activeType1 = props.line1
const activeType2 = props.line2

const activeType = ref<'Wind speed' | 'Gusts' |'Temperature' | 'Pressure' | 'Feels like'>(activeType1)

const getDataSet = (dataType: string): (number | null)[] => {
  if (dataType === 'Wind speed') {
    return props.forecast.data.map(item => item.wind.speed)
  } else if (dataType === 'Gusts') {
    return props.forecast.data.map(item => item.wind.gust ?? null)
  } else if (dataType === 'Temperature') {
    return props.forecast.data.map(item => item.temp.temp)
  } else if (dataType === 'Feels like') {
    return props.forecast.data.map(item => item.temp.feels_like)
  }

  return []
}

const getUnit = (dataType: string): string => {
    if (dataType === 'Wind speed' || dataType === 'Gusts')
        return '(m/s)'
    else if (dataType === 'Temperature' || dataType === 'Feels like')
        return '(°C)'

    return ''
}

const chartData = computed(() => {
  return {
    labels: props.forecast.data.map(item => item.hour),
    datasets: [
      {
        label: activeType.value === activeType1 ? `${activeType1} ${getUnit(activeType1)}` : '',
        data: getDataSet(activeType1),
        borderColor:  activeType.value === activeType1 ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        pointBackgroundColor: activeType.value === activeType1 ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
      {
        label: activeType.value === activeType2 ? `${activeType2} ${getUnit(activeType2)}` : '',
        data: getDataSet(activeType2),
        borderColor:  activeType.value === activeType2 ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        pointBackgroundColor: activeType.value === activeType2 ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
    ]
  }
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

      <div class="chart__buttons">
        <button
          class="chart__button-left"
          :class="{ active: activeType === activeType1 }"
          @click="activeType = activeType1"
        >
          {{ activeType1 }}
        </button>

        <button
          class="chart__button-right"
          :class="{ active: activeType === activeType2 }"
          @click="activeType = activeType2"
        >
          {{ activeType2 }}
        </button>
      </div>

    </div>
  </div>


</template>

<style scoped lang="scss">
.chart {
  background-color: rgba($color: $dark-blue, $alpha: 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1x);
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

  &__button-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__button-right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__buttons {
    button {
      min-width: 120px;
      padding: 6px 12px;
      border: none;
      cursor: pointer;
      background-color: rgba(255,255,255,0.4);
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
}
</style>
