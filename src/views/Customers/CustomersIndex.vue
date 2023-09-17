<template>
    <Layout>
        <div class="align-top">
            <IndexHeader :title="t('customers.view-title')" />
            <IndexButtonCreate :label="t('customers.create-label')" url="/customers/create" />
        </div>

        <div class="bg-red-100 p-2 mt-2 mb-2 w-fit" v-show="gridError">{{ gridError }}</div>

        <table class="border w-full mt-2">
            <colgroup>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th class="border px-5">{{ t('customers.grid.name') }}</th>
                    <th class="border px-5">{{ t('customers.grid.country') }}</th>
                    <th class="border px-5 w-64">{{ t('grid.actions') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in gridData">
                    <td class="border">{{ item.name }}</td>
                    <td class="border">{{ item.country }}</td>
                    <td class="border text-center">
                        <GridActionButton type="1" label="Edit" :url="`customers/edit/${item.id}`"></GridActionButton>
                        <GridActionButton type="2" label="Delete" :url="`customers/delete/${item.id}`"></GridActionButton>
                    </td>
                </tr>
            </tbody>
        </table>
    </Layout>
</template>

<script>
import { getI18n } from '../../app/i18n';
import Layout from '../Layout/Layout.vue'
import IndexHeader from '../../components/index/IndexHeader.vue'
import IndexButtonCreate from '../../components/index/IndexButtonCreate.vue'
import GridActionButton from '../../components/grid/GridActionButton.vue'
import { ref } from 'vue';

const apiUrl = 'http://127.0.0.1:8081/api';

export default {
    name: 'CustomerIndex',
    props: {
        title: String,
        hasGridError: Boolean
    },
    computed: {
    },
    methods: {
        loadGridData: function() {
            fetch(`${apiUrl}/customer/list`)
                .then(data => data.json())
                .then(function(data) {
                    this.gridData = data;
                }.bind(this))
                .catch(function(e) {
                    this.gridError = 'Erro na grid';
                }.bind(this));
        }
    },
    created() {
        this.loadGridData();
    },
    components: {
        Layout,
        IndexHeader,
        GridActionButton,
        IndexButtonCreate,
    },
    setup() {
        let gridError = ref(''),
            gridData = ref([]);

        const { t } = getI18n();

        return {
            t,
            gridError,
            gridData
        };
    }
}
</script>