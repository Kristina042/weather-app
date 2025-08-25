

<style scoped>
.sun-wrapper{
    color: yellow;
    width: 60px;
    height: 60px;
}

.hehe {
    animation: spin 2s linear infinite;
}


@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>


<template>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200" role="img" aria-labelledby="titleDesc">
  <title id="titleDesc">Cute smiling sun (centered)</title>
  <defs>
    <radialGradient id="g" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fff18a"/>
      <stop offset="60%" stop-color="#ffd24a"/>
      <stop offset="100%" stop-color="#ffb93b"/>
    </radialGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur"/>
      <feOffset in="blur" dx="0" dy="2" result="off"/>
      <feMerge>
        <feMergeNode in="off"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Rays (centered at 100,100) -->
  <g fill="#ffd24a" transform="translate(100,100)">
    <g transform="rotate(0)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(45)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(90)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(135)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(180)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(225)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(270)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
    <g transform="rotate(315)"><rect x="-8" y="-78" width="16" height="34" rx="8"/></g>
  </g>

  <!-- Sun body (now centered at 100,100) -->
  <g filter="url(#soft)">
    <circle cx="100" cy="100" r="46" fill="url(#g)" stroke="#ffb03a" stroke-width="2"/>
  </g>

  <!-- Face (shifted down 10px to match center) -->
  <ellipse cx="86" cy="92" rx="5" ry="6" fill="#3b2a20"/>
  <ellipse cx="114" cy="92" rx="5" ry="6" fill="#3b2a20"/>
  <path d="M80 108 Q100 125 120 108" stroke="#3b2a20" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="72" cy="102" r="6" fill="#ffb0a6" opacity="0.9"/>
  <circle cx="128" cy="102" r="6" fill="#ffb0a6" opacity="0.9"/>
</svg>

</template>
