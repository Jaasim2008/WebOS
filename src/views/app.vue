<script lang="ts">
    import notePad from '../components/notePad.vue'
    import mainmenuComp from '../components/mainMenu.vue'
    import calcCulator from '@/components/calcCulator.vue'
import CalcCulator from '../components/calcCulator.vue'

    export default {
        data() {
            return {
                isMenuShowing: false,
                isNotepadShowing: false,
                isCalculatorShowing: false
            }
        },

        created() {
            if(sessionStorage.getItem("ip") == null) {
                alert('No Session Data Found, Start Session');
                this.$router.push({name: 'login'})
            }
            document.title = "WebOS Runtime";
        },

        components: {
    mainmenuComp,
    notePad,
    calcCulator,
    CalcCulator
}
    }
</script>

<template>
    <!-- <p>App Here</p>
    <p>Session Password => {{sessionPass}}</p>
    <button @click="logout">Destory Session</button> -->
    <CalcCulator v-if="isCalculatorShowing" @closing="this.isCalculatorShowing = false" />
    <notePad v-if="isNotepadShowing" @closing="this.isNotepadShowing = false" />
    <mainmenuComp v-if="isMenuShowing" @closing="this.isMenuShowing = false" />
    <div class="os">
        <div class="desktop"><img src="https://database.jaazim.tech/webos/notepad.png" alt="NotePad" @dblclick="this.isNotepadShowing = true" /><img src="https://database.jaazim.tech/webos/calc.png" alt="Calculator" @dblclick="this.isCalculatorShowing = true" /></div>
        <div class="taskbar"><img src="https://database.jaazim.tech/webos/wologo.png" alt="WO Logo" @click="this.isMenuShowing = true"><p v-if="isNotepadShowing">Notepad</p><p v-if="isCalculatorShowing">Calculator</p></div>
    </div>
</template>

<style scoped>
.os {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(100deg, var(--mint), var(--butter), var(--purple));
    display: flex;
    flex-direction: column;
}

.desktop {
    width: 50vw;
    display: flex;
    margin: 1rem;
    flex-direction: column;
}

.desktop > img {
    margin-bottom: 1rem;
    cursor: pointer;
    max-width: 64px;
}

.taskbar {
    border-top: 2px black solid;
    width: 99vw;
    min-height: 6vh;
    background-color: var(--purple);
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .9vh;
}

.taskbar * {
    color: white;
}

.taskbar > img {
    margin-left: .5rem;
    max-width: 128px;
    max-height: 6vh;
    border-radius: 50%;
    cursor: pointer;
}

.taskbar > p {
    color: var(--butter);
    margin-left: 1rem;
    cursor: pointer;
    transition: color .5s;
    animation: taskbarfadein .5s linear;
}

@keyframes taskbarfadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.taskbar > p:hover {
    color: var(--mint);
}
</style>
