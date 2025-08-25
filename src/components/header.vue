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
    background-color: rgba($color: #1000a2, $alpha: 0.4);
    width: 100%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__name-and-logo{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &__logo {
        height: 40px;
        width: 40px;
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