import { ref } from "vue"
import { defineStore } from "pinia"
import type { ForecastDto } from "@/types"
import type { ShortForecastDto } from "@/types"
import { getDetailedForecast, getShortForecast } from "@/services/weather-service"

export const useWeatherForecastStore = defineStore("weatherForecast", () => {
  const detailedForecastDto = ref<ForecastDto | null>(null)
  const shortForecastDto = ref<ShortForecastDto | null>(null)
  const loadingDetailed = ref(false)
  const errorDetailed = ref<string | null>(null)

  async function fetchShortForecast(){
    shortForecastDto.value = await getShortForecast()
  }

  async function fetchDetailedForecast(city: string) {
    loadingDetailed.value = true
    errorDetailed.value = null
    try {
      detailedForecastDto.value = await getDetailedForecast(city)
    } catch (err) {
      errorDetailed.value = "Failed to detailed weather forecast"
    } finally {
      loadingDetailed.value = false
    }
  }

  return {
    detailedForecastDto,
    shortForecastDto,
    loadingDetailed,
    errorDetailed,
    fetchDetailedForecast,
    fetchShortForecast
  }
})