import { createStore } from "vuex";
import PRODUCTS_DATA from './products_data';

export default createStore({
  state() {
    return {
      products: PRODUCTS_DATA,
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
