<template>
  <div class="page absolute-top fit bg-white shadow-4">
    <div class="page-nudger fit" :class="{ 'nudge-left': hasActiveChildPage }">
      <slot />
    </div>
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="store.state.usePageTransition"
      >
        <keep-alive>
          <component
          @pageActivated="hasActiveChildPage=true"
          @pageDeactivated="hasActiveChildPage=false"
           :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { ref, onActivated, onDeactivated } from "vue";
import store from 'src/myStore'

export default {
  name: "Page",
  setup(props, { emit }) {
    let hasActiveChildPage = ref(false);

    onActivated(() => {
      emit('page-activated')
    });

    onDeactivated(() => {
            emit('page-deactivated')
    });

    return {
      store,
      hasActiveChildPage,
    };
  },
};
</script>
