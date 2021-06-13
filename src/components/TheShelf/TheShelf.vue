<template>
  <div class="top-section"></div>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText type="text" v-model="searchText" placeholder="Search" />
  </span>
  <h2 class="heading">These items are our shelves right now.</h2>

  <div class="grid-container">
    <div class="grid-item" v-for="(product, index) in products" :key="index">
      <ProductCard :productData="product" :isBigOrder="false" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../reusables/ProductCard";
import InputText from "primevue/inputtext";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    ProductCard,
    InputText,
  },
  setup() {
    const searchText = ref("");
    
    const store = useStore();
    const products = computed(() => store.getters.products);

    return {
      searchText,
      products
    };
  },

};
</script>

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
}

.heading {
  padding-top: 8px;
  display: inline;
}

.p-input-icon-left {
  margin-right: 2rem;
  margin-left: 30px;
}

.top-section {
  margin-top: 19.92px;
}
</style>