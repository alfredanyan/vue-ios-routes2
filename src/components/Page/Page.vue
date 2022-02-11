<template>
  <div class="page absolute-top fit bg-white">
    <slot />
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Page'
  };
</script>

PageHeader