import Vue from "vue";
import Vuex from "vuex";

import jwt from "jsonwebtoken";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: null,
        config: null
    },
    mutations: {
        setConfig(state, config) {
            state.config = config;
        },
        setAuth(state, token) {
            try {
                if (state.config === null) {
                    throw new Error("Config not set");
                }
                const auth = jwt.verify(token, state.config?.USERFRONT_PUBLIC_KEY);
                state.auth = auth?.authorization[state.config?.USERFRONT_TENANT_ID];
            } catch (error) {
                state.auth = null;
            }
        }
    },
    getters: {
        auth: state => state.auth,
        roles: state => state.auth?.roles,
        config: state => state.config
    }
});
