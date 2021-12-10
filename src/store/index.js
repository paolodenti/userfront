import Vue from "vue";
import Vuex from "vuex";

import jwt from "jsonwebtoken";

import { getConfig } from "@/modules/constants";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: null
    },
    mutations: {
        setAuth(state, token) {
            try {
                const auth = jwt.verify(token, getConfig().USERFRONT_PUBLIC_KEY);
                state.auth = auth?.authorization[getConfig().USERFRONT_TENANT_ID];
            } catch (error) {
                state.auth = null;
            }
        }
    },
    getters: {
        getAuth: state => state.auth
    }
});
