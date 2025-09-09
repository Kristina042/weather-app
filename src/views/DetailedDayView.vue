<script setup lang="ts">
import { useWeatherForecastStore } from '@/stores/weatherForecast'
import type { DetaliedTempForecast } from '@/types'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import TempChart from '@/components/tempChart.vue';
import Header from '@/components/header.vue';
import { computed, onMounted, ref, watch } from 'vue';
const route = useRoute()
const index = Number(route.params.index) // index from route

const forecastStore = useWeatherForecastStore()

// Fetch forecast if empty
if (!forecastStore.detailedForecastDto) {
  forecastStore.fetchDetailedForecast("Gdansk")
}

const tempForecast = computed(() => {
    if (!forecastStore.detailedForecastDto) return []

    return forecastStore.detailedForecastDto.days[index].data.map(item => ({
        hour: item.hour,
        temps: item.temp
    }))
})
</script>

<template>
    <div class="detailedForecast">
        <Header class="detailedForecast__header"/>

        <div class="detailedForecast__cards">
            <TempChart :forecast="tempForecast"/>
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

    &__cards {
        //width: 300px;
    }
}
</style>