<script lang="ts">
import { nextTick } from 'vue';

    export default {
        methods: {
            logout() {
                sessionStorage.clear();
                this.$router.push({ name: 'login' })
            },

            focustextarea() {
                this.$refs.textarea.focus();
            },

            cleartextarea() {
                this.$refs.textarea.value = '';
            },

            downloadtextarea() {
                const d = new Date();
                var a = window.document.createElement('a');
                a.href = window.URL.createObjectURL(new Blob([this.$refs.textarea.value], {type: 'text/plain'}));
                let datetext = d.getSeconds() + '-' + d.getMinutes() + '-' + d.getHours() + '-notepadtext.txt';
                a.download = datetext;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            },

            close() {
                this.$emit('closing')
            }
        },

        data() {
            return {
                textareaFocus: false,
                showicontooltip1: false,
                showicontooltip2: false
            }
        },

        created() {
            this.textareaFocus = true
            nextTick(() => {
              if(this.textareaFocus) {
                this.$refs.textarea.focus();
              }  
            })
        }
    }
</script>

<template>
    <div class="mainmenu" ref="mainmenu" v-drag>
        <div class="head" id="mainmenudrag">
            <p>Notepad</p>
            <span class="close" @click="close">x</span>
        </div>
        <div class="body">
            <div class="body-inner">
                <textarea class="textarea" autofocus cols="50" ref="textarea" @click="focustextarea"></textarea> <br>
                <div class="options">
                    <div class="icon-wrapper" @mouseover="this.showicontooltip1 = true" @mouseleave="this.showicontooltip1 = false" @click="downloadtextarea"><img class="icon" src="https://database.jaazim.tech/webos/save.png" alt="Discard"><p v-if="showicontooltip1" class="icon-tooltip icon-tooltip-below">Save Locally</p></div>
                    <div class="icon-wrapper" @mouseover="this.showicontooltip2 = true" @mouseleave="this.showicontooltip2 = false" @click="cleartextarea"><img class="icon" src="https://database.jaazim.tech/webos/close.png" alt="Discard"><p v-if="showicontooltip2" class="icon-tooltip">Clear Textarea</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mainmenu {
        cursor: move !important;
        position: fixed;
        z-index: 11;
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
        padding-left: .20rem !important;
        padding-right: .20rem !important;
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
        color: black !important;
        height: 100%;
    }
    .mainmenu > .body > .body-inner {
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
        margin-left: .5rem;
        margin-right: .5rem;
    }
    .mainmenu > .body > .body-inner > .options {
        display: flex !important;
        flex-direction: row !important;
        align-self: center;
    }
    .mainmenu > .body > button {
        cursor: pointer;
    }

    .icon {
        max-width: 128px;
        height: 3rem !important;
        outline: 2px black solid;
        background-color: var(--purple);
        border-radius: 20px;
        margin-top: 1rem !important;
        margin: .25rem;
        padding: .25rem;
        cursor: pointer;
    }
    .icon-wrapper {
        position: relative;
    }
    .icon-tooltip {
        z-index: 9;
        font-weight: bold;
        position: absolute;
        left: 4rem;
        top: 1rem;
        font-style: italic;
        animation: tooltip-anim .3s linear;
    }
    .icon-tooltip-below {
        top: 5rem !important;
        left: 0 !important;
        bottom: 1rem !important;
        right: 1rem !important;
    }

    @keyframes tooltip-anim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .textarea {
        background-color: var(--butter);
        min-height: 20vh;
    }
</style>
