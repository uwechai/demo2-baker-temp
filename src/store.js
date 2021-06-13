import { createStore } from "vuex";

export default createStore({
  state() {
    return {
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
        // {
        //   name: "Weizenbrötchen",
        //   quantity: 20,
        //   price: 0.69,
        // },
      ],
      total: 0,
    };
  },
  mutations: {
    addToCart(state, { name, inputValue }) {
      // Make a list of already added items
      const orderNames = [];
      state.orderTableData.forEach((item) => {
        orderNames.push(item.name);
      });
      const orderedProductData = state.products.find(
        (item) => item.name === name
      );

      // check if item exists in added items, if yes modify quantity and price, otherwise create new one.
      if (orderNames.includes(name)) {
        const indexOrder = state.orderTableData.findIndex(
          (item) => item.name === name
        );
        const toModifyOrder = state.orderTableData[indexOrder];
        toModifyOrder.quantity = toModifyOrder.quantity + inputValue;
        if (toModifyOrder.quantity >= orderedProductData.minimumOrder) {
          toModifyOrder.price = orderedProductData.bigOrderPrice;
        } else {
          toModifyOrder.price = orderedProductData.price;
        }
      } else {
        state.orderTableData.push({
          name: name,
          quantity: inputValue,
          price: orderedProductData.price,
        });
      }

      // finally calculate the total price in EUR
      const subtotalList = [];
      state.orderTableData.forEach(function(item) {
        const subtotal = item.quantity * item.price;
        subtotalList.push(subtotal);
      });
      const sum = subtotalList.reduce((a, b) => a + b, 0);
      state.total = sum;
    },
  },
  actions: {
    addToCart(context, data) {
      context.commit("addToCart", data);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    orderTableData(state) {
      return state.orderTableData;
    },
    total(state) {
      return state.total;
    },
  },
});
