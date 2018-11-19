<template>
    <div v-on-dismiss="{watch: opened, callback: close}">
        <button v-on:click="toggle" type="button" v-bind:class="{opened}">
            Toggle dropdown
        </button>
    </div>
</template>

<script>
import dismiss from '../src/index.js';
export default {
    mixins: [dismiss],
    data: () => ({
        opened: false
    }),
    methods: {
        toggle() {
            this.opened ? this.close() : this.open();
        },
        open() {
            this.opened = true;
        },
        close() {
            this.opened = false;
        }
    }
};
</script>
