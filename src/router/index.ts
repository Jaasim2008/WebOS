import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import loginView from '../views/loginView.vue'
import mobileBarrier from '@/components/mobileBarrier.vue'
import appView from '../views/app.vue'
import mainmenuComp from '../components/mainMenu.vue'
import notePad from '../components/notePad.vue'
import calcCulator from '@/components/calcCulator.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/mobileBarrier',
    name: 'mobileBarrier',
    component: mobileBarrier
  },
  {
    path: '/app',
    name: 'app',
    component: appView
  },
  {
    path: '/mainmenu',
    name: 'mainmenuComp',
    component: mainmenuComp
  },
  {
    path: '/notepad',
    name: 'notePad',
    component: notePad
  },
  {
    path: '/calculator',
    name: 'calcCulator',
    component: calcCulator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
