<script setup lang="ts">
import SearchBar from './searchBar.vue';

</script>

<template>
<div class="header">
    <div class="header__name-and-logo">
        <!-- <img class="header__logo" src="/public/blue-planet.png"/> -->

        <div class="header__name">
            <span class="header__name--1">Rain</span>
            <span class="header__name--2">check</span>
        </div>
    </div>

    <div class="header__search">
        <SearchBar/>
    </div>
</div>
</template>


<style scoped lang="scss">
.header {
    background-color: rgba(rgb(88, 0, 155), $alpha: 0.2);
    width: 100%;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0px;

    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    z-index: 1000;

    &__name-and-logo{
        display: flex;
        align-items: center;
    }

    &__logo {
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__name {
        &--1 {
            font-weight: 700;
            font-size: 32px;
            color: rgb(255, 240, 108);
        }

        &--2 {
            color: $green;
            font-weight: 600;
            font-size: 18px;
        }
    }

    &__search {
        width: 150px;
        margin-right: 5px
    }

}
</style>