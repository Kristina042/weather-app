
<style scoped>
.sun-wrapper{
  color: rgb(255, 249, 127);
  width: 36px;
  height: 36px;
}

</style>


<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="currentColor"
  class="sun-wrapper"
>
  <!-- Sun center -->
  <circle cx="32" cy="32" r="14" />

  <!-- Rays -->
  <line x1="32" y1="4"  x2="32" y2="14" stroke="currentColor" stroke-width="4" />
  <line x1="32" y1="50" x2="32" y2="60" stroke="currentColor" stroke-width="4" />
  <line x1="4"  y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="4" />
  <line x1="50" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width="4" />

  <line x1="12" y1="12" x2="20" y2="20" stroke="currentColor" stroke-width="4" />
  <line x1="44" y1="44" x2="52" y2="52" stroke="currentColor" stroke-width="4" />
  <line x1="12" y1="52" x2="20" y2="44" stroke="currentColor" stroke-width="4" />
  <line x1="44" y1="20" x2="52" y2="12" stroke="currentColor" stroke-width="4" />
</svg>

</template>
