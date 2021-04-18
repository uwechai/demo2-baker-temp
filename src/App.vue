<template>
  <main>
    <div class="p-grid">
      <div class="p-col-2">
        <NavBar></NavBar>
      </div>
      <div class="p-col">
        <div class="box">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </main>
</template>


<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,

  },
  data(){
    return {
     
    };
  },
  methods:{

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
