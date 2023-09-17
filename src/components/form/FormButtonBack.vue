<template>
    <button class="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm w-40 inline-block" type="button" v-on:click="back()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ label }}
    </button>
</template>

<script lang="ts">
export default {
    name: 'FormButtonBack',
    props: {
        label: {
            type: String,
            required: true
        }
    },
    computed: {
    },
    components: {
    },
    methods: {
        back: () => {
            debugger;
            this.$router.go(-1);
        }
    }
}
</script>