<script setup lang="ts">
import topBar from "../components/topBar.vue"
import { onMounted, ref } from "vue"
import { getAllTables, deleteTable } from "../functions"
const isEmpty = ref(true)
// const data = ref<{[k:string]: string}[]>([])
const data = ref<{table_name: string}[]>([])
onMounted(async ()=>{
  data.value = (await getAllTables())
  console.log(data)
  isEmpty.value = (data.value.length===0)

}
)

function removeTable(item: {table_name:string}){
  deleteTable(item.table_name)
  const index = data.value.indexOf(item)
  if (index > -1) { // only splice array when item is found
    data.value.splice(index, 1); // 2nd parameter means remove one item only
  }
  isEmpty.value = (data.value.length===0)
}

</script>

<template>
  <top-bar/>
  <div class="background">
    <li v-for="item in data" :key="item['table_name']" class="list">
      <p class="row">{{ item["table_name"] }}
        <button class="delete" @click="removeTable(item)" style="float:right;">X</button>
      </p>
    </li>
    <div v-if="isEmpty" class="empty">
      Wow such empty...
    </div>
  </div>
</template>

<style scoped>


.list{
  list-style-type: none;
  width: 100%;
}
.empty{
  color: #fdfdff

}

.delete{
  color: coral;
  background-color: #292d2f;
  border-radius: 5px;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  font-family: Impact;
}
.background{
  display: flex;
  flex-direction: column;
  font-family: Impact;
  width: 100vw;
  height: 100vh;
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
