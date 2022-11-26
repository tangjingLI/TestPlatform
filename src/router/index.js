import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Choice from '../views/Choice'
import Running from '../views/Running'
import Result from '../views/Result'
import Path from '../views/Path'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Path',
        component: Path
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
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
