<template>
  <h2>Place a big order and get discount!</h2>

  <div class="grid-container">
    <div
      class="grid-item"
      v-for="(product, index) in products.filter(
        (item) => item.canBigOrder === true
      )"
      :key="index"
    >
      <ProductCard :productData="product" :isBigOrder="true" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../reusables/ProductCard";
// import Gridder3xn from "./Gridder3xn";
export default {
  components: {
    ProductCard,
    // Gridder3xn,
  },
  computed:{
    products(){
      return this.$store.getters.products;
    }
  }
};
</script>



<style scoped>
h2 {
  margin-left: 30px;
}

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