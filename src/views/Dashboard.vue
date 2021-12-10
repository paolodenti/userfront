<template>
    <div class="dashboard">
        <h1>This is an dashboard page</h1>

        {{ roles }}
    </div>
</template>

<script>
export default {
    name: "Dashboard",

    computed: {
        roles() {
            return this.$store.getters.getAuth?.roles;
        }
    }
};
</script>
