<template>
    <h2>Multiple Root Nodes / Fragments</h2>
    <hr>
    <button v-for="(example, key) in examples"
            @click="activate(example, key)"
            :disabled="example.active"
            :key="`example.${key}`">
        {{ example.label }}
    </button>

    <template v-is="currentExample.component"></template>
</template>

<script>
    import VueTwoExample from './VueTwo.vue'
    import VueThreeExample from './VueThree.vue'

    export default {
        name: 'MultipleRootNodesExample',

        data: () => ({
            examples: [
                {
                    active: false,
                    label: "Vue Two Example",
                    component: VueTwoExample,
                },
                {
                    active: true,
                    label: "Vue Three Example",
                    component: VueThreeExample,
                }
            ]
        }),

        methods: {
            activate(example, key) {
                this.examples = this.examples.map((item, index) => ({
                    ...item,
                    active: key == index
                }))
            }
        },

        computed: {
            currentExample() {
                return this.examples.find(example => example.active === true)
            }
        }
    }
</script>
