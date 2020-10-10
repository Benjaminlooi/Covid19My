import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './registerServiceWorker'

createApp({
  vuetify,
  render: () => h(App)
}).use(router).use(store).mount("#app");
