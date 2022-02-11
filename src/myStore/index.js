import { reactive } from 'vue'
const state = reactive({
    navItems: [
        {
            root: '/home',
            to: '/home',
            icon: 'las la-home',
            label: 'Home'
        },
        {
            root: '/questions',
            to: '/questions',
            icon: 'las la-question-circle',
            label: 'Questions'
        }
    ],
    usePageTransition: false
})

const store = {
    state
}

export default store