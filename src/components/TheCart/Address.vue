<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-field p-col-12 p-md-6">
      <label for="email">E-Mail</label>
      <InputText id="email" type="email" placeholder="E-Mail ID" />
    </div>

    <div class="p-field p-col-12">
      <label for="strName">Address</label>

      <InputText
        id="strName"
        type="text"
        placeholder="Street Name and House Number"
      />
    </div>
    <div class="p-field p-col-12 p-md-3">
      <label for="zip">Zip</label>
      <InputText id="zip" type="text" />
    </div>
    <div class="p-field p-col-12 p-md-6">
      <label for="city">City</label>
      <InputText id="city" type="text" />
    </div>
  </div>
    
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  components: {
    InputText,
  },
};
</script>