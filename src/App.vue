<template>
    <Teleportation />
    <MultipleVModelBindings />
    <hr><br>
</template>

<script>
    import Teleportation from './sections/Teleportation.vue'
    import MultipleVModelBindings from './sections/MultipleVModelBindings.vue'
    export default {
        name: 'App',

        components: {
            Teleportation,
            MultipleVModelBindings,
        }
    }
</script>
