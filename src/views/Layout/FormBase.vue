<template>
    <FormMessage :message="message" :isError="isError" />

    <form ref="form" v-on:submit.prevent="onSubmit($event)" :action="getActionUrl()">
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

const form = new Form();
form.setApiUrl('api');

form.bindOnBeforeSubmit(() => {
    // Show loading
});

form.bindOnRequestComplete(() => {
    // Hide loading
});

export default {
    name: 'FormBase',
    props: {
        id: {
            type: Number,
            default: null
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
        }
    },
    computed: {
    },
    components: {
        FormMessage,
        FormButtonBack,
        FormButtonSubmit
    },
    setup(props) {
        form.setEntityId(props.id);
        return getI18n();
    },
    methods: {
        onSubmit(event) {
            form.onSubmit(event);
        },
        getActionUrl() {
            // Set 'update' url for update and 'store' for create
            return this.entityName + '/' + (this.id ? `update/${this.id}` : 'store');
        }
    }
}
</script>