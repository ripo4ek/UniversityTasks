<template>
    <div>
        <h4 id="author" v-bind:style="{ display: ['none']}" title="Ripo4ek">Andrey Lyapustin</h4>
        <button v-on:click="incrementHandler">↑</button>
        <input  v-model="count"  type="text">
        <ul>
            <li :key="number" v-for="number in numbers">
                <powNumber v-bind:base="2" v-bind:exponent="number"/>
            </li>
        </ul>

        
    </div>
</template>

<script>
import powNumber from './powNumber.vue'
export default {

  name: 'HelloWorld',
   computed: {
    numbers: function () {
              let array = []
              for(let i = 0;i<this.count;i++){
                  array.push(10+i)
              }
              return array;
        }
    },
     methods: {
          incrementHandler: function () {
              this.count = Number(this.count)+1;
          }
     },
  data(){
      return {
          count: 5,
      }
  },
  components: {
    powNumber
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>