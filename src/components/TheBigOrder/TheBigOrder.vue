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
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  components: {
    ProductCard,
  },
  setup(){
    const store = useStore();
    const products = computed(()=>store.getters.products);
    return {
      products
    };
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