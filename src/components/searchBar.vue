<template>
    <div class="search-bar">
        <input
            placeholder="search city"
            class="search-bar__input"
        />
    </div>
</template>

<style scoped lang="scss">
.search-bar {
    &__input {
        width: 100%;
        height: 32px;
        border-radius: 10px;
        border: none;
        padding: 5px 10px;
        background-color: rgba($color: $light-green, $alpha: 0.5);
        color: white;
        font-family: 'Inter';
        font-size: 16px;

        &::placeholder {
            color: white;
            font-family: 'Inter';
            font-size: 16px;
        }
    }
}
</style>