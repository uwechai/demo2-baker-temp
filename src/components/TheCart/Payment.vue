<template>
  <h2>Pay With</h2>
  <Button :class="['paypal-class']"
    ><span>Pay</span><span>Pal</span>
    <i class="pi pi-paypal pay" style="fontsize: 2rem"></i
  ></Button>
  <Button :class="['sofort-class']">SOFORT Payment</Button>
  <Button :class="['bitcoin-class']"
    >Ether <i class="fab fa-ethereum fa-lg"></i
  ></Button>
</template>


<script>
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
};
</script>


<style scoped>
.paypal-class {
  color: #006c9b;
  background-color: #f0a500;
  font-weight: 500;
  display: block;
  padding: 1rem;
  width: 17rem;
  border: 1px solid #fff;
  border-radius: 5px;
}

.sofort-class {
  margin-top: 1rem;
  display: block;
  width: 17rem;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
}

.bitcoin-class {
  margin-top: 1rem;
  display: block;
  width: 17rem;
  padding: 1rem;
  color: #8c239e;
  background-color: #d0ef84;
  border: 1px solid #fff;
  border-radius: 5px;
}
</style>

<style lang="scss" scoped>
// ::v-deep .p-button {
//   color: #f0a500;
// }
</style>