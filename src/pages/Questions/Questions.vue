<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn label="Home" />
      </template>
      <template #title> Questions </template>
    </page-header>
    <page-body>
      <template #content>
      <div class="q-pa-md">
        <q-list bordered separator>
          <q-item clickable v-ripple to="/questions/answers">
            <q-item-section>How do I get rich?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary"   name="chevron_right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/questions/answers">
            <q-item-section >How do I get strong?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary"   name="chevron_right" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      </template>
    </page-body>
  </page>
</template>

<script>
export default {
  name: "Questions",
};
</script>
