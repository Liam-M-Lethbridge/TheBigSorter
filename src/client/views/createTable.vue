<script setup lang="ts">
// import theBigSorter from "../components/bigLogo.vue"
import { ref } from "vue"
import { createTable } from "../functions"
import { Criteria } from "@/types/reqTypes"
import topBar from "../components/topBar.vue"
import { allowOnlyNumbers, filterForSQL } from "../inputHandlers"
const name = ref("")
const id = ref(0)
const criteriaList = ref(new Set<Criteria>())

function add_criteria(){
  criteriaList.value.add(new Criteria("", 0, id.value))
  id.value++
  console.log(criteriaList.value)
}

function createNewTable(){
  createTable(name.value, Array.from(criteriaList.value))
  name.value = ""
  criteriaList.value = new Set<Criteria>()
}

function deleteCriteria(criterion:Criteria){
  criteriaList.value.delete(criterion)

}

</script>

<template>
  <topBar></topBar>
  <div class="background">

    <div class="preview">
    <!-- <form @submit.prevent="createNewTable" > -->
      <input v-model="name" minlength="1" placeholder="[New datatype...]" class = "name" @keypress="filterForSQL" />
      <li v-for="criterion in criteriaList" :key="criterion.id" class="stretch" >
          <input v-model="criterion.criterion_name" minlength="1" placeholder="Input criteria" class = "criteriaName" @keypress="filterForSQL"/>
          <input v-model="criterion.weighting" minlength="1" maxlength="5" placeholder="Weight" class = "criteriaWeight" @keypress="allowOnlyNumbers"/>
          <button @click="deleteCriteria(criterion)">DEL</button>
      </li>

    <!-- </form> -->
    <button @click="add_criteria">Add criteria</button>
    <button @click="createNewTable">Create Table</button>
  </div>
  </div>
</template>

<style scoped>
.stretch{
  display: flex;
  width:100%;
  justify-content: space-between;
}
.criteriaWeight{
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: medium;
  padding: 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  min-width: 10%;
  max-width: 20%;

  text-align: center;
}
.criteriaName{
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: medium;
  padding: 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  min-width: 50%;
  text-align: left;
}
.preview{
  display: flex;
  width:40vw;
  height: 60vh;
  background-color: black;
  text-align: center;
  border-radius: 20px;
  flex-direction: column;
  align-items: stretch;
}
.critera{
  min-height: 20;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.popup{
  display: flex;
  width: 50vw;
  height: 9vh;
  align-content: space-around;
  align-items: center;
  justify-content: center;
}
.tablecreator{
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 95vh;
  align-content: space-around;
  align-items: center;
  justify-content: center;
}
.background{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #1a1a31;
  max-height: 95vh;
  min-height: 90vh;
}
.name{
  background-color: grey;
  color: rgb(13, 8, 45);
  font-size: medium;
  padding: 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  /* width: 100%; */
  text-align: center;
  border-radius: 10px;

}


.criterion{
  background-color: rgb(159, 159, 159);
  color: black;

}
li{
  color: white;
  list-style: none;
}

</style>
