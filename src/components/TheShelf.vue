<template>
<h2>The shelf</h2>

<CustomComponent></CustomComponent>
<Button> Hello World</Button>
<Dummy></Dummy>

    <div class="grid-container">

  <div class="grid-item" v-for="listItem in myKeyList" :key="listItem"><ProductCard /></div>
 
</div>


</template>

<script>
import CustomComponent from './CustomComponent';
import Button from 'primevue/button';
import Dummy from './TheShelfComponents/Dummy';
import ProductCard from './TheShelfComponents/ProductCard';
export default {
    components : {
        CustomComponent,
        Button,
        Dummy,
        ProductCard,
    },
    data(){
        return {
            myKeyList: [1,2,3,4,5],
        };
    }
    
};
</script>

<style scoped>
/* .card-image {
  height: 50px;
  width: 50px;
} */
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {


  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>