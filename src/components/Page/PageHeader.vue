<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered bg-white text-dark"
  >
    <div class="q-toolbar row no-wrap items-center">
      <div class="q-toolbar__title ellipsis text-center">
        <slot name="title" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>
