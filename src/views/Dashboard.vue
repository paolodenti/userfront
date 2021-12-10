<template>
    <div class="dashboard">
        <h1>Dashboard</h1>

        <h2>User roles</h2>
        {{ roles }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Dashboard",
    computed: {
        ...mapGetters(["roles"])
    }
};
</script>
