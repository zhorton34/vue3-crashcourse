<template>
  <ClickToTeleport to="top.right">
      Content
  </ClickToTeleport>
</template>

<script>
  import ClickToTeleport from './components/ClickToTeleport.vue'

export default {
  name: 'App',
  components: { ClickToTeleport }
}
</script>
