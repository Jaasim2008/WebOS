<script lang="ts">
    import axios from 'axios';
    export default {
        data() {
            return {
                loginVersion: 'loading',
                signin: true,
                mobileDevice: false
            }
        },

        created() {
            axios.get('https://database.jaazim.tech/webos/?version=').then(response => {
                this.loginVersion = response.data
            }).catch(e => {
            console.log('Error -> ' + e)
            })
            document.title = "WebOS Login";
        },

        methods: {
            async logincheck() {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "https://api.db-ip.com/v2/free/self", true);
                xhr.onload = (e) => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                    proceed(JSON.parse(xhr.responseText).ipAddress);
                    } else {
                    console.error(xhr.statusText);
                    }
                }
                };
                xhr.onerror = (e) => {
                console.error(xhr.statusText);
                };
                xhr.send(null);
                const proceed = (resp:any) => {
                    sessionStorage.setItem('ip', resp)
                    this.$router.push({name: 'app'})
                }
            }
        }
    }
</script>

<template>
    <div class="login-bg">
        <div class="login-wrapper">
            <div class="login-head"><h1>Welcome to <span style="color: var(--butter);">Web</span><span style="color: var(--mint)">OS</span></h1></div>
            <div class="login-info">Version: {{loginVersion}}</div>
            <button @click="logincheck">Start Session</button>
        </div>
    </div>
</template>

<style scoped>
.btn {
    border: var(--butter) 2px solid;
    background-color: var(--mint);
    color: black;
    transition: border .5s, background-color .5s;
}

.btn:hover {
    border: var(--mint) 2px solid;
    background-color: var(--butter);
}
.login-wrapper > .signin {
    border: 1px white solid;
    padding: .5rem;
    margin-top: .5rem;
    border-radius: 1rem;
}

.signin > a {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: .5rem;
    cursor: pointer;
}


.login-wrapper > .login {
    border: 1px white solid;
    padding: .5rem;
    margin-top: .5rem;
    border-radius: 1rem;
}

.login > a {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: .5rem;
    cursor: position;
}
.login-info {
    font-style: italic;
}
.login-head {
    text-align: center;
}
.login-wrapper {
    background-color: var(--purple);
    padding: 1rem;
    border-radius: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px black solid;
    transform: translateY(0px);
    box-shadow: 5px 5px 10px black;
    transition: box-shadow .5s, transform .5s, padding .5s;
}

.login-wrapper:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px black;
    padding: 1.15rem;
}
.login-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--butter);        
}
.login-wrapper > button {
    color: var(--purple);
    background-color: var(--butter);
    border: 2px var(--mint) solid;
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    transition: color .5s, background-color .5s, border .5s;
}

.login-wrapper > button:hover {
    color: var(--mint);
    background-color: var(--purple);
    border: 2px var(--butter) solid;
    cursor: pointer;
}
</style>