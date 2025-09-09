<script setup lang="ts">
import type { DetaliedTempForecast } from '@/types';
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
import { computed, onMounted, ref } from 'vue';
import { LineChart } from 'vue-chart-3'

 const props = defineProps<{
    forecast: DetaliedTempForecast,
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
const activeType = ref<'temp' | 'feels_like'>('temp')

const chartData = computed(() => {
  return {
    labels: props.forecast.map(item => item.hour),
    datasets: [
      {
        label: activeType.value === 'temp' ? 'Temperature (°C)' : '',
        data: props.forecast.map(item => item.temps.temp),
        borderColor:  activeType.value === 'temp' ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        pointBackgroundColor: activeType.value === 'temp' ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
      {
        label: activeType.value === 'feels_like' ? 'Feels like (°C)' : '',
        data: props.forecast.map(item => item.temps.feels_like),
        borderColor:  activeType.value === 'feels_like' ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        pointBackgroundColor: activeType.value === 'feels_like' ? 'rgba(255, 253, 88, 0.8)' : 'rgba(255, 255, 255, 0.4)',
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
    <div class="chart">
      <LineChart class="chart__data" :chart-data="chartData" :options="chartOptions" />

      <div class="chart__buttons">
        <button
          class="chart__button-left"
          :class="{ active: activeType === 'temp' }"
          @click="activeType = 'temp'"
        >
          Actual
        </button>

        <button
          class="chart__button-right"
          :class="{ active: activeType === 'feels_like' }"
          @click="activeType = 'feels_like'"
        >
          Feels Like
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
  0 10px 20px rgba(0, 0, 0, 0.5),
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
    width: 400px;
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
      min-width: 100px;
      padding: 6px 12px;
      border: none;
      cursor: pointer;
      background-color: rgba(255,255,255,0.4);
      color: white;
      font-size: 16px;
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
