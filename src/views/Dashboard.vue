<template>
  <Layout>
    <IndexHeader :title="t('home.view-title')" />
  </Layout>
</template>
  
<script>
import { getI18n } from '../app/i18n';
import Layout from './Layout/Layout.vue';
import IndexHeader from './Layout/IndexHeader.vue';

export default {
    name: 'Dashboard',
    props: {
        title: {
            type: String,
        }
    },
    computed: {
    },
    components: {
        IndexHeader,
        Layout
    },
    setup() {
        return getI18n();
    }
  }
</script>