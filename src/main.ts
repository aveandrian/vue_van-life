import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MainLayoutVue from '@/components/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import VansPageLayout from '@/pages/Vans/VansPageLayout.vue'
import LoginPage from '@/pages/LoginPage.vue'
import VansDetailPageLayout from '@/pages/Vans/VansDetailPageLayout.vue'
import HostPageLayout from './pages/Host/HostPageLayout.vue'
import FallbackPage from '@/pages/FallbackPage.vue'
import HostDashboardLayout from '@/pages/Host/HostDashboardLayout.vue'
import HostIncome from '@/pages/Host/HostIncome.vue'
import HostReviews from '@/pages/Host/HostReviews.vue'
import HostVansLayout from '@/pages/Host/HostVansLayout.vue'
import HostVanDetailsLayout from '@/pages/Host/HostVanDetailsLayout.vue'
import HostVanDetailsGeneral from '@/pages/Host/HostVanDetailsGeneral.vue'
import HostVanDetailsPricing from '@/pages/Host/HostVanDetailsPricing.vue'
import HostVanDetailsPhotos from '@/pages/Host/HostVanDetailsPhotos.vue'
import { makeServer } from '@/server'
import '@/style.css'

makeServer()

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayoutVue,
      children: [
        { path: '', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/vans', component: VansPageLayout },
        { path: '/login', component: LoginPage },
        {
          path: '/vans/:id',
          component: VansDetailPageLayout,
        },
        {
          path: '/host',
          name: 'HostPage',
          component: HostPageLayout,
          beforeEnter: (to) => {
            const isLoggedIn = localStorage.getItem('loggedin')
            if (!isLoggedIn) {
              return `login?message=You must log in first.&redirectTo=${to.path}`
            }
            return true
          },
          children: [
            {
              path: '',
              name: 'HostDashboardLayout',
              component: HostDashboardLayout,
            },
            { path: 'income', name: 'HostIncome', component: HostIncome },
            { path: 'reviews', name: 'HostReviews', component: HostReviews },
            { path: 'vans', name: 'HostVans', component: HostVansLayout },
            {
              path: '/host/vans/:id',
              name: 'HostVanDetailsLayout',
              component: HostVanDetailsLayout,
              children: [
                {
                  path: '',
                  name: 'HostVanDetailsGeneral',
                  component: HostVanDetailsGeneral,
                },
                {
                  path: 'pricing',
                  name: 'HostVanDetailsPricing',
                  component: HostVanDetailsPricing,
                },
                {
                  path: 'photos',
                  name: 'HostVanDetailsPhotos',
                  component: HostVanDetailsPhotos,
                },
              ],
            },
          ],
        },

        { path: '/:pathMatch(.*)*', component: FallbackPage, props: true },
      ],
    },
  ],
})
app.use(router)
app.mount('#app')
