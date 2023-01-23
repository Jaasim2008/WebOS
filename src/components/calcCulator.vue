<script lang="ts">
    export default {
        data() {
            return {
                queuenum: [0, false, 0, 0], //First Number, is answer present, Position of Operator, Type of Operator
                operator: [false, false, 0] //[0] -> check if there is an operator already in queue, [1] -> if answer is calculated, [2] -> current operator present in queue
            }
        },

        methods: {
            close() {
                this.$emit('closing')
            },

            calc(num:number, isOperator = false) {
                const operatorFunction = (opnum:number, indexoperator:number) => {
                    const equateAll = () => {
                        let newMathArray = this.$refs.input.value.split('')
                        let beforenums = newMathArray.slice(0, parseInt(this.queuenum[2]) - 1)
                        let afternums = newMathArray.slice(parseInt(this.queuenum[2]))
                        let plus = parseInt(beforenums.join('')) + parseInt(afternums.join(''));
                        let minus = parseInt(beforenums.join('')) - parseInt(afternums.join(''));
                        let divide = parseInt(beforenums.join('')) / parseInt(afternums.join(''));
                        let multiply = parseInt(beforenums.join('')) * parseInt(afternums.join(''));
                        if(this.queuenum[3] == -1){(this.$refs.input.value = plus, this.queuenum[1] = true)}
                        else if(this.queuenum[3] == -2){(this.$refs.input.value = minus, this.queuenum[1] = true)}
                        if(this.queuenum[3] == -3){(this.$refs.input.value = divide, this.queuenum[1] = true)}
                        if(this.queuenum[3] == -4){(this.$refs.input.value = multiply, this.queuenum[1] = true)}
                    }
                    if(indexoperator == 0) {
                        if(opnum == -6) {
                            alert('Cannot Equate with No Input')
                            return null
                        } else {
                            if(opnum != -5) {
                                alert('Cannot Insert Operator Before Numeral!');
                                return null
                            }
                        }
                    }
                    opnum == -1 ? (this.$refs.input.value += '+', this.operator[2] = -1, this.operator[0] = true, this.queuenum[3] = -1) : ''
                    opnum == -2 ? (this.$refs.input.value += '-', this.operator[2] = -2, this.operator[0] = true , this.queuenum[3] = -2) : ''
                    opnum == -3 ? (this.$refs.input.value += '/', this.operator[2] = -3, this.operator[0] = true , this.queuenum[3] = -3) : ''
                    opnum == -4 ? (this.$refs.input.value += '*', this.operator[2] = -4, this.operator[0] = true , this.queuenum[3] = -4) : ''
                    opnum == -5 ? (this.$refs.input.value = '', this.operator[2] = 0, this.operator[0] = false) : ''
                    opnum == -6 ? equateAll() : ''
                }
                // -1 => +, -2 => -, -3 => /, -4 => *, -5 => AC, -6 => Equate
                if(this.queuenum[1]){
                    operatorFunction(-5 , this.$refs.input.value.length);
                    this.queuenum[1] = false
                    this.queuenum[2] = 0
                    this.queuenum[3] = 0
                }
                if(isOperator && this.operator[0] && num != -6){
                    alert('Cannot add Another Operator, Please Calculate your Equation')
                } else if(num == -1){
                    this.queuenum[2] = this.$refs.input.value.length + 1
                    operatorFunction(-1, this.$refs.input.value.length);
                } else if(num == -5) {
                    operatorFunction(-5 , this.$refs.input.value.length)
                } else if(num == -2) {
                    this.queuenum[2] = this.$refs.input.value.length + 1
                    operatorFunction(-2 , this.$refs.input.value.length);
                } else if(num == -3) {
                    this.queuenum[2] = this.$refs.input.value.length + 1
                    operatorFunction(-3 , this.$refs.input.value.length)
                } else if(num == -4) {
                    this.queuenum[2] = this.$refs.input.value.length + 1
                    operatorFunction(-4 , this.$refs.input.value.length)
                } else if(num == -6){
                    operatorFunction(-6 , this.$refs.input.value.length)
                } else {
                    this.$refs.input.value += num;
                }
            }
        },

        mounted() {
            this.$refs.input.value = null ;
        }
    }
</script>

<template>
    <div class="mainmenu" ref="mainmenu" v-drag>
        <div class="head" id="mainmenudrag">
            <p>Calculator</p>
            <span class="close" @click="close">x</span>
        </div>
        <div class="body">
            <input type="text" readonly ref="input" @click="this.$refs.input.focus()" />
            <div class="numgrid">
                <p @click="calc(1)">1</p>
                <p @click="calc(2)">2</p>
                <p @click="calc(3)">3</p>
                <p @click="calc(4)">4</p>
                <p @click="calc(5)">5</p>
                <p @click="calc(6)">6</p>
                <p @click="calc(7)">7</p>
                <p @click="calc(8)">8</p>
                <p @click="calc(9)">9</p>
                <p @click="calc(0)">0</p>
                <p @click="calc(-1, true)">+</p>
                <p @click="calc(-2, true)">-</p>
                <p @click="calc(-3, true)">÷</p>
                <p @click="calc(-4, true)">*</p>
                <p @click="calc(-6, true)">=</p>
                <p @click="calc(-5)">AC</p>
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
        min-height: 60vh;
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
        color: black;
    }
    .mainmenu > .body > input {
        overflow: auto;
        white-space: nowrap;
        margin: .25rem;
        width: calc(25vw - .25rem);
        color: black !important;
        background-color: var(--butter);
    }

    .mainmenu > .body > .numgrid {
        text-align: center;
        margin-left: 3rem;
        height: 100%;
        display: grid;
        column-gap: 1rem;
        row-gap: 1rem;
        grid-template-columns: auto auto auto;
    }
    .numgrid > p {
        cursor: pointer;
        line-height: 2rem;
        height: 2rem;
        width: 2rem;
        color: white !important;
        border-radius: 50%;
        background-color: var(--purple);
    }
</style>