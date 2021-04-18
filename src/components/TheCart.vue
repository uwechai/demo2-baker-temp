<template>
  <h1>Your Orders</h1>

  <Card>
    <div>
      <DataTable :value="products" responsiveLayout="scroll">
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
        ></Column>
      </DataTable>
    </div>
  </Card>
</template>



<script>
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  components: {
    Card,
    DataTable,
    Column,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>