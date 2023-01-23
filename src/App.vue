<script lang="ts">
  import mobileBarrier from './/components/mobileBarrier.vue'

  export default {
    data() {
      return {
        mobileDevice: false
      }
    },
    components: {
        mobileBarrier
    },

    created() {
      if(screen.width <= 760 ){
        this.mobileDevice = true;
      }
    }
  }
</script>

<template>
  <mobileBarrier v-if="mobileDevice"></mobileBarrier>
  <router-view/>
</template>

<style>
:root {
  --purple: #AA96DA;
  --mint: #C5FAD5;
  --butter: #FFFFD2;
}
* {
  font-family: Helvetica, sans-serif !important;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
}

h1, h1 * {
  font-size: 1.5rem;
}

@media screen and (max-width: 600px) {
  * {
    font-size: 1rem;
  }
  h1, h1 * {
  font-size: 1.25rem;
  }
}

input {
  border: var(--mint) 2px solid;
  background-color: var(--butter);
  color: black;
  -webkit-text-stroke: 0px black;
  transition: border .5s, background-color .5s, color .5s, -webkit-text-stroke .5s;
  margin-bottom: .5rem;
}

input:focus {
  border: var(--butter) 2px solid;
  background-color: var(--mint);
  color: white;
  -webkit-text-stroke: 1px black;
}

a {
  color: blue;
}
</style>
