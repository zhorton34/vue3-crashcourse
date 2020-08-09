<template>
    <div @click="vueThreeProperlyReactsToChangesInThisMethod">
        {{ grocery.list }} {{ grocery.cart}}
    </div>
</template>

<script>
    export default {
        name: "BetterReactivity",

        data: () => ({
            grocery: {
                list: ['apple', 'steak', 'orange', 'pear'],
                cart: {
                    meats: ['steak'],
                    fruit: ['apple', 'orange', 'pear'],
                    veggies: [''],

                }
            }
        }),

        methods: {
            /*-------------------------------------------------------------------------------
             | Vue 3: Better Reactivity
             *-------------------------------------------------------------------------------
             | * Vue 2
             |   - Would NOT react to these updates
             |     -> Watcher's handler wouldn't be called
             |     -> Template/DOM wouldn't automatically react and update
             |     -> In Vue 2, Vue.set() and Vue.delete were required to properly
             |        react to these types of mutations
             | * Vue 3
             |   - AUTOMATICALLY reacts to these types of mutations
             |     -> Vue 3 Proxy Api allows Vue to automatically react to these mutations types
             |
             */

            vueThreeProperlyReactsToChangesInThisMethod() {
                this.grocery.list[2] = "asdf"
                this.grocery.cart.total = 4
                delete this.grocery.veggies
            },
        },

        watch: {
            grocery: {
                deep: true,
                handler() { console.log('watcher triggered Reactivity') },
            }
        }
    }
</script>
