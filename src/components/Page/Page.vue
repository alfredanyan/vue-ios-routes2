<template>
  <div class="page absolute-top fit bg-white shadow-4">
    <div
      v-touch-swipe.mouse.right="handleSwipeRight"
      class="page-nudger fit"
      :class="{ 'nudge-left': hasActiveChildPage }"
    >
      <slot />
    </div>
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="store.state.usePageTransition && !store.state.iosBrowserSwipingBack"
      >
        <keep-alive>
          <component
            @pageActivated="hasActiveChildPage = true"
            @pageDeactivated="hasActiveChildPage = false"
            :is="Component"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { ref, onActivated, onDeactivated, computed } from "vue";
import { useQuasar } from "quasar";
import store from "src/myStore";
import useGoBack from "src/use/useGoBack";

export default {
  name: "Page",
  setup(props, { emit }) {
    // quasar
    let $q = useQuasar();

    let hasActiveChildPage = ref(false);

    const handleSwipeRight = () => {
      if (isIosBrowser) {
        //disable transitions if in ios browser to use ios browser transition
        //capabilities to avoid conflicts
        store.state.iosBrowserSwipeBack = true;
      } else {
        useGoBack();
      }
    };

    onActivated(() => {
      emit("page-activated");
    });

    onDeactivated(() => {
      emit("page-deactivated");
      if (isIosBrowser) {
        //once back to home page
        store.state.iosBrowserSwipeBack = false;
      }
    });

    //detect ios device using browser (ie not cordova or capacitor)

    const isIosBrowser = computed(() => {
      if (
        $q.platform.is.ios &&
        !$q.platform.is.cordova &&
        !$q.platform.is.capacitor
      ) {
        return true;
      } else {
        return false;
      }
    });

    return {
      store,
      useGoBack,
      hasActiveChildPage,
      handleSwipeRight,
    };
  },
};
</script>
