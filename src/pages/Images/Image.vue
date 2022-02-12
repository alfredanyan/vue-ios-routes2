<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn label="Images" />
      </template>
      <template #title> Image detail page </template>
    </page-header>
    <page-body>
      <template #content>
        <transition
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slower"
        >
          <div class="imageContainer" v-if="image">
            <q-img
            class="no-pointer-events"
            :src="image.url"
            no-transition 
            no-spinner />
            <div class="q-pa-lg">
              <div class="caption flex-center text-h5 q-mb-md">
                {{ image.caption }}
              </div>
              <p>
                Lorem dolor amet consectetur adipisicing elit. Magni
                explicabo nulla, expedita quod quos quas? Blanditiis doloremque
                dicta fuga harum culpa mollitia ducimus? Animi adipisci sit
                sapiente dolor repellendus eaque!
              </p>
            </div>
          </div>
        </transition>
      </template>
    </page-body>
  </page>
</template>

<script>
import { onActivated, onDeactivated, ref } from "vue";
import { useRoute } from "vue-router";
import store from "src/myStore";
export default {
  name: "Image",
  setup() {
    let image = ref();

    onActivated(() => {
      let route = useRoute();
      let imageId = route.params.id;
      image.value = store.getters.getImage(imageId);
    });

    onDeactivated(() => {
      image.value = null;
    });
    return {
      store,
      image,
    };
  },
};
</script>
