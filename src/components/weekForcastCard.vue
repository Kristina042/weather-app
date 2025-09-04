<script setup lang="ts">

const props = defineProps<{
  forcast:any,
}>()
</script>

<template>
  <div class="card">
    <div v-for="item in forcast.data" class="card__day">
      <div class="card__item">{{ item.date }}</div>
      <div class="card__item"><component :is="item.icon"/></div>
      <div class="card__item">low: {{ item.low }} °</div>
      <div class="card__item">high: {{ item.high }} °</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 5px 0px;

  background-color: rgba($color: $dark-blue, $alpha: 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1x);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow:
  0 10px 20px rgba(0, 0, 0, 0.5),
  inset 0 2px 0 rgba(255, 255, 255, 0.7),
  inset 0 -2px 0 rgba(255, 255, 255, 0.1);

  &__day {
    display: grid;
    grid-template-columns: 1fr 1fr 1.7fr 1.7fr;
    border-bottom: solid 3px rgba(255, 255, 255, 0.2);

        &:last-child {
      border-bottom: none;
    }
  }


  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 5px 10px;
  }
}
</style>