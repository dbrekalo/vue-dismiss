<template>
    <div class="dropdown" v-on-dismiss="{watch: opened, callback: close}">
        <button v-on:click="toggle" type="button" v-bind:class="{opened}">
            {{ opened ? 'Close dropdown' : 'Click to open dropdown' }}
        </button>
        <div class="dropdownContent" v-bind:class="{opened}">
            <p class="text">
                Click outside this element or press escape key to close dropdown.
            </p>
        </div>
    </div>
</template>

<script>
import dismiss from '../../../src/index.js';
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

<style lang="scss" scoped>

    button {

        margin:0; padding: 0; border: 0; cursor: pointer; background: #fff;

        &::-moz-focus-inner {
            padding: 0; border: 0;
        }

        &:hover, &:focus { outline: 0; }

        font-size: 18px; display: block; width: 100%; position: relative;
        text-align: left; padding: 0 20px; line-height: 60px; height: 60px;
        border: 1px solid #dcdcdc; border-radius: 8px;
        box-shadow: 0 0.1em 0.3em rgba(#000, 0.07);

        &:after {

            content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 50px;
            background: transparent url('/vue-dismiss/arrow.svg') no-repeat center;
            background-size: 20px; transition: transform 0.3s;

        }

        &.opened:after {

            transform: rotate(180deg);

        }

    }

    .dropdownContent {

        margin-top: -30px; padding: 70px 35px 50px;
        border: 1px dashed #c3c3c3; border-radius: 0 0 8px 8px;
        box-shadow: 0 0.2em 2.5em rgba(#000, 0.07);
        background: transparent;
        background: #f5f5f5;

        transition: all 0.3s;

        &.opened {

            background: #fff; border: 1px solid #dcdcdc;

            > .text { opacity: 1; transform: translate3d(0,0,0);  }

        }

    }

    .text {

        font-size: 17px; margin: 0; padding: 30px 0;
        opacity: 0; transform: translate3d(0,-20px,0);
        transition: all 0.3s;

    }

</style>