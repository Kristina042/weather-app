<script setup lang="ts">
import { computed } from 'vue';

 const props = defineProps<{
    name:string,
    value: string,
    text: string,
    icon: object | string
 }>()

 const isSvg = computed(() => typeof props.icon === 'object')
</script>


<template>
<div class="mini-card">
    <component class="mini-card__icon" v-if="isSvg" :is="icon" />
    <img class="mini-card__icon" v-else :src="(icon as string)" />
    <div class="mini-card__name">{{ name }}</div>
    <div class="mini-card__value">{{ value }}</div>
    <div class="mini-card__text">{{ text }}</div>
</div>
</template>

<style lang="scss" scoped>
.mini-card {
    background-color: rgba(31, 0, 205, 0.2);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1x);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 2px 0 rgba(255, 255, 255, 0.7),
    inset 0 -2px 0 rgba(255, 255, 255, 0.1);

    width: 140px;
    height: 140px;
    padding: 15px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__icon {
        width: 24px;
        height: 24px;
        position:absolute;
        left: 10px;
    }

    &__value {
        padding-top: 10px;
        font-size: 28px;
        align-self: flex-start;
    }

    &__text {
        font-size: 14px;
        align-self: flex-start;
    }

    &__name {
        font-size: 18px;
        align-self: flex-start;
        padding-left: 25px;
    }


}

</style>

