<template>
  <Teleport to="body">
    <div class="popup-wrapper__wrapper">
      <div class="popup-wrapper__overlay"/>
      <div class="popup-wrapper">
        <div class="popup-wrapper__close" @click="$emit('close')">X</div>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup >
import { onBeforeUnmount, onMounted, Teleport } from 'vue';

defineEmits<{
  (event: 'close'): void
}>()

onMounted(() => {
  document.body.style.overflow = "hidden";
})

onBeforeUnmount(() => {
  document.body.style.overflow = "";
})
</script>

<style scoped lang="scss">
.popup-wrapper {
  background: rgba(255, 214, 255, 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  width: 100%;
  height: 90vh;
  position: fixed;
  bottom: 0px;

  padding: 16px 24px;

  overflow-y: scroll;

  border-radius: 20px 20px 0 0;

  &__overlay {
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
  }

  &__wrapper {
    width: 100%;
    height: 100%;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
  }

  &__close {
    background: rgba(255, 255, 255, 0.3);
    font-size: 20px;
    margin-bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  @media (min-width: 1200px) {
    max-width: 700px;
   }
}


.popup-detailed-day {
  display: flex;
  flex-direction: column;

  gap: 600px;
}
</style>