export const getCloudsDescription = (cloudinessLevel: number): string => {
  if (cloudinessLevel <= 10) return 'Clear skies right now'
  if (cloudinessLevel <= 25) return 'Mostly sunny with just a few clouds'
  if (cloudinessLevel <= 50) return 'Partly cloudy'
  if (cloudinessLevel <= 70) return 'Mostly cloudy, with only occasional sun'
  if (cloudinessLevel <= 90) return 'Cloudy and gray skies'
  if (cloudinessLevel <= 100) return 'Overcast with thick, gloomy clouds'
  return 'Weather conditions unavailable'
}

export const getHumidityDescription = (humidity: number): string => {
  if (humidity <= 20) return 'Very dry air'
  if (humidity <= 40) return 'Comfortably dry'
  if (humidity <= 60) return 'Perfectly comfy'
  if (humidity <= 75) return 'A bit sticky'
  if (humidity <= 90) return 'Humid and muggy'
  return 'Oppressively humid '
}

export const getWindDescription = (windSpeed: number): string => {
  if (windSpeed < 0.5) return 'Calm'
  if (windSpeed < 2) return 'Light breeze'
  if (windSpeed < 5) return 'Gentle breeze'
  if (windSpeed < 8) return 'Moderate wind'
  if (windSpeed < 12) return 'Strong wind'
  if (windSpeed < 20) return 'Very strong wind'
  return 'Stormy winds'
}

export const getTemperatureDescription = (temp: number): string => {
  if (temp <= -20) return 'Absolutely freezing!'
  if (temp <= -10) return 'Freezing cold'
  if (temp < 0) return 'Biting cold'
  if (temp <= 10) return 'Pretty chilly'
  if (temp <= 20) return 'Cool and comfy'
  if (temp <= 25) return 'Nice and mild'
  if (temp <= 30) return 'Getting warm'
  if (temp <= 35) return 'Hot stuff!'
  return 'Scorching!'
}

export const getPressureDescription = (pressure: number): string => {
  if (pressure < 980) return 'Very low pressure'
  if (pressure < 1000) return 'Low pressure'
  if (pressure < 1020) return 'Normal pressure'
  if (pressure < 1040) return 'High pressure'
  return 'Very high pressure'
}