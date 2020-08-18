<template>
    <VModelMultiplied
        v-model:name="building.name"
        v-model:units="building.units"
        v-model:height="building.height"
        v-model:location="building.location"
    />

    <div class="my-8">
        <i>"Located in {{ building.location }}, the {{ building.name }} stands {{ building.height }} {{ building.units }} tall."</i>
    </div>

    <div class="flex justify-center">
        <button class="m-2" @click="building.name = ''">Clear Building Name</button>
        <button class="m-2" @click="building.units = ''">Clear Building Units</button>
        <button class="m-2" @click="building.height = ''">Clear Building Height</button>
        <button class="m-2" @click="building.location = ''">Clear Building Location</button>
    </div>
</template>

<script>
    import VModelMultiplied from '../components/VModelMultiplied.vue'

    export default {
        components: { VModelMultiplied },
        data: () => ({
            building: {
                name: 'Empire State Building',
                location: 'New York, New York',
                height: '100',
                units: 'stories',
            }
        }),
    }
</script>