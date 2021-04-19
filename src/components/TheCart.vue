<template>
  <h1>Your Orders</h1>

  <div class="p-grid">
    <div class="p-col-12 p-md-12 p-lg-6">
      <Card>
        <template #content>

          <div v-if="total === 0"> <h2>No Items in the Cart yet!</h2> </div>
          <div v-else>
            <DataTable :value="orderTableData" responsiveLayout="scroll">
              <Column
                v-for="col of columns"
                :field="col.field"
                :header="col.header"
                :key="col.field"
              ></Column>
            </DataTable>
          </div>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md- p-lg-6">
      <Card>
        <template #content>
          <Address></Address>

          <div class="p-grid">
            <div class="p-col-12 p-md-12 p-lg-6">
              <h2>Total = {{ total }} €</h2>
              <h3>VAT@7%: {{ vat }} €</h3>
              <h3>Net Price: {{ netPrice }} €</h3>
    
            </div>
            <div class="p-col-12 p-md-12 p-lg-6">
              <Payment></Payment>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>



<script>
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Address from "./TheShelfComponents/Address";
import Payment from "./TheShelfComponents/Payment";
import { inject } from 'vue'

export default {
  setup(){
    const total = inject('total');

    return {
      total
    };
  },
  components: {
    Card,
    DataTable,
    Column,
    Address,
    Payment,
  },
  inject: ["orderTableData"],
  data() {
    return {
      columns: null,
    
    };
  },
  watch:{
    // total(value){
    //   console.log(value);
    // },
    // orderTableData(value){
    //   console.log(value);
    //   console.log(this.orderTableData); 
    // }
  },
  computed: {
    vat() {
      const value = Number.parseFloat(this.total - this.netPrice).toFixed(
        2
      );
      return value;
    },
    netPrice() {
      const value = Number.parseFloat(this.total / 1.07).toFixed(2);
      return value;
    },
  },
  created() {
    this.columns = [
      { field: "name", header: "Product Name" },
      { field: "quantity", header: "Quantity" },
      { field: "price", header: "Price" },
    ];
    // console.log(this.orderTableData);
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
}
</style>