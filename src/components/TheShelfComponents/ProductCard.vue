<template>
  <Toast position="bottom-right" group="br" />
  <Card>
    <template #header>
      <img :alt="productData.name" :src="productData.imageUrl" />
    </template>
    <template #title> {{ productData.name }} </template>

    <template v-if="isBigOrder" #content
      >Minimum order quantity {{ productData.minimumOrder }} pieces</template
    >

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
            @click="addXToCart(productData.name, inputValue)"
            class="p-button-success"
          />
        </div>
      </div>
      <div v-else>
        <Tag :value="'€' + productData.price + '/pc'"></Tag>
        <Button
          icon="pi pi-shopping-cart"
          label="+1 to cart"
          @click="add1ToCart(productData.name)"
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
    InputNumber,
  },
  props: ["productData", "isBigOrder"],
  inject: ["plusOneToCart", "plusXToCart"],
  //   mounted() {
  //     console.log(this.$props);
  //   },
  data(){
    return {
      inputValue: null
    };
  },
  methods: {
    add1ToCart(name) {
      this.plusOneToCart(name);
      this.$toast.add({
        severity: "success",
        summary: "Added 1 " + name + " to Cart",
        group: "br",
        life: 1500,
      });
    },
    addXToCart(name, inputValue) {
      // if (quantity === undefined) return;
      // console.log(this.$refs.myRefInput.value);
      // console.log(this.$refs.Weizenbrötchen)
      // console.log(name, quantity);
      // console.log(this.inputValue)  // how the hell does this work!!!
      console.log(inputValue);
      if(inputValue === null) return;
      this.plusXToCart(name, inputValue);
      this.$toast.add({
        severity: "success",
        summary: "Added "+inputValue+" " + name + " to Cart",
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