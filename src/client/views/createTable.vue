<script setup lang="ts">
// import theBigSorter from "../components/bigLogo.vue"
import { ref } from "vue"
import { createTable } from "../functions"
import topBar from "../components/topBar.vue"
const name = ref("")
const criteria = ref(new Set<string>())
const criterion = ref("")

function add_criteria(){
  criteria.value.add(criterion.value)
  criterion.value = ""
}

function createNewTable(){
  createTable(name.value, Array.from(criteria.value))
  name.value = ""
  criteria.value = new Set<string>()
}
</script>

<template>
  <bar/>
  <topBar></topBar>
  <div class="background">
    <div class="leftSide">

      <div class="preview">
        <form  @submit.prevent="add_criteria">
        <input v-model="criterion" minlength="1" placeholder="Input criteria" class = "name"/>
      </form>
    </div>
    </div>
    <div class="rightSide">
      <div class="preview">
        <form @submit.prevent="createNewTable">
          <input v-model="name" minlength="1" placeholder="[New datatype...]" class = "name"/>

            <li v-for="criterion in criteria" :key=criterion>{{ criterion }}</li>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.preview{
  width:40vw;
  height: 40vw;
  background-color: black;
  text-align: center;
  border-radius: 20px;
}
.leftSide{
  display: flex;
  width: 50vw;
  height: 95vh;
  align-content: space-around;
  align-items: center;
  justify-content: center;
}
.rightSide{
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
}
.name{
  background-color: grey;
  color: rgb(13, 8, 45);
  font-size: medium;
  padding: 5px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  width: 35vw;
  text-align: center;
  border-radius: 10px;

}
.homePage{
  background-color:black;
  border:none;
  color: white;
  width: 100vw;
  height: 5vh;
  text-align: left;
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
