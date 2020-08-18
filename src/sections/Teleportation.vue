<template>
    <div class="flex justify-center">
        <ClickToTeleport to="right" label="Teleport To Right Drawer">
            Right Drawer Content
        </ClickToTeleport>

        <ClickToTeleport to="left" label="Teleport To Left Drawer">
            Left Drawer Content
        </ClickToTeleport>

        <ClickToTeleport to="full" label="Teleport To Full Screen">
            Full Screen Modal Content
        </ClickToTeleport>

        <ClickToTeleport to="top.right" label="Teleport To Top Right">
            Top Right Content
        </ClickToTeleport>
    </div>
</template>

<script>
    import ClickToTeleport from '../components/ClickToTeleport.vue'

    export default {
        name: 'Teleportation',
        components: { ClickToTeleport }
    }
</script>