<template>
  <div class="app-header">
    <div class="logo">
      <router-link to="/book"
        ><img src="../assets/two-books.png" alt=""
      /></router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/book">Our Books</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link active-class="active" exact to="/">Home</router-link>
    </nav>
    <div class="hamburger" hidden>
      <img
        src="../assets/hamburger-menu.png"
        @click="isInMobile = !isInMobile"
      />
      <nav :class="setClass">
        <div @click="closeMenu()">
          <router-link active-class="active" exact to="/">Home</router-link>
        </div>
        <div @click="closeMenu()">
          <router-link to="/book">Our Books</router-link>
        </div>
        <div @click="closeMenu()">
          <router-link to="/about">About Us</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isInMobile: false,
    };
  },
  computed: {
    setClass() {
      if (this.isInMobile) return "mobile-nav";
      else return "mobile-nav open";
    },
  },
  methods: {
    closeMenu() {
      this.isInMobile = false;
    },
  },
};
</script>


