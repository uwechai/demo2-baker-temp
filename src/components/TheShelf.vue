<template>

  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText type="text" v-model="searchText" placeholder="Search" />
    <button @click="showCart">Click me</button>
  </span>
  <h2 class="heading">These items are our shelves right now.</h2>

  <div class="grid-container">
    <div class="grid-item" v-for="(product, index) in products" :key="index">
      <ProductCard
        :imageUrl="product.imageUrl"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
      <Sidebar :visible="cartIsShown" position="right" :dismissable="true" class="p-sidebar-sm" :modal="false">
    <button @click="showCart">Click me</button>
    </Sidebar>
</template>

<script>
import ProductCard from "./TheShelfComponents/ProductCard";
import InputText from "primevue/inputtext";
import Sidebar from 'primevue/sidebar';

export default {
  components: {
    ProductCard,
    InputText,
       Sidebar,
  },
  data() {
    return {
      products: [
        {
          imageUrl:
            "https://live.backmomente.de/wp-content/uploads/2018/05/weizenbroetchen-1024x576.jpg.webp",
          name: "Weizenbrötchen",
          price: 0.69,
        },
        {
          imageUrl:
            "http://3.bp.blogspot.com/--EVM3pX8Orw/T5qcGp4VVAI/AAAAAAAABB0/6lWx7lAK--s/s1600/CIMG1072.JPG",
          name: "Weizenmischbrötchen",
          price: 0.49,
        },
        {
          imageUrl:
            "https://img.chefkoch-cdn.de/rezepte/1102461216195342/bilder/734265/crop-960x720/roggenbroetchen.jpg",
          name: "Roggenbrötchen",
          price: 0.49,
        },
        {
          imageUrl:
            "https://www.petersgutebackstube.de/wp-content/uploads/Bioland-Vollkornbroetchen.jpg",
          name: "Vollkornbrötchen",
          price: 0.79,
        },
        {
          imageUrl:
            "https://www.brotpoet.de/wp-content/uploads/2018/10/M%C3%BChlen-Br%C3%B6tchen.jpg",
          name: "Schrotbrötchen",
          price: 0.49,
        },
        {
          imageUrl:
            "https://cdn.gutekueche.de/upload/rezept/6063/dinkelbroetchen.jpg",
          name: "Dinkelbrötchen",
          price: 0.69,
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/2vEYHUeH7PDDywQ5H117aw0JIXVz6igzwP7OnWp_TkfGb4J9RbtrOFanhoT31HK_U9ctShIE55PRPO5iYPY-1JiOD8ZlosLvam9CJvw1LXxa2KPhVw7Izn_Q8Nj1AdrojfR9PnA",
          name: "Butter Croissant",
          price: 0.49,
        },
        {
          imageUrl: "https://data.rischart.de/images/40008.jpg",
          name: "Schokocroissant",
          price: 1.49,
        },
        {
          imageUrl:
            "https://www.edeka-wucherpfennig.de/wp-content/uploads/2017/04/apfeltaschen.jpg",
          name: "Schokocroissant",
          price: 0.49,
        },
        {
          imageUrl:
            "https://www.edeka-wucherpfennig.de/wp-content/uploads/2017/04/apfeltaschen.jpg",
          name: "Apfeltasche",
          price: 1.89,
        },
      ],
      searchText: "",
      cartIsShown: false
    };
  },
  methods: {
    showCart(){
      this.cartIsShown = !this.cartIsShown;
    }
  },
};
</script>

<style scoped>
/* .card-image {
  height: 50px;
  width: 50px;
} */
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
  margin-top: 0rem;
  padding-top: 8px;
  display: inline;
}

.p-input-icon-left {
  margin-right: 2rem;
}
</style>