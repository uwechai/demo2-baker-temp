<template>
  <Toast position="bottom-right" group="br" />
  <Card>
    <template #header>
      <img :alt="name" :src="productData.imageUrl" />
    </template>
    <template #title> {{ productData.name }} </template>

    <template v-if="isBigOrder" #content>Minimum order quantity {{ productData.minimumOrder }} pieces</template>

    <template #footer>
      <div v-if="isBigOrder">
        <div class="">
          <label for="quantitiy">Quantity</label>
          <InputNumber
            id="quantity"
            mode="decimal"
            showButtons
            :min="productData.minimumOrder"
            :max="1000"
          />
          <Button
          icon="pi pi-shopping-cart"
          label="Add to cart"
          @click="addToCart(productData.name)"
          class="p-button-success"
        />
        </div>
      </div>
      <div v-else>
        <Tag :value="'€' + productData.price + '/pc'"></Tag>
        <Button
          icon="pi pi-shopping-cart"
          label="+1 to cart"
          @click="addToCart(productData.name)"
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
export default {
  components: {
    Button,
    Card,
    Tag,
    Toast,
    InputNumber
  },
  props: ["productData", "isBigOrder"],
  //   mounted() {
  //     console.log(this.$props);
  //   },
  methods: {
    addToCart(name) {
      this.$toast.add({
        severity: "success",
        summary: "Added 1 " + name + " to Cart",
        group: "br",
        life: 1500,
      });
    },
  },
};
</script>

<style scoped>
img {
  height: 240px;
  width: 100%;
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