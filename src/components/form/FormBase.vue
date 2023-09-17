<template>
    <FormMessage :message="message" :isError="isError" />

    <form ref="formElement" v-on:submit.prevent="onSubmit($event)" :action="getActionUrl(id)" :id="id" :entityName="entityName">
        <div class="grid grid-cols-1 gap-6">
            <slot></slot>
            <FormButtonSubmit :label="this.t('form.submit-create')" v-show="!id" />
            <FormButtonSubmit :label="this.t('form.submit-update')" v-show="id" />
            <FormButtonBack :label="t('form.back')" />
        </div>
    </form>
</template>

<script>
import { getI18n } from '../../app/i18n';
import Form from '../../app/form';
import FormButtonSubmit from './FormButtonSubmit.vue'
import FormButtonBack from './FormButtonBack.vue'
import FormMessage from './FormMessage.vue'
import { ref } from 'vue'

let form;

export default {
    name: 'FormBase',
    props: {
        id: {
            type: Number,
            default: 0
        },
        message: {
            type: String,
            default: null
        },
        isError: {
            type: Boolean,
            default: false
        },
        entityName: {
            type: String
        },
    },
    computed: {
    },
    components: {
        FormMessage,
        FormButtonBack,
        FormButtonSubmit
    },
    mounted() {
        // TODO: Change url to env variable
        form = new Form(this.formElement, 'http://127.0.0.1:8081/api');

        form.bindOnBeforeSubmit(() => {
            // Show loading
        });

        form.bindOnRequestComplete(() => {
            // Hide loading
        });

        form.bindOnRequestSuccess(() => {
            // Show success message and navigates back to main screen
        });

        form.bindOnRequestError(() => {
            // Show error message
        });
    },
    setup() {
        const formElement = ref(null);
        const { t, n } = getI18n();
        return { t, n, formElement };
    },
    methods: {
        onSubmit(event) {
            form.onSubmit(event);
        },
        getActionUrl(id) {
            // Set 'update' url for update and 'store' for create
            return this.entityName + '/' + (id ? `update/${id}` : 'store');
        }
    }
}
</script>