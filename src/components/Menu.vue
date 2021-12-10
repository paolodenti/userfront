<template>
    <div id="nav" v-if="isLoggedIn">
        <router-link to="/dashboard">Dashboard</router-link> |
        <a href="#" @click="logout" class="router-link-active">Logout</a>
    </div>
</template>

<script>
import Userfront from "@userfront/vue";

export default {
    name: "Menu",

    methods: {
        logout() {
            Userfront.logout();
        }
    },

    computed: {
        isLoggedIn() {
            return !!Userfront.accessToken();
        }
    }
};
</script>
