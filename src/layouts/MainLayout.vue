<template>
  <q-layout view="lHh Lpr lFf">
    

    <q-footer bordered class="bg-white text-primary">

      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >

        <q-route-tab
        to="/"
        label="Home"
        icon="las la-home"
        />

      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  setup() {},
};
</script>
