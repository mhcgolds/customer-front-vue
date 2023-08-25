<template>
    <h1 class="text-3xl">{{ title }}</h1>
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
    },
    setup(props, ctx) {
        console.log('setup header', props, ctx.attrs);
    }
}
</script>