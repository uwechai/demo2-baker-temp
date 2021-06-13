<template>
  <h1>Your Orders</h1>

  <div class="p-grid">
    <div class="p-col-12 p-md-12 p-lg-6">
      <Card>
        <template #content>
          <div v-if="total === 0"><h2>No Items in the Cart yet!</h2></div>
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
              <h2>Total = {{ totalDisplay }} €</h2>
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
import Address from "./Address";
import Payment from "./Payment";
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  components: {
    Card,
    DataTable,
    Column,
    Address,
    Payment,
  },

  setup() {
    const store = useStore();

    // setup DataTable
    const orderTableData = computed(() => store.getters.orderTableData);
    const columns = ref([
      { field: "name", header: "Product Name" },
      { field: "quantity", header: "Quantity" },
      { field: "price", header: "Price" },
    ]);

    // totaling calculations
    const total = computed(() => store.getters.total);
    const totalDisplay = computed(() =>
      Number.parseFloat(total.value).toFixed(2)
    );
    const netPrice = computed(() =>
      Number.parseFloat(total.value / 1.07).toFixed(2)
    );
    const vat = computed(() =>
      Number.parseFloat(total.value - netPrice.value).toFixed(2)
    );

    return {
      orderTableData,
      columns,
      total,
      totalDisplay,
      vat,
      netPrice,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
}
</style>