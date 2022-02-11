import { boot } from 'quasar/wrappers'
import store from 'src/myStore'

export default boot(({ router }) => {
  router.afterEach((to, from) => {
    let fromRootPath = to.path.split('/')[1];
    let toRootPath = from.path.split('/')[1];
    if (fromRootPath !== toRootPath) {
      //dont use page transition
      store.state.usePageTransition = false;
    } else {
      //use page transition
      store.state.usePageTransition = true;
    }
  })
})
