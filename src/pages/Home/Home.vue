<template>
  <page>
    <page-header>
      <template #title>
        Our App
      </template>
    </page-header>
    <page-body>
      <template #content>

        <q-btn
        to="/home/child"
        label="go to child"
        class="full-width q-mb-md"
        rounded
        unelevated
        color="primary"
        />

        <p v-for="n in 20" :key="n">
        Our new content.
        </p>
        
      </template>
    </page-body>
  </page>
</template>

<script>

export default {
  name: 'Home'
}
</script>
