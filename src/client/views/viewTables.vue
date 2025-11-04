<script setup lang="ts">
import topBar from "../components/topBar.vue"
import { onMounted, ref } from "vue"
import { getAllTables } from "../functions"
const isEmpty = ref(true)
// const data = ref<{[k:string]: string}[]>([])
const data = ref<{table_name: string}[]>([])
onMounted(async ()=>{
  data.value = (await getAllTables())
  console.log(data)
  isEmpty.value = (data.value.length===0)
}
)
</script>

<template>
  <top-bar/>
  <div class="background">
    <li v-for="item in data" :key="item['table_name']"><p class="row">{{ item["table_name"] }} <button class="delete" style="float:right;">X</button></p></li>
    <div v-if="isEmpty" class="empty">
      Wow such empty...
    </div>
  </div>
</template>

<style scoped>

div{
  font-family: Impact;
  background-color: #040422;
  width: 100vw;
  height: 100vh;
}
li{
  list-style-type: none;
}
.empty{
  color:white
}
.homePage{
  background-color:black;
  border:none;
  color: white;
  width: 50vw;
  height: 5vh;
  text-align: left;
}
.delete{
  background-color: #222244;
  /* background-color: #222244; */

}
.background{
  display: flex;
  flex-direction: column;

  align-items:center;
  background-color: #1a1a31;
}
.row{
  background-color: #222244;
  font-family: serif;
  width: 100vw;
  border-color: aliceblue;
  border-width: 1px;
  color:aliceblue;
  box-sizing: border-box;
  padding-right: 20px;
  padding-left:30px;
  margin: 0;
}
</style>
