<template>
  <main>
    <div class="p-grid">
      <div class="p-col-2">
        <NavBar></NavBar>
      </div>
      <div class="p-col">
        <div class="box">
          <router-view v-slot="{ Component }">
            <keep-alive >
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,

  },
  data() {
    return {
      activeLink: "",
            products: [
        {
          imageUrl:
            "https://live.backmomente.de/wp-content/uploads/2018/05/weizenbroetchen-1024x576.jpg.webp",
          name: "Weizenbrötchen",
         
          price: 0.69,
          bigOrderPrice: 0.39,
          minimumOrder: 30,
          canBigOrder: true
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
          bigOrderPrice: 0.25,
          minimumOrder: 50,
     
          canBigOrder: true
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
          bigOrderPrice: 0.29,
          minimumOrder: 50,
 
          canBigOrder: true
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
            "http://buntes-potpourri.de/wp-content/uploads/2018/12/pizzabroetchen.jpg",
          name: "Pizzabrötchen",
          price: 2.19,
        },
        {
          imageUrl:
            "https://www.edeka-wucherpfennig.de/wp-content/uploads/2017/04/apfeltaschen.jpg",
          name: "Apfeltasche",
          price: 1.89,
          bigOrderPrice: 1.25,
          minimumOrder: 50,
   
          canBigOrder: true
        },
      ],
    };
  },
  provide() {
    return {
      products: this.products,
      activeLink: this.activeLink,
      changeLink: this.changeLink,
    };
  },
  methods: {
    changeLink(value) {
      this.activeLink = value;
      console.log(this.activeLink);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 10px;
  color: #2c3e50;
}
.p-component-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>>

