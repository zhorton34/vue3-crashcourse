<template>
    <input
        :value="name"
        placeholder="Building Name"
        @input="event => $emit('update:name', event.target.value)"
    />

    <input
        :value="height"
        placeholder="Building Height"
        @input="event => $emit('update:height', event.target.value)"
    />

    <input
       :value="units"
       placeholder="Building Units (Height)"
       @input="event => $emit('update:units', event.target.value)"
    />

    <input
        :value="location"
        placeholder="Building Location"
        @input="event => $emit('update:location', event.target.value)"
    />
</template>

<script>
    export default {
        name: 'VModelMultiplied',
        props: ['name', 'height', 'units', 'location'],
    }
</script>

<style scope>
    input {
        background-color: #fff;
        height: 50px;
        width: 75%;
        color: #8b8b8b;
        border: 1px solid #d5d5d5;
        border-radius: 9px;
        padding: 5px;
        font-size: 14px;
        margin: 0 5px 0 5px;
        text-align: left;
    }

    input:focus {
        outline-width: 0.2rem;
        outline-color: #41B883;
    }
</style>