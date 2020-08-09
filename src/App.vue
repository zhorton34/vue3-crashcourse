<template>
    <ClickToTeleport to="right" label="Teleport To Right Drawer">
        Right Drawer Content
    </ClickToTeleport>
    <hr><br>
    <ClickToTeleport to="left" label="Teleport To Left Drawer">
        Left Drawer Content
    </ClickToTeleport>
    <hr><br>
    <ClickToTeleport to="full" label="Teleport To Full Screen">
        Full Screen Modal Content
    </ClickToTeleport>
    <hr><br>
    <ClickToTeleport to="top.right" label="Teleport To Top Right">
        Top Right Content
    </ClickToTeleport>
</template>

<script>
  import ClickToTeleport from './components/ClickToTeleport.vue'

export default {
  name: 'App',
  components: { ClickToTeleport }
}
</script>
