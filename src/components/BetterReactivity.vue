<template>
    <div class="fixed bg-white right-0 z-20 top-0 mt-12 border-l-2 border-t-2 border-b-2 border-gray-600">
        <textarea class='editable text-center' v-model='groceries'></textarea>
    </div>

    <div class="fixed bg-white p-4 bottom-0 right-0 border-l-2 border-t-2 border-gray-600">
        Watcher Triggered: <strong>{{ count }}</strong> Times
    </div>

    <div class="flex justify-around w-full">
        <div class="flex justify-start flex-wrap w-1/2 border-8 p-2">
            <h2 class="text-2xl w-full text-left">
                Object Reactivity Updates<hr>
            </h2>


            <div class="py-2 my-2 text-left w-full">
                <button @click="delete grocery.cart.meats">
                    Delete a Property
                </button>
                <pre class="text-left">delete this.grocery.cart.meats</pre>
            </div>

            <div class="py-2 my-2 text-left w-full">
                <button @click="grocery.cart.total = grocery.list.length">
                    Add A Property
                </button>
                <pre class="text-left my-4">this.grocery.cart.total = this.grocery.list.length</pre>
            </div>

            <div class="py-2 my-2 text-left w-full">
                <button class='bg-red-500' @click="$set(grocery.cart, 'goal', 'Clean Life')">
                    $set is deprecated
                </button>
                <pre class="text-left">this.$set(this.grocery, 'goal' 'Clean Life')</pre>
            </div>
        </div>

        <div class="flex justify-start flex-wrap w-1/2 border-8 p-2">
            <h2 class="text-2xl w-full text-left">
                Array Reactivity Updates<hr>
            </h2>


            <div class="py-2 my-2 text-left w-full">
                <button @click="grocery.list[0] = 'updated item'">
                   Update Array By Index
                </button>
                <pre class="text-left">this.grocery.list[0] = 'updated item'</pre>
            </div>

            <div class="py-2 my-2 text-left w-full">
                <button @click="grocery.list.length = 200">
                    Update Array Length
                </button>
                <pre class="text-left my-4">this.grocery.list.length = 200</pre>
            </div>

            <div class="py-2 my-2 text-left w-full">
                <button @click="grocery.list.push('item pushed to grocery list array')">
                    Push Items To Array (Works as expected)
                </button>
                <br>
                <small>(Previous two Array examples properly worked, but only array mutations like array.push)</small>

                <pre class="text-left my-4">this.grocery.list.push('item pushed to grocery list array')</pre>
            </div>
        </div>

    </div>
    <hr>


    <div class="text-left my-8">
        <strong>Items on List</strong>
        <pre>{{ grocery.list }}</pre>


        <strong>Items in Cart</strong>
        <pre>{{ grocery.cart }}</pre>

        <strong>Grocery Cart</strong>
        <pre>{{ grocery }}</pre>
    </div>

</template>

<script>
export default {
    name: "BetterReactivity",

    data: () => ({
        count: 0,
        grocery: {
            cart: {
                meats: ['steak'],
                fruit: ['apple', 'pear'],
            },

            list: ['steak', 'apple', 'pear'],
        }
    }),

    computed: {
        groceries: {
            get() {
                return JSON.stringify(this.grocery, null, 4)
            },
            set(value) {
                try {
                    value = JSON.parse(value.trim())
                    this.grocery = value
                } catch {
                    console.warn("Improper JSON")
                }
            },
        },
    },


    watch: {
        grocery: {
            deep: true,
            immediate: true,
            handler () {
                this.count = this.count + 1
            }
        }
    }
}
</script>


<style scope>
    .editable::-webkit-scrollbar {
        display: none
    }
    .editable {
        scrollbar-width: none;  /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
    }
    .editable {
        text-align: left;
        font-size: 12px;
        border-radius: 3px;
        background-color: #dddd;
        border: 1px dashed purple;
        color: indigo;
        min-width: 200px
    }
    textarea.editable {
        margin: 0 10px 0 10px;
        min-height: 300px !important;
    }
</style>