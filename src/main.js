import Vue from "vue";
import App from "./App.vue";
import Userfront from "@userfront/vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

(async () => {
    // preload config
    const userfrontConfig = await fetch("/userfront.json");
    const config = await userfrontConfig.json();

    const userfrontKey = await fetch("/userfront.key");
    config.USERFRONT_PUBLIC_KEY = await userfrontKey.text();

    store.commit("setConfig", config);

    Userfront.init(config.USERFRONT_TENANT_ID);

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app");
})();
