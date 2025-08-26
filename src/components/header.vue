<script setup lang="ts">
import SearchBar from './searchBar.vue';

</script>

<template>
<div class="header">
    <div class="header__name-and-logo">
        <img class="header__logo" src="/public/bird.png"/>

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
    background-color: rgba($color: #1300b9, $alpha: 0.3);
    width: 100%;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0px;

    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    z-index: 1000;

    &__name-and-logo{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &__logo {
        height: 55px;
        width: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__name {
        &--1 {
            font-weight: 700;
            font-size: 32px;
            color: black;
        }

        &--2 {
            color: rgb(255, 217, 0);
            font-weight: 400;
            font-size: 18px;
        }
    }

    &__search {
        width: 150px;
        margin-right: 5px
    }

}
</style>