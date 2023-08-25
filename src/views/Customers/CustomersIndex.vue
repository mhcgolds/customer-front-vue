<template>
    <IndexHeader :title="t('customers.view-title')" />
</template>

<script>
import { getI18n } from '../../app/i18n';
import IndexHeader from '../Layout/IndexHeader.vue'

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
        IndexHeader
    },
    setup() {
        return getI18n();
    }
  }
</script>