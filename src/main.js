import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import eventBus from 'vue3-eventbus'

createApp(App).use(eventBus).use(Antd).use(store).use(router).mount('#app')
