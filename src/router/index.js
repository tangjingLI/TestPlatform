import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Choice from '../views/Choice'
import Running from '../views/Running'
import Result from '../views/Result'
import Fun from '../views/Fun'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'fun',
        name: 'Fun',
        component: Fun
      },
      {
        path: 'choice',
        name: 'Choice',
        component: Choice
      },
      {
        path: 'running',
        name: 'Running',
        component: Running
      },
      {
        path: 'result',
        name: 'Result',
        component: Result
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home/fun'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
