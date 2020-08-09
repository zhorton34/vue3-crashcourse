<template>
    <Teleportation />

    <h1 class="text-4xl">Multiple v-model Bindings</h1>
    <hr>
    <VModelMultiplied
        v-model:name="building.name"
        v-model:units="building.units"
        v-model:height="building.height"
        v-model:location="building.location"
    />
    <br><hr>
    <i>
        "Located in {{ building.location }}, the {{ building.name }} stands {{ building.height }} {{ building.units }} tall."
    </i>
    <hr>

    <div class="flex justify-center">
        <button class="m-2" @click="building.name = ''">Clear Building Name</button>
        <button class="m-2" @click="building.units = ''">Clear Building Units</button>
        <button class="m-2" @click="building.height = ''">Clear Building Height</button>
        <button class="m-2" @click="building.location = ''">Clear Building Location</button>
    </div>
</template>

<script>
    import Teleportation from './sections/Teleportation.vue'
    import VModelMultiplied from './components/VModelMultiplied.vue'

    export default {
        name: 'App',

        data: () => ({
            building: {
                name: 'Empire State Building',
                location: 'New York, New York',
                height: '100',
                units: 'stories',
            }
        }),

        components: {
            Teleportation,
            VModelMultiplied,
        }
    }
</script>
