<template>
    <button @click="open = true" class="m-2">
        {{ label }}
    </button>

    <hr><br>

    <teleport to="body">
        <div v-if="open" :style="portal[to]">
            <div class="modal">
                <slot></slot>
                <div class="absolute bottom-0">
                    <button @click="open = false">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
    const portal = {
        full: {
            position: "fixed",
                top: 0,
                zIndex: 10,
                backgroundColor: "#f5f5f5",
                bottom: 0,
                right: 0,
                left: 0,
        },

        left: {
            position: "fixed",
                top: 0,
                zIndex: 10,
                backgroundColor: "#f5f5f5",
                bottom: 0,
                right: "75vw",
                left: 0,
        },

        right: {
            position: "fixed",
                top: 0,
                zIndex: 10,
                backgroundColor: "#f5f5f5",
                bottom: 0,
                left: "75vw",
                right: 0,
        },

        'top.right': {
            position: "fixed",
                top: 0,
                zIndex: 10,
                backgroundColor: "#f5f5f5",
                bottom: "50vh",
                left: "75vw",
                right: 0,
        }
    };

    export default {
        name: 'ClickToTeleport',
        props: {
            label: {
                default: 'Click To Open Modal! (Via teleportation!)'
            },
            to: {
                default: 'full',
                validator: to => Object.keys(portal).includes(to)
            }
        },

        data: () => ({
            open: false,
            portal,

        })
    }
</script>
