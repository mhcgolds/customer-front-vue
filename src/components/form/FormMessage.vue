<template>
    <div class="bg-green-100 p-2 mt-2 mb-2 w-fit" v-show="message && isError">{{ message }}</div>
    <div class="bg-red-100 p-2 mt-2 mb-2 w-fit" v-show="message && !isError">{{ message }}</div>
</template>

<script lang="ts">
export default {
    name: 'FormMessage',
    props: {
        message: {
            type: String,
            required: true
        },
        isError: {
            type: Boolean
        }
    },
    computed: {
    },
    components: {
    }
}
</script>