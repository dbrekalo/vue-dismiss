# About
Vue dismiss is a simple, reusable directive for executing closing logic when something outside component element is clicked
or when escape key is pressed. Applicable to dropdowns, modals and other types of menus.

# Installation
Install via node package manager.
```
npm install vue-dismiss
```

# Example and api
Vue dismiss ads "v-on-dismiss" custom directive for your Vue components with following parameters:
- callback: function to call on dismiss event
- watch: component property directive is watching. Will bind or unbind bind event listeners based on property value.

Register directive by adding it to mixins array in your component.

```vue
<template>
    <div v-on-dismiss="{watch: opened, callback: close}">
        <button type="button" v-on:click="toggle">
            Toggle dropdown
        </button>
        <div class="content" v-bind:class="{opened}">
        </div>
    </div>
</template>

<script>
import vueDismiss from 'vue-dismiss';
export default {
    mixins: [vueDismiss],
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
``
