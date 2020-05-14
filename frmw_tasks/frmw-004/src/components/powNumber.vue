<template>
    <h1><span>{{base}}</span><sup>{{exponent}}</sup> = {{Math.pow(base, exponent)}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['base','exponent']
}
</script>


<style scoped>

</style>