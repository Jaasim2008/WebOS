<script lang="ts">
    export default {
        methods: {
            logout() {
                sessionStorage.clear();
                this.$router.push({ name: 'login' })
            },

            close() {
                this.$emit('closing')
            }
        }
    }
</script>

<template>
    <div class="mainmenu" ref="mainmenu" v-drag>
        <div class="head" id="mainmenudrag">
            <p>Mainmenu</p>
            <span class="close" @click="close">x</span>
        </div>
        <div class="body">
            <button @click="logout">CHANGE Log Out</button>
            <p>About WebOS:</p>
            <p>WebOS, created by <a href="https://jaazim.tect">Jaazim</a>,<br> Made with <a href="https://vuejs.org/" target="_blank">VueJS</a> ,<br> Licensed under CC : <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a></p>
        </div>
    </div>
</template>

<style scoped>
    .mainmenu {
        cursor: move !important;
        position: fixed;
        z-index: 10;
        display: flex;
        flex-direction: column;
        min-height: 50vh;
        min-width: 25vw;
        background-color: var(--mint);
        border: 2px black solid;
    }
    .mainmenu * {
        color: rgb(255, 255, 255);
    }
    .mainmenu > .head {
        width: 100%;
        font-weight: bold;
        padding-top: .25rem;
        padding-bottom: .25rem;
        display: flex;
        justify-content: space-between;
        background-color: var(--purple);
        min-height: .5rem;
        width: 100%;
        color: white !important;
        border-bottom: 1px black solid;
    }
    .mainmenu > .head > p {
        margin-left: .25rem;
    }
    .mainmenu > .head > .close {
        margin-right: .5rem;
        background-color: red;
        color: white;
        padding:.10rem;
        outline: 0px black solid;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color .5s, color .5s, outline .2s;
    }
    .mainmenu > .head > .close:hover {
        background-color: var(--butter);
        color: black;
        outline: 1px black solid;
    }
    .mainmenu > .body * {
        margin-left: .25rem;
        color: black !important;
    }
    .mainmenu > .body > button {
        margin-top: .5rem;
        cursor: pointer;
    }
    .mainmenu > .body > p:first-of-type {
        margin-top: 1rem;
    }
    .mainmenu > .body > p > a {
        color: blue !important;
    }
</style>