<template>
  <h1>Your Orders</h1>

  <div class="p-grid">
    <div class="p-col-12 p-md-12 p-lg-6">
      <Card>
        <template #content>
          <div>
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
              <h2>Total = {{ totalPrice }} €</h2>
              <h3>VAT@7%: {{vat}} €</h3>
              <h3>Net Price: {{netPrice}} €</h3>
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

export default {
  components: {
    Card,
    DataTable,
    Column,
    Address,
    Payment,
  },
    inject:['orderTableData']
    ,
  data() {
    return {
      columns: null,
      totalPrice: 150,
    };
  },
  computed: {
    vat(){
      const value = Number.parseFloat(this.totalPrice - this.netPrice).toFixed(2);
      return value;
    },
    netPrice(){
      const value = Number.parseFloat(this.totalPrice / 1.07).toFixed(2);
      return value;
    }
  }
  ,
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
  text-align: center;
}
</style>