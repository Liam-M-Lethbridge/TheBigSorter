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
      <input v-model="name" minlength="1" placeholder="[New datatype...]" class = "name" @keypress="filterForSQL" />
      <li v-for="criterion in criteriaList" :key="criterion.id" >
        <div class="row">
          Name:
          <input v-model="criterion.criterionName" minlength="1" placeholder="Input criteria" class = "criteriaName" @keypress="filterForSQL"/>
          Weight:
          <input v-model="criterion.weighting" minlength="1" maxlength="5" placeholder="Weight" class = "criteriaWeight" @keypress="allowOnlyNumbers"/>
          <button @click="deleteCriteria(criterion)" class = "del">DEL</button>
        </div>
      </li>

      <button @click="add_criteria" class="addCriteria">Add criteria</button>
      <button @click="createNewTable" class="addTable">Create Table</button>
    </div>
  </div>
</template>

<style scoped>
.del{
  cursor:pointer;
  font-size: 15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #292D2F;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  color:coral;
  border-radius: 10px;
}
.addCriteria{
  width:auto;
  cursor:pointer;
  font-size: 15px;
  padding: 2px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #292D2F;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  color:coral;
  border-radius: 15px;
  margin: 2px;
}
.addTable{
  width:auto;
  cursor:pointer;
  padding: 20px;
  font-size: 40px;
  font-family: Impact;
  background-color: #292D2F;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  color:coral;
  border-radius: 15px;
  margin: 2px;
  margin-top: auto;
}
.row{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #000000;
  padding-bottom:2px;
  background-image:linear-gradient(to bottom right, #595d5f, #494d4f);
  align-items: center;
}
.criteriaWeight{
  background-color: rgba(0,0,0,0);
  color: rgb(255, 255, 255);
  font-size: medium;
  padding: 0px;
  border:0px;
  font-family: Impact;
  min-width: 10%;
  max-width: 20%;
  text-align: center;
}
.criteriaName{
  background-color: grey;
  background-color: rgba(0,0,0,0);
  color: rgb(255, 255, 255);
  font-size: medium;
  padding: 0px;
  border: 0px;
  font-family: Impact;
  min-width: 50%;
  text-align: left;
}
.preview{
  display: flex;
  width:50vw;
  background-image:linear-gradient(to bottom right, #595d5f, #494d4f);
  text-align: center;
  border-radius: 15px;
  flex-direction: column;
  align-items: stretch;
  height:fit-content;
  min-height: 60vh;
  margin-top: 10vh;
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
.background{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  background-image:linear-gradient(to bottom right, #393d3f, #292d2f);
  min-height:95vh;
  height: fit-content;
}
.name{
  background-color: #292D2F;
  color: #fdfdff;
  font-size: 20px;
  padding: 2px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  /* width: 100%; */
  text-align: center;

  border-radius: 15px;
  margin: 2px;
}


.criterion{
  background-color: rgb(159, 159, 159);
  color: black;

}
li{
  color: #fdfdff;
  list-style: none;
}

</style>
