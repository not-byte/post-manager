<script lang="ts">
  export let className = "";
  export let animate: boolean = false;
  export let gradient: boolean = false;
</script>

<svg id="notByte" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" class={className + (animate ? ' [&_.cls-1]:!animate-[logoAnimation_5s]' : '') + (gradient ? ' [&_.cls-1]:!fill-[url(#color-gradient)]' : '')}>
  <linearGradient id="color-gradient" x2="1" y2="1">
    <stop offset="0%" stop-color="rgba(240,132,97,1.00)" />
    <stop offset="40%" stop-color="rgba(129,81,156,1.00)" />
    <stop offset="69%" stop-color="rgba(234,86,87,1.00)" />
    <stop offset="100%" stop-color="rgba(240,132,97,1.00)" />
  </linearGradient>
  <g id="white">
    <g id="background">
      <g>
        <path class="cls-1" d="M.01,0v2048h2047.97V0H.01ZM585.16,1755.4h-292.57v-292.55h292.57l-292.57-292.57V292.57h292.57v1462.83ZM1755.44,877.71h-292.6l292.6,292.57v585.12h-877.71V292.57h585.12l292.6,292.57v292.57Z"/>
        <rect class="cls-1" x="1170.3" y="1170.29" width="292.55" height="292.57"/>
        <rect class="cls-1" x="1170.3" y="585.14" width="292.55" height="292.57"/>
      </g>
    </g>
  </g>
</svg>

<style lang="postcss">
    .cls-1 {
        fill: currentColor;
        stroke-width: 0;
    }
</style>