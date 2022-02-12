<template>
  <page>
    <page-header>
      <template #title> Images </template>
    </page-header>
    <page-body>
      <template #content>
        <div class="row">
            <q-img
              v-for="image in store.state.images"
              :key="image.id"
              :src="image.url"
              :ratio="1"
              class="col-6"
            />
        </div>
      </template>
    </page-body>
  </page>
</template>

<script>
import store from "src/myStore";
export default {
  name: "Images",
  setup() {
    return {
      store,
    };
  },
};
</script>
