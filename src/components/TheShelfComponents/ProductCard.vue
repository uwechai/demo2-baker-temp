<template>
  <Toast position="bottom-right" group="br" />
  <Card>
    <template #header>
      <img :alt="name" :src="imageUrl" />
    </template>
    <template #title> {{ name }} </template>

    <template #footer>
      <Tag :value="'€' + price"></Tag>
      <Button icon="pi pi-shopping-cart" label="Add to cart" @click="addToCart(name)"/>
    </template>
  </Card>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Toast from 'primevue/toast';
export default {
  components: {
    Button,
    Card,
    Tag,
    Toast
  },
  props: ["imageUrl", "name", "price"],
//   mounted() {
//     console.log(this.$props);
//   },
  methods: {
    addToCart(name) {
      this.$toast.add({
        severity: "success",
        summary: "Added 1 "+name+" to Cart",
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
</style>