<template>
    <div>
    <p>{{element.name}}</p>
    <input v-model="element.isDelete" type="checkbox">
    </div>

</template>

<script>

export default {
    props:["element"]
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
