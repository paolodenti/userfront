<template>
    <div>
        <login-form :tool-id="formId" />
    </div>
</template>

<script>
import { LoginForm } from "@userfront/vue";

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            formId: this.$store.getters.config?.USERFRONT_LOGIN_FORM_ID
        };
    }
};
</script>
