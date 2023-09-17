<template>
    <h1 class="text-3xl inline-block">{{ title }}</h1>
</template>

<script lang="ts">
export default {
    name: 'IndexHeader',
    props: {
        title: {
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