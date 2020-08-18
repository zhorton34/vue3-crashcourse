<template>
    <div :class="classes.sections.navigator">
        <template v-for="section in sections" >
            <button @click="show(section)" :class="classes.sections.btn" :disabled="section.show">
                <small>{{ section.title }}</small>
            </button>
        </template>
    </div>

    <h1 :class="classes.sections.title">
        {{ active.title }} Example
    </h1>

    <div :class="classes.sections.container">
        <section v-is="active.component" />
    </div>
</template>

<script>
    import NoMoreFilters from './sections/NoMoreFilters.vue'
    import Teleportation from './sections/Teleportation.vue'
    import ReactiveDetection from './sections/ReactiveDetection.vue'
    import MultipleVModelBindings from './sections/MultipleVModelBindings.vue'

    export default {
        name: 'App',

        data: () => ({
            classes: {
                sections: {
                    btn: 'w-full bg-blue-600 shadow-outline',
                    title: 'text-gray-600 font-light pt-16 text-6xl',
                    navigator: 'flex fixed justify-start -mt-16 w-full z-10',
                    container: 'border-gray-400 bg-white p-12 m-24 rounded shadow-2xl border-gray-600',

                }
            },
            sections: [
                {
                    id: 0,
                    show: true,
                    title: 'Teleportation',
                    component: Teleportation,
                },
                {
                    id: 1,
                    show: false,
                    title: 'Multiple V Model Bindings',
                    component: MultipleVModelBindings,
                },
                {
                    id: 2,
                    show: false,
                    title: 'Reactivity Updates',
                    component: ReactiveDetection,
                },
                {
                    id: 3,
                    show: false,
                    title: 'Filters Removed',
                    component: NoMoreFilters,
                }
            ]
        }),

        computed: {
            active: $this => $this.sections.find(({ show }) => show)
        },

        methods: {
            show(section) {
                this.sections = this.sections.map(item => ({
                    ...item,
                    show: section.id === item.id,
                }))
            }
        }
    }
</script>
