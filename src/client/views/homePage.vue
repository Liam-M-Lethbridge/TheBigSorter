<script setup lang="ts">
import theBigSorter from "../components/bigLogo.vue"

</script>

<template>
  <div class="background">
    <p class="text">
      <text>Welcome to</text>
      <the-big-sorter class="logo"/>
      <text class="info">Where we sort your stuff.</text>
    </p>

    <p class="selections">
      <router-link to="/viewTables">
        <button class="routerButton">View sets</button>
      </router-link>
      <router-link to="/createTable">
        <button class="routerButton">Create new</button>
      </router-link>
    </p>
    <p class="bottom">
      <text class="info">We sort items based on Pugh's matrix - a criteria-based tool used to compare and rank items.</text>
    </p>
  </div>
</template>

<style scoped>
.logo{
  font-size: 40px;
}
.info{
  height: 100%;
  font-size: 15px;
}
.scope{
  justify-content: center;
}
.routerButton{
  color: coral;
  background-color: #292d2f;
  margin: 2px;
  border-radius: 15px;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-width: 3px;
  font-family: Impact;
  padding: 20px;
  font-size: 40px;
}
.text{
  width: 100%;
  font-size: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fdfdff;
  margin-bottom: 20px;
  padding:5px
  }
.bottom{
  width: 100%;
  font-size: 20px;
  align-self: center;
  flex-direction: column;
  text-align: center;
  color: #fdfdff;
  height:40%;
  place-items: center;
  margin-top: 20px;
  padding: 2px;
}
.background{
  display: flex;
  flex-direction: column ;
  font-family: Impact;
  background-image:linear-gradient(to bottom right, #393d3f, #292d2f);
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
}
.selections{
  display: flex;;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  height: fit-content;
}


</style>
