<template>
    <div class="align-top">
        <IndexHeader :title="t('customers.view-title')" />
        <IndexButtonCreate :label="t('customers.create-label')" url="/customers/create" />
    </div>

    Here goes the grid
</template>

<script>
import { getI18n } from '../../app/i18n';
import IndexHeader from '../Layout/IndexHeader.vue'
import IndexButtonCreate from '../Layout/IndexButtonCreate.vue'

export default {
    name: 'CustomerIndex',
    props: {
        title: {
            type: String,
        }
    },
    computed: {
    },
    components: {
        IndexHeader,
        IndexButtonCreate
    },
    setup() {
        return getI18n();
    }
}
</script>