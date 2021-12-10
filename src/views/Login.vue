<template>
    <div>
        <login-form :tool-id="formId" />
    </div>
</template>

<script>
import { LoginForm } from "@userfront/vue";
import { getConfig } from "@/modules/constants";

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            formId: getConfig().USERFRONT_LOGIN_FORM_ID
        };
    }
};
</script>
