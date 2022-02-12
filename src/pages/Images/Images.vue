<template>
  <page>
    <page-header>
      
      <template #title> Images </template>
    </page-header>
    <page-body>
      <template #content>
        <div class="row">
          <router-link
              v-for="image in store.state.images"
              :key="image.id"
              class="col-6"
              :to="`/images/${ image.id }`"
          >
            <q-img
              :src="image.url"
              :ratio="1"
            />
          </router-link>
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
