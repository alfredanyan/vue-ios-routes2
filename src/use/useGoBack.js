import { routerInstance } from 'boot/router'
export default function useGoBack() {
    let pathArray = routerInstance.currentRoute.value.path.split('/')
    if (pathArray.length > 2) {
        // pathArray.splice((pathArray.length) -1, 1)
        pathArray.pop()
        routerInstance.push(pathArray.join('/'));
    }
}