<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <button v-for="(example, key) in examples"
          @click="activate(example, key)"
          :disabled="example.active"
          :key="`example.${key}`">
      {{ example.label }}
  </button>
  <hr>
  <div class="current-example">
    <template v-is="currentExample.component"></template>
  </div>
</template>

<script>
import MultipleRootNodes from './components/MultipleRootNodes/Example.vue'

export default {
  name: 'App',

  data: () => ({
    examples: [
      {
        active: true,
        label: "Multiple Root Nodes Example (Aka Fragments)",
        component: MultipleRootNodes,
      }
    ]
  }),

  methods: {
    activate(example, key) {
      this.examples = this.examples.map((item, index) => ({ ...item, active: key === index }))
    }
  },

  computed: {
    currentExample() {
      return this.examples.find(example => example.active === true)
    }
  }
}
</script>
