<template>
    <FormMessage :message="message" :isError="isError" />

    <form ref="form" v-on:submit.prevent="onSubmit($event)" :action="getActionUrl(id)">
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
import FormButtonSubmit from '../Layout/FormButtonSubmit.vue'
import FormButtonBack from '../Layout/FormButtonBack.vue'
import FormMessage from '../Layout/FormMessage.vue'
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
    setup(props) {
        form = new Form();
        // TODO: Change url to env variable
        form.setApiUrl('http://127.0.0.1:8081/api');

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

        form.setEntityId(props.id);
        return getI18n();
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