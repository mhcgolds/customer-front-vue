<template>
    <IndexHeader :title="t('customers.create-title')" v-show="!id"></IndexHeader>
    <IndexHeader :title="t('customers.update-title')" v-show="id"></IndexHeader>

    <FormBase :id="id" :message="message" :isError="isError" entityName="customer">
        <label class="block">
            <span class="text-gray-700">{{ t('customers.form.name') }}</span>
            <input type="text" name="name" maxlength="255" class="form-input mt-1 block w-96" required="required">
        </label>
        <label class="block">
            <span class="text-gray-700">{{ t('customers.form.country') }}</span>
            <input type="text" name="country" maxlength="255" class="form-input mt-1 block w-96" required="required">
        </label>
    </FormBase>
</template>

<script>
import { getI18n } from '../../app/i18n';
import IndexHeader from '../Layout/IndexHeader.vue'
import FormBase from '../Layout/FormBase.vue'
import { computed, ref, inject } from 'vue'

export default {
    name: 'CustomerForm',
    props: {
        id: {
            type: Number,
            default: 0
        },
        submitLabel: {
            type: String
        },
        message: {
            type: String,
            default: null
        },
        isError: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        submitLabel() {
            return (this.id ? this.t('form.submit-update') : this.t('form.submit-create'));
        }
    },
    components: {
        IndexHeader,
        FormBase
    },
    setup() {
        return getI18n();
    }
}
</script>