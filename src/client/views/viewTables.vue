<script setup lang="ts">
import topBar from "../components/topBar.vue"
import { onMounted, ref } from "vue"
import { getAllTables, deleteTable, getTable, getColumns } from "../functions"
import { Item } from "../../types/reqTypes"
const isEmptyTables = ref(true)
const isEmptyItems = ref(true)
const selectTables = ref(true)
const tables = ref<{table_name: string}[]>([])
const items = ref<Item[]>([])
const currentTable = ref("")
const columns = ref<string[]>([])

onMounted(async ()=>{
  tables.value = (await getAllTables())
  console.log(tables)
  isEmptyTables.value = (tables.value.length===0)

}
)

function newItem(){
}

async function toggle(table_name: string | undefined = undefined){
  selectTables.value=!selectTables.value
  if( typeof table_name === 'string'){
    items.value = await getTable(table_name)
    isEmptyItems.value = (items.value.length===0)
    currentTable.value = table_name
    columns.value = await getColumns(table_name)
  }else{
    isEmptyItems.value = false
    currentTable.value = ""
  }
}

function removeTable(item: {table_name:string}){
  deleteTable(item.table_name)
  const index = tables.value.indexOf(item)
  if (index > -1) { // only splice array when item is found
    tables.value.splice(index, 1); // 2nd parameter means remove one item only
  }
  isEmptyTables.value = (tables.value.length===0)
}

</script>

<template>
  <top-bar/>
  <div class="background" >
    <div class="popup">
            AH

      </div>
    <div class="selector" v-if="selectTables">
      <li v-for="item in tables" :key="item['table_name']" class="list">
        <div class="row">
          <button @click="toggle(item.table_name)" class="invisibleButton">{{ item["table_name"] }}</button>
          <div>
            <button class="delete">. . .</button>
            <button class="delete" @click="removeTable(item)">X</button>
          </div>
        </div>
      </li>
      <div v-if="isEmptyTables" class="empty">
        Wow such empty...
      </div>
    </div>
    <div class="selector" v-if="!selectTables">
      <div class="header">
        {{ currentTable }}
      </div>
      <li v-for="item in items" :key="item.itemName" class="list">
        <p class="row"> <button class="invisibleButton">{{ item.itemName }}</button>
          <!-- <button class="delete" @click="removeTable(item)" style="float:right;">X</button> -->
        </p>
      </li>
      <div v-if="isEmptyItems" class="empty">
        Wow such empty...
      </div>
      <button class="delete" @click="toggle()">Return to table selection</button>
      <button class="delete" @click="newItem">New Item</button>

    </div>
  </div>
</template>

<style scoped>
.popup{
  position: absolute;
  min-height: fit-content;
  height: 70vh;
  min-width: fit-content;
  width:40vw;
  align-self: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to bottom right, #494d4f, #393d3f );
  border: 5px solid #fdfdff;
  border-radius: 15px;
  margin-top: 5vh;
}
.return{
  width: 100%;
  height: fit-content;
  background-color: #292d2f;
  color: coral;
  border: 0px;
}
.header{
  display: flex;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(to bottom right, rgb(255, 157, 120), rgb(255, 127, 80));
  color: #292d2f;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.selector{
  height:100%;
  width:100%;
}
.list{
  list-style-type: none;
  width: 100%;
}
.empty{
  color: #fdfdff

}
.invisibleButton{
  background-color: rgba(0,0,0,0);
  cursor:pointer;
  border-width: 0px;
}
.delete{
  color: coral;
  background-color: #292d2f;
  border-radius: 5px;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  font-family: Impact;
  margin-left: 4px;
}
.background{
  display: flex;
  flex-direction: column;
  font-family: Impact;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;

  align-items:center;
  background-image:linear-gradient(to bottom right, #393d3f, #292d2f);
}
.row{
  box-sizing: border-box;
  display: flex;
  width:100%;
  justify-content: space-between;
  background-color: grey;
  border-bottom: 1px solid #000000;
  font-family: Impact;
  padding-bottom:2px;
  padding-top:2px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fdfdff;
}
</style>
