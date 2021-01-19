import Vue from 'vue'
import VueRouter from 'vue-router'
import HomepageView from "@/views/HomepageView"
import ContactView from "@/views/ContactView"
import FlyView from "@/views/FlyView"
import AccommodationView from "@/views/AccommodationView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/fr'
  },
  {
    path: '/:lang',
    component: { render(c){ return c('router-view')} },
    children: [
      {
        path: '/',
        name: 'home',
        component: HomepageView
      },
      {
        path: 'contact-us',
        name: 'contact',
        component: ContactView
      },
      {
        path: 'fly',
        name: 'fly',
        component: FlyView
      },
      {
        path: 'accommodation',
        name: 'accommodation',
        component: AccommodationView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
