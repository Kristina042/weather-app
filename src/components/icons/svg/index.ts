import { IconEnum } from "@/enums.ts";
import cloud from "./cloud.vue";
import heavyRain from "./heavyRain.vue";
import lightningCloud from "./lightningCloud.vue";
import lightRain from "./lightRain.vue";
import rain from "./rain.vue";
import rainAndSnow from "./rainAndSnow.vue";
import scatteredThunderStorm from "./scatteredThunderStorm.vue";
import sun from "./sun.vue";
import sunCloud1 from "./sunCloud1.vue";
import sunCloud2 from "./sunCloud2.vue";

export const IconMap = {
    [IconEnum.CLOUD]: cloud,
    [IconEnum.HEAVY_RAIN]: heavyRain,
    [IconEnum.LIGHTNING_CLOUD]: lightningCloud,
    [IconEnum.LIGHT_RAIN]: lightRain,
    [IconEnum.RAIN]: rain,
    [IconEnum.RAIN_SNOW]: rainAndSnow,
    [IconEnum.SCATTERED_THUNDERSTORM]: scatteredThunderStorm,
    [IconEnum.SUN]: sun,
    [IconEnum.SUN_BIG_CLOUD]: sunCloud1,
    [IconEnum.SUN_SMALL_CLOUD]: sunCloud2
}