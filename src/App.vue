<template>
  <main>
    <div class="p-grid">
      <div class="p-col-2">
        <NavBar></NavBar>
        <button @click="showCart">Click me</button>
      </div>
      <div class="p-col">
        <div class="box">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Sidebar :visible="cartIsShown" position="right" :dismissable="true" class="p-sidebar-sm" :modal="false">
    <button @click="showCart">Click me</button>
    </Sidebar>
  </main>
</template>


<script>
import NavBar from "./components/NavBar";
import Sidebar from 'primevue/sidebar';
export default {
  name: "App",
  components: {
    NavBar,
    Sidebar,
  },
  data(){
    return {
      cartIsShown: false
    };
  },
  methods:{
    showCart(){
      this.cartIsShown = !this.cartIsShown;
    }
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 10px;
  color: #2c3e50;
}
.p-component-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
