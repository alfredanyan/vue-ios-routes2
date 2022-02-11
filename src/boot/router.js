import { boot } from 'quasar/wrappers'
import store from 'src/myStore'

export default boot(({ router }) => {
  router.afterEach((to, from) => {
    let fromRootPath = `/${to.path.split('/')[1]}`;
    let toRootPath = `/${from.path.split('/')[1]}`;
    console.log('toRootPath: ',toRootPath)

    // navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      //dont use page transition
      store.state.usePageTransition = false;
      //diff section
    } else {
      //use page transition
      //same section navigated
      store.state.usePageTransition = true;
    }
    //update to property on nav item whenever we change route
    updateNavItem();
    function updateNavItem() {
      const navItemIndex = store.state.navItems.findIndex(navItem => navItem.root === toRootPath)
      console.log('navItemIndex', navItemIndex)
    }
  })
})
