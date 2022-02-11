<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn
        to="/home"
        label="Home"
        />
      </template>
      <template #title>
        Our Child App
      </template>
    </page-header>
    <page-body>
      <template #content>
        Our child page content.
      </template>
    </page-body>
  </page>
</template>

<script>

export default {
  name: 'Child'
}
</script>
