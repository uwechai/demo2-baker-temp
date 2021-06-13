<template>
  <Toast position="bottom-right" group="br" />
  <Card>
    <template #header>
      <img :src="productData.imageUrl" />
    </template>
    <template #title> {{ productData.name }} </template>

    <template v-if="isBigOrder" #content
      >Minimum order quantity {{ productData.minimumOrder }} pieces @{{
        productData.bigOrderPrice
      }}€/pc
    </template>

    <template #footer>
      <div v-if="isBigOrder">
        <div class="">
          <label :for="'quantity_' + productData.name">Quantity</label>
          <InputNumber
            :id="'quantity_' + productData.name"
            :ref="productData.name"
            mode="decimal"
            showButtons
            :min="productData.minimumOrder"
            :max="1000"
            v-model="inputValue"
          />
          <Button
            icon="pi pi-shopping-cart"
            label="Add to cart"
            @click="addToCart(productData.name, inputValue)"
            class="p-button-success"
          />
        </div>
      </div>
      <div v-else>
        <Tag :value="'€' + productData.price + '/pc'"></Tag>
        <Button
          icon="pi pi-shopping-cart"
          label="+1 to cart"
          @click="addToCart(productData.name, 1)"
        />
      </div>
    </template>
  </Card>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Toast from "primevue/toast";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";

export default {
  components: {
    Button,
    Card,
    Tag,
    Toast,
    InputNumber,
  },
  props: ["productData", "isBigOrder"],

  setup() {
    const inputValue = ref(null);

    const store = useStore();
    const toast = useToast();
    function addToCart(name, inputValue) {
      if (inputValue === null) return;
      store.dispatch("addToCart", { name, inputValue });
      toast.add({
        severity: "success",
        summary: "Added " + inputValue + " " + name + " to Cart",
        group: "br",
        life: 1500,
      });
    }
    return {
      inputValue,
      addToCart,
    };
  },
};
</script>

<style scoped>
img {
  height: 240px;
  width: 100%;
}
.wrapper {
  background: slategrey;
}
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>

<style scoped lang="scss">
::v-deep .p-card-content {
  padding: 0rem 0rem !important;
}

::v-deep .p-tag-value {
  font-size: 1rem;
  font-weight: normal;
  background: #607d8b;
}

::v-deep .p-tag {
  background: #607d8b;
  padding: 0.5rem 1rem;
  margin-right: 0.5em;
}

::v-deep .p-inputtext {
  width: 50px;
  margin-left: 5px;
}

::v-deep .p-button-success {
  margin-left: 5px;
}
</style>