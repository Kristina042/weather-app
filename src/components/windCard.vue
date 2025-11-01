<script setup lang="ts">
import type { WindModel } from '@/types';
import { getWindDescription } from '@/utils/weatherDescriptions';
import cardSkeleton from './skeletonLoaders/cardSkeleton.vue';

 const props = defineProps<{
    wind: WindModel | undefined,
    isLoading: boolean
 }>()


</script>

<template>
<div class="wind-card" v-if="wind">
    <img class="wind-card__icon"  src="/src/components/icons/wind.png"/>
    <div class="wind-card__name">wind</div>


    <div class="wind-card__stats-and-compas">
        <div class="wind-card__stats">
            <div class="wind-card__label-and-value">
                <div class="wind-card__label">speed: </div>
                <div class="wind-card__value">{{ wind?.speed }} m/s</div>
            </div>

            <div  v-if="wind?.gust" class="wind-card__label-and-value">
                <div class="wind-card__label">gusts: </div>
                <div class="wind-card__value">{{ wind?.gust }} m/s</div>
            </div>

            <div class="wind-card__label-and-value">
                <div class="wind-card__label">direction: </div>
                <div class="wind-card__value">{{ wind?.deg }} °</div>
            </div>
        </div>

        <img class="wind-card__compas" src="./icons/compas.png"/>
    </div>

    <div class="wind-card__text">{{ getWindDescription(wind?.speed) }}</div>
</div>

<div class="skeleton-loader" v-if="!wind">
    <card-skeleton text="analyzing..."/>
</div>
</template>

<style lang="scss" scoped>
.wind-card {
    background-color: rgba($color: $dark-blue, $alpha: 0.2);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1x);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 2px 0 rgba(255, 255, 255, 0.7),
    inset 0 -2px 0 rgba(255, 255, 255, 0.1);

    padding: 18px;

    position: relative;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__icon {
        width: 24px;
        height: 24px;
        position:absolute;
        left: 10px;
    }

    &__compas {
        width: 100px;
        height: 100px;
    }

    &__stats {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__stats-and-compas {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    &__label-and-value {
        width: 100%;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }


    &__text {
        width: 100%;
        font-size: 14px;
        align-self: flex-start;
    }

    &__name {
        font-size: 18px;
        align-self: flex-start;
        padding-left: 25px;
        opacity: 0.7;
    }
}

.skeleton-loader {
    width: 100%;
    height: 150px;
}

</style>