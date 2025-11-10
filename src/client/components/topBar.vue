<script setup lang="ts">
import theBigSorter from "./bigLogo.vue";
</script>
<template>
  <div class="bar">
    <router-link to="/" class="text">
      HOME PAGE</router-link>
    <the-big-sorter/>
    </div>
</template>
<style scoped>
.bar{
  display: flex;
  background-color: #191D1F;
  font-size: medium;
  width: 100vw;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  font-family: Impact;

}
.text{
  color: coral;
  line-height: 5vh;
}
</style>