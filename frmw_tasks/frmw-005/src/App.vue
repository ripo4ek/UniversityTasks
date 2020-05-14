<template>
<div :style="myStyle">
  <h4 id="author" v-bind:style="{ display: ['none']}" title="Ripo4ek">Andrey Lyapustin</h4>
            <div :key="color.name" v-for="color in colors">
                <ColorSelector v-on:onChange="changeHandler" v-bind:colorData="color"/>
            </div>
</div>
</template>

<script>
import ColorSelector from './components/ColorElementSelector.vue'

export default {
  name: 'App',
  data(){
    return{
      colors:[
        {name: "R", num: 0},
        {name: "G", num: 123},
        {name: "B", num: 0},
      ],
      myStyle:{
        backgroundColor:"#16a085" 
      }
    }
  },
  methods: {
    // вывод смешан и привязак к палитре, но уже было лень делать систему выделения и определения палитры цвета
    changeHandler: function (data) {
        this.colors.find(x => x.name === data.name).num = data.num
        console.log(this.colors[0].num,this.colors[1].num,this.colors[2].num)
        const newColor = "#" + ((1 << 24) + (this.colors[0].num << 16) + (this.colors[1].num << 8) + this.colors[2].num).toString(16).slice(1);
        this.myStyle = {backgroundColor: newColor};
    }
  },
  components: {
    ColorSelector
  }
  
}
</script>

<style>
div{
  width: 100%;
  min-height: 100%
}
</style>
