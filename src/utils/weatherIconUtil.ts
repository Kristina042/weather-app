import { IconEnum } from "@/enums.ts";
import { IconMap } from "@/components/icons/svg";

export const getWeatherIcon = (description: string) => {
  const desc = description.toLowerCase();

  if (desc.includes("thunderstorm")) {
    return IconMap[IconEnum.LIGHTNING_CLOUD];
  }
  if (desc.includes("snow") || desc.includes("sleet")) {
    return IconMap[IconEnum.RAIN_SNOW];
  }
  if (desc.includes("heavy rain") || desc.includes("extreme rain")) {
    return IconMap[IconEnum.HEAVY_RAIN];
  }
  if (desc.includes("rain")) {
    if (desc.includes("light")) {
      return IconMap[IconEnum.LIGHT_RAIN];
    }
    return IconMap[IconEnum.RAIN];
  }
  if (desc.includes("few clouds")) {
    return IconMap[IconEnum.SUN_SMALL_CLOUD];
  }
  if (desc.includes("scattered clouds")) {
    return IconMap[IconEnum.SUN_BIG_CLOUD];
  }
  if (desc.includes("broken clouds") || desc.includes("overcast clouds") || desc.includes("clouds")) {
    return IconMap[IconEnum.CLOUD];
  }
  if (desc.includes("clear")) {
    return IconMap[IconEnum.SUN];
  }

  // fallback
  return IconMap[IconEnum.CLOUD];
}