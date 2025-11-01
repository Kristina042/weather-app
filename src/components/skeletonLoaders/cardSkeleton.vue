<script setup lang="ts">

defineProps<{
  text?: string
}>()

</script>

<template>
  <div class="weather-card-skeleton">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.weather-card-skeleton {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  background: linear-gradient(
  100deg,
  rgba(255, 255, 255, 0.05) 0%,
  rgba(255, 255, 255, 0.256) 50%,
  rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 4s infinite linear;

  // Optional styling to match your frosted-glass theme
  background-color: rgba($color: $dark-blue, $alpha: 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1x);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow:
  0 10px 20px rgba(0, 0, 0, 0.5),
  inset 0 2px 0 rgba(255, 255, 255, 0.7),
  inset 0 -2px 0 rgba(255, 255, 255, 0.1);
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>