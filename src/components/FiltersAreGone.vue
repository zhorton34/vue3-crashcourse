<template>
    <div class="flex flex-wrap text-left">
        <div class="p-4 border-gray-600 border-2 m-4 w-full">
            <h2 class="text-2xl">Vue 2 Filters <small>(will <strong>NOT</strong> work in Vue 3)</small></h2>
            <pre>{{ vueTwoExample }}</pre>
        </div>


        <div class="p-4 border-gray-600 border-2 m-4 w-full">
            <h2 class="text-2xl">Vue 3 Filters <small>(Don't exist - replace with computed properties or methods)</small></h2>
            <pre>{{ vueThreeExample }}</pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FiltersAreGone',

        data: () => ({
            vueThreeExample: `
<template>
    <div>
        {{ capitalizeTitle }}
    </div>
</template>

<script>
export default {
    data: () => ({ title: 'vue 2 filters' }),
    computed: {
        capitalizeTitle() {
            return this.title[0].toUpperCase() + this.title.slice(1)
        }
    }
}
<\/script>
            `,

            vueTwoExample: `
<template>
    <div>
        {{ title | capitalize }}
    </div>
</template>

<script>
    export default {
        data: () => ({ title: 'vue 2 filters' }),

        filters: {
            capitalize (string) {
                return string[0].toUpperCase() + string.slice(1)
            }
        }
    }
<\/script>
            `
        })
    }
</script>


<style scoped>
    pre {
        background-color: #333;
        color: orange;
        padding: 25px;
    }
</style>