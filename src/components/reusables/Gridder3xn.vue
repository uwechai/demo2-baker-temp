<template>
      <div class="grid-container">
        <div class="grid-item" v-for="(product, index) in products" :key="index">
        <slot ></slot>
    </div>
  </div>
</template>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  max-width: 420px;
}
</style>