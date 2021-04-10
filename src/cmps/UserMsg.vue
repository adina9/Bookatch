<template>
  <div class="user-msg" v-if="isMsgShow">
    <div class="close-btn">
      <button @click="isMsgShow = false">X</button>
    </div>
    <p>{{ msgTxt }}</p>
    <!-- <router-link :to="msgLnk"><p class="link">→ Check it out</p> </router-link> -->
  </div>
</template>

<script>
export default {
  props: {
    msgTxt: String,
    msgLnk: String,
  },
  data() {
    return {
      isMsgShow: true,
    };
  },
};
</script>
