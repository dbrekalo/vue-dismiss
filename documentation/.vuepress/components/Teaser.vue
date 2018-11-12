<template>
    <div>
        <div class="teaser">
            <div class="topBlock">
                <div class="textTeaser">
                    <h2 class="title">Better UI for closing dropdowns and modals</h2>
                    <p class="text">
                        Vue dismiss is a simple, reusable directive for executing closing logic when something outside component element is clicked
                        or when escape key is pressed. Applicable to dropdowns, modals and other types of menus.
                        Weighs less then 1KB.
                    </p>
                    <router-link class="ctaBtn" :to="'/docs.html'">Get started</router-link>
                </div>
                <dropdown></dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from './Dropdown';

export default {

    components: {Dropdown}

};
</script>

<style lang="scss" scoped>

    $color: #c30051;

    .teaser {

        background: #f5f5f5;
        // border-bottom: 1px solid #e8e8e8;

        @media screen and (min-width: 720px) {

            min-height: 100vh;
            display: flex; justify-content: center; align-items: center;
            background: #f5f5f5 url('/vue-dismiss/cancelWhite.svg') no-repeat right 50px;
            background-size: 1050px;

        }
    }

    .topBlock {

        position: relative; padding: 25px;

        @media screen and (min-width: 720px) {

            display: table;
            padding: 170px 40px; max-width: 1100px; margin: 0 auto;

        }

    }

    .textTeaser {

        max-width: 600px; padding-bottom: 25px;

        > .title {

            font-size: 32px; margin: 0; position: relative;
            padding: 0 0 20px 0;
            letter-spacing: -0.02em; font-weight: bold;
            border: 0;

        }

        > .text {

            color: #585858; margin: 0;

        }

        @media screen and (min-width: 720px) {

            display: table-cell; padding-right: 35px; padding-top: 15px;
            vertical-align: middle;

            > .title {

                font-size: 45px;

            }

        }

    }

    .ctaBtn {

        display: inline-block; padding: 12px 20px;
        margin-top: 23px;
        border-radius: 25px; letter-spacing: -0.3px;
        background: $color; color: #fff;
        transition: background-color 0.3s;

        &:hover {
            background-color: darken($color, 5%);
        }

    }

    .dropdown {

        @media screen and (min-width: 720px) {

            width: 320px; display: table-cell;
            font-size: 0.77em;

        }

    }

</style>
