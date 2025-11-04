import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import homePage from "../client/views/homePage.vue"
import createTable from '../client/views/createTable.vue'
import viewTables from '../client/views/viewTables.vue'
const routes: RouteRecordRaw[] = [
  {path: "/",
    name: "Home",
    component: homePage
  },
  {path: "/createTable",
    name: "Create Table",
    component: createTable
  },
  {path: "/viewTables",
    name: "Vew Tables",
    component: viewTables
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
