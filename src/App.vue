<template>
  <div id="app">
    <user-msg :msgTxt="userMsgTxt" v-show="userMsgTxt" :msgLnk="userMsgLnk" />
    <app-header />

    <!-- <img
      src="./assets/bubble-speach.png"
      class="icon-popup"
      @click="openModal"
    />
    <about-modal @close="closeModal" :currClass="setClass">
      <template v-slot:header>
        <p>Welcome To Our Chat</p>
      </template>
      <chat-app />
      <template v-slot:footer>
        <p>Keep In Touch</p>
      </template>
    </about-modal> -->
    <router-view />
  </div>
</template>

<script>
import BookApp from "./views/BookApp";
import AppHeader from "./cmps/AppHeader.vue";
import UserMsg from "./cmps/UserMsg.vue";
import AboutModal from "./cmps/AboutModal.vue";
import ChatApp from "./cmps/ChatApp.vue";

export default {
  components: {
    BookApp,
    AppHeader,
    UserMsg,
    AboutModal,
    ChatApp,
  },
  data() {
    return {
      isPopupShown: false,
    };
  },
  computed: {
    userMsgTxt() {
      console.log(this.$store.getters);
      return this.$store.getters.userMsgTxt;
    },
    userMsgLnk() {
      return this.$store.getters.userMsgLnk;
    },
    setClass() {
      if (this.isPopupShown) return "popup open";
      else return "popup";
    },
  },
  methods: {
    openModal() {
      console.log("open the modal");
      this.isPopupShown = true;
    },
    closeModal() {
      this.isPopupShown = false;
    },
  },
  created() {
    document.title = "Bookatch";
  },
};
</script>

