<template>
  <div id="app">
    <h4 id="author" v-bind:style="{ display: ['none']}" title="Ripo4ek">Andrey Lyapustin</h4>
    <input v-model="value" type="text"  v-on:change="changeHandler">
    <input v-model="value" type="text" v-on:change="changeHandler">
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: '',
    }
  },
  methods:{
    changeHandler(e){
      this.value = e.target.value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
