<template>
    <div class="px-4 py-1 ml-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm w-48 inline-block">
        <router-link :to="url">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ label }}
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'IndexButtonCreate',
    props: {
        label: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    computed: {
    },
    components: {
    }
}
</script>