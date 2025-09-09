import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentWeather } from '@/services/weather-service'
import type { CurrentWeatherDto } from '@/types'
import type { CurrentWeatherModel } from '@/types'

function mapCurrentWeather(currentWeather: CurrentWeatherDto): CurrentWeatherModel {
  return {
    city: currentWeather.city,
    temp: Math.round(currentWeather.temp.temp),
    description: currentWeather.weather.description,
    timestamp: new Date(currentWeather.timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
  }
}

export const useCurrentWeatherStore = defineStore('currentWeather', () => {
  const dto = ref<CurrentWeatherDto | null>(null)

  const currentWeatherDto = computed(() => {
    if (!dto.value) return null

    return {
      ...dto.value,
      sun: {
        sunrise: new Date(dto.value.sun.sunrise * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }),
        sunset: new Date(dto.value.sun.sunset * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }),
      },
    };
  });

  const currentWeather = computed<CurrentWeatherModel | null>(() =>
    dto.value ? mapCurrentWeather(dto.value) : null
  )

  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchWeather(city: string) {
    loading.value = true;
    error.value = null;
    try {
      dto.value = await getCurrentWeather(city); // save raw backend data
    } catch (err) {
      error.value = "Failed to load weather";
    } finally {
      loading.value = false;
    }
  }

  return {
    currentWeatherDto, // full raw data
    currentWeather,   // simplified model for big card
    loading,
    error,
    fetchWeather,
  }

})
