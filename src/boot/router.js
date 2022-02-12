import { boot } from 'quasar/wrappers'
import store from 'src/myStore'

//store router instance
let routerInstance = null

export default boot(({ router }) => {
  routerInstance = router
  router.afterEach((to, from) => {
    let toRootPath = `/${to.path.split('/')[1]}`;
    let fromRootPath = `/${from.path.split('/')[1]}`;

    // navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      //dont use page transition
      store.state.usePageTransition = false;
      //diff section
    } else {
      //use page transition
      //same section navigated
      store.state.usePageTransition = true;
      //allow go back to parent page within section but
      //avoid loop of death
      if (from.path === to.path && to.path !== toRootPath) {
        router.push(toRootPath);
      }
    }
    //update to property on nav item whenever we change route
    updateNavItem();
    function updateNavItem() {
      const navItemIndex = store.state.navItems.findIndex(navItem => navItem.root === toRootPath)
      console.log('navItemIndex', navItemIndex)
    }
  })
})

export { routerInstance }