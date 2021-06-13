<template>
  <h2>MeinBayernBäger</h2>

  <div :class="['box', 'p-shadow-3', 'navbar']">
    <ul>
      <li>
        <router-link to="/shelf" exact>Shelf</router-link>
      </li>
      <li>
        <router-link to="/big-order">Big Order</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart</router-link>
      </li>
    </ul>

    <div class="about-us">
      <div class="divider"></div>
      <p>About Us</p>
    </div>
  </div>
</template>


<style scoped>
ul {
  text-align: center;
  padding: 6rem 0 0 0;
}

li {
  display: block;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  padding: 1rem 1rem;
  border-radius: 10px;
  transition: box-shadow 0.2s;
  user-select: none;
  font-size: 1.5rem;
}

li:hover {
  cursor: none;
  list-style: none;
  /* background-color: #e0e4dd; */
}

.box {
  border-radius: 5px;
}

.navbar {
  height: 40rem;
  position: relative;
  min-width: 230px;
  margin-top: 40px;
}

a {
  padding: 1rem 1rem;
  border-radius: 10px;
  color: #495057;
  text-decoration: none;
}

a:hover {
  background-color: #dbe3e6;
  cursor: pointer;
  font-weight: 800;
}

.router-link-active {
  background-color: #dbe3e6;
  cursor: pointer;
  font-weight: 800;
}

.about-us {
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 85px;
}

.divider {
  border-top: 3px dashed #2196f3;
}
</style>

