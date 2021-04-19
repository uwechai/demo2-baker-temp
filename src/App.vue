<template>
  <main>
    <div class="p-grid">
      <div class="p-col-2">

        <NavBar></NavBar>
      </div>
      <div class="p-col">
        <div class="box">
          <router-view v-slot="{ Component }">
            <keep-alive>
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
import { provide, ref } from 'vue';

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup () {
    const totalPrice= ref(0);
    provide('total', totalPrice);
      return {
        totalPrice
      }
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
          minimumOrder: 70,
          canBigOrder: true,
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

          canBigOrder: true,
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

          canBigOrder: true,
        },
        {
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0080/3327/1871/products/Butter_Croissant_1024x1024.jpg?v=1570055727",
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

          canBigOrder: true,
        },
      ],
      orderTableData: [
        // { name: "Weizenbrötchen", quantity: 50, price: 0.99 },
        // {
        //   name: "Roggenbrötchen",
        //   quantity: 100,
        //   price: 1.56,
        //   vin: "gwregre345",
        // },
        // // { name: "Dinkelbrötchen", quantity: 200, price: 0.49  },
        // { name: "Apfeltasche", quantity: 300, price: 0.49 },
      ],
    };
  },
  provide() {
    return {
      products: this.products,
      activeLink: this.activeLink,
      changeLink: this.changeLink,
      orderTableData: this.orderTableData,
      plusOneToCart: this.plusOneToCart,
      plusXToCart: this.plusXToCart,
      // total:  this.totalPrice,
    };
  },
  methods: {
    changeLink(value) {
      this.activeLink = value;
      // console.log(this.activeLink);
    },
    plusOneToCart(name) {
      // console.log('plusOne'+ name)
      const orderNames = [];
      this.orderTableData.forEach((item) => {
        orderNames.push(item.name);
      });
      // console.log(orderNames);
      const orderedProductData = this.products.find(
        (item) => item.name === name
      );

      if (orderNames.includes(name)) {
        // don't add name just increase the quantitiy by 1
        const indexOrder = this.orderTableData.findIndex(
          (item) => item.name === name
        );
        // console.log(indexOrder);
        const toModifyOrder = this.orderTableData[indexOrder];
        toModifyOrder.quantity += 1;
        // console.log(toModifyOrder);
        // this.orderTableData.splice(indexOrder, 1, toModifyOrder);
        // console.log(this.orderTableData);

        if (toModifyOrder.quantity >= orderedProductData.minimumOrder) {
          toModifyOrder.price = orderedProductData.bigOrderPrice;
        } else {
          // do nothing or overwrite
          toModifyOrder.price = orderedProductData.price;
        }
      } else {
        this.orderTableData.push({
          name: name,
          quantity: 1,
          price: orderedProductData.price,
        });
      }

      this.updateTotal(this.orderTableData);
    },
    plusXToCart(name, inputValue) {
      const orderNames = [];
      this.orderTableData.forEach((item) => {
        orderNames.push(item.name);
      });
      const orderedProductData = this.products.find(
        (item) => item.name === name
      );
      // console.log(orderNames);

      if (orderNames.includes(name)) {
        // don't add name just increase the quantitiy by X
        const indexOrder = this.orderTableData.findIndex(
          (item) => item.name === name
        );
        // console.log(indexOrder);

        const toModifyOrder = this.orderTableData[indexOrder];
        toModifyOrder.quantity = toModifyOrder.quantity + inputValue;
        // console.log(toModifyOrder.quantity);

        // console.log(orderedProductData);
        if (toModifyOrder.quantity >= orderedProductData.minimumOrder) {
          // console.log('change price');
          toModifyOrder.price = orderedProductData.bigOrderPrice;
        } else {
          toModifyOrder.price = orderedProductData.price;
        }
      } else {
        this.orderTableData.push({
          name: name,
          quantity: inputValue,
          price: orderedProductData.price,
        });
      }
      this.updateTotal(this.orderTableData);
    },
    updateTotal(tableData) {
      // console.log(tableData);
      const subtotalList = [];
      // console.log(this.totalPrice);
      tableData.forEach(function (item) {
        const subtotal = item.quantity * item.price;
        subtotalList.push(subtotal);
      });
      const sum = subtotalList.reduce((a, b) => a + b, 0);
      // console.log(total);
      console.log(this.totalPrice);
      this.totalPrice = sum;
      console.log(this.totalPrice);
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

