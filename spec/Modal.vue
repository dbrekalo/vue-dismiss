<template>
    <div v-on-dismiss="close"></div>
</template>

<script>
import dismiss from '../src/index.js';
export default {
    mixins: [dismiss],
    data: () => ({
        opened: true
    }),
    methods: {
        open() {
            this.opened = true;
        },
        close() {
            this.opened = false;
        }
    }
};
</script>
