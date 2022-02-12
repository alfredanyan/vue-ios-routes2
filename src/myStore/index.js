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
        },
        {
            root: '/images',
            to: '/images',
            icon: 'las la-image',
            label: 'Images'
        }
    ],
    images: [
        {
            id: 'id1',
            url: 'images/1.jpg',
            caption: 'Luscious Greens'
        },
        {
            id: 'id2',
            url: 'images/2.jpg',
            caption: 'Enchanted Tower'
        },
        {
            id: 'id3',
            url: 'images/3.jpg',
            caption: 'Road Bridge'
        },
        {
            id: 'id4',
            url: 'images/4.jpg',
            caption: 'City Wall'
        },
        {
            id: 'id5',
            url: 'images/5.jpg',
            caption: 'Rooftop'
        },
        {
            id: 'id6',
            url: 'images/6.jpg',
            caption: 'Alley Portugal'
        },
    ],
    usePageTransition: false,
    iosBrowserSwipeBack: false
})
const getters = {
    getImage(imageId) { 
        return state.images.filter(image => image.id === imageId)[0]
    }

}
const store = {
    state,
    getters
}

export default store