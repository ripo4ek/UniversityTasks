<template>
    <div>
        <input  @change="emitToParent"  v-model="value" type="number" onkeydown="return false"  min="0" max="255">
        <input @change="emitToParent" v-model="value" type="range"  min="0" max="255" step="1">
    </div>

</template>

<script>
export default {
  props: ['colorData', 'onChange'],
  data () {
    return {
        value: this.colorData.num
    }
},
  methods: {
    emitToParent () {
      this.$emit('onChange', {name: this.colorData.name, num: Number(this.value)})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
