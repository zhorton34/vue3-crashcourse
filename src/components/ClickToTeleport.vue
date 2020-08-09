<template>
    <button @click="open = true" :class="classes.btn">
        Click To Open Modal! (Via teleportation!)
    </button>

    <teleport to="#portal">
        <div v-if="open" :style="portal[to]">
            <div class="modal">
                <slot></slot>
                <div class="modal close-btn">
                    <button @click="open = false" :class="classes.btn">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
    export default {
        name: 'ClickToTeleport',
        props: ['to'],

        data: () => ({
            open: false,

            portal: {
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
            },
            classes: {
                btn: 'modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full'
            }
        })
    }
</script>


<style>
    .modal {
        width: auto;
        z-index:100;
        padding: 10px;
        min-height:100%;
        position:absolute;
    }

    .modal .close-btn {
        position:absolute;
        top:90%;
        bottom:10;
        padding: 10%
    }
</style>