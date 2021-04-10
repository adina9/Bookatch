<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eaque
      quo corrupti doloremque iusto animi cumque praesentium et possimus at
      voluptates consequatur labore? Ipsum nulla cum amet reprehenderit dolor.
    </p>
    <!-- <router-link to="/about/modal">Open A Chat</router-link> -->
    <!-- <button @click="isPopupShown = true">chat icon</button> -->
    <!-- <transition name="fade" v-if="isPopupShown">
      <about-modal> </about-modal>
      <router-view />
    </transition> -->
  </div>
</template>
<script>
import AboutModal from "../cmps/AboutModal.vue";
export default {
  components: { AboutModal },
  data() {
    return {
      isPopupShown: false,
    };
  },
};
</script>

