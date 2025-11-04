<script setup lang="ts">
import theBigSorter from "../components/bigLogo.vue"

</script>

<template>
  <div>
    <p class="welcome">
      <text>Welcome to</text>
      <the-big-sorter/>
    </p>
    <p class="selections">
      <router-link to="/viewTables">
        <button>View sets</button>
      </router-link>
      <router-link to="/createTable">
        <button>Create new</button>
      </router-link>
    </p>
  </div>
</template>

<style scoped>
.welcome{
    font-size: 30px;
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  }
div{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #040422;
  width: 100vw;
  height: 100vh;
}
.selections{
  display: flex;;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  height: 50vh;
}
button{
  padding: 20px;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #040422;
  border-radius: 2px;
  border-color: #39394f;
  color: #39394f;
  height: 20vh;
}

</style>
