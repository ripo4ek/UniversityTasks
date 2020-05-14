<template>
   <div>
       <input v-model="textAdd" type="text">
       <button v-on:click="addHandler">add</button>
       <div v-bind:key="item.name" v-for="item in taskList">
           <listElement v-bind:element="item" />
       </div>
       <button v-on:click="deleteHandler">Delete</button>
   </div>
</template>

<script>
import listElement from './listElement.vue'

export default {
    data(){
        return{
            textAdd:'',
            taskList: [],
        }
    },  
    components:{
        listElement
    },
    methods:{
            deleteHandler: function(){
                this.taskList = this.taskList.filter(task => !task.isDelete);
            },
            addHandler: function(){
                this.taskList.push({name: this.textAdd, isDelete: false})
            }
        },
    created(){
        fetch('https://kodaktor.ru/j/tasklist')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const list = data.list;
                this.taskList = list.map(e =>{
                    return {name: e, isDelete: false}
                })
            });
    },
}
</script>
<style scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
button{
    height: 20px;
    width: 60px;
    margin-right: 5px;
}
input{
    margin-right: 5px;
}
</style>
