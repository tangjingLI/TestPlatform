import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import eventBus from 'vue3-eventbus'
import Countdown from 'vue3-flip-countdown'
import "lib-flexible-computer"


createApp(App).use(Countdown).use(eventBus).use(Antd).use(store).use(router).mount('#app')
