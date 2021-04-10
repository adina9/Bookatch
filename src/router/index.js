import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '@/views/BookApp.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BookDetails from '@/views/BookDetails.vue'
import ReviewAdd from '@/cmps/ReviewAdd.vue'
import AboutModal from '@/cmps/AboutModal.vue'
import User from '@/views/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: '/about/modal',
        component: AboutModal
      }
    ]
  },
  {
    path: '/book',
    component: BookApp
  },
  {
    path: '/book/:bookId',
    component: BookDetails
  },
  {

    path: '/user',
    component: User
  }

]

const router = new VueRouter({
  routes
})

export default router
