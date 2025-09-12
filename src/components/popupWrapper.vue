<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <transition name="slide-up">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/50 flex items-end z-50"
      @click.self="close"
    >
      <div
        class="bg-white w-full h-[80vh] rounded-t-2xl shadow-lg overflow-y-auto relative"
      >
        <button
          class="absolute top-3 right-3 text-gray-600 text-xl"
          @click="close"
        >
          ✕
        </button>

        <slot />
      </div>
    </div>
  </transition>
</template>


<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>