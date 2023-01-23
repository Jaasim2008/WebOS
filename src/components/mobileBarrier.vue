<script lang="ts">
</script>

<template>
    <div class="nomobile-wrapper"><p>Sorry, WebOS is not Supported on Mobile Devices!</p> <img src="https://database.jaazim.tech/webos/sad.png" alt=":("> </div>
</template>

<style scoped>
    .nomobile-wrapper {
        z-index: 9;
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        position: fixed;
        background-color: var(--purple);
        width: 100vw;
        height: 100vh;
        color: white;
    }

    .nomobile-wrapper > img {
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 17vw;
        width: 100%;
        height: auto;
    }
</style>
