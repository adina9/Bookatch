<template>
  <div class="home">
    <section class="home-section">
      <h1 class="home-title">Welcome to Bookatch</h1>
      <img class="home-img" src="../assets/two-books.png" alt="" />
      <router-link to="/book"
        ><button class="link-btn">Get In</button></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
</style>


