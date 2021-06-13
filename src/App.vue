<template>
  <main>
    <div class="p-grid">
      <div class="p-col-2">
        <NavBar></NavBar>
      </div>
      <div class="p-col">
        <div class="box">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import NavBar from "./components/NavBar";
// import { provide, ref } from "vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {

    return {

    };
  },
  data() {
    return {
      activeLink: "",

  
    };
  },
  provide() {
    return {
      activeLink: this.activeLink,
      changeLink: this.changeLink,
    };
  },
  methods: {
    changeLink(value) {
      this.activeLink = value;
    },


  },
};
</script>

<style scoped>
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
</style>>

