<template>
    <div>
        <password-reset-form tool-id="rmbdbm" />
    </div>
</template>

<script>
import { PasswordResetForm } from "@userfront/vue";

export default {
    components: {
        PasswordResetForm
    },
    data() {
        return {
            formId: this.$store.getters.loginFormId
        };
    }
};
</script>
