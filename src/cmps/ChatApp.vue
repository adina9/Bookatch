<template>
  <div class="chat">
    <form @submit.prevent="sendMsg">
      <input
        type="text"
        v-model="msg.txt"
        autocomplete="off"
        placeholder="#What's up?"
      />
      <button class="sub-btn">Send</button>
      <ul class="msgs-list">
        <li class="msg" v-for="msg in msgs" :key="msg.txt">
          <b>{{ msg.from }}:</b> {{ msg.txt }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { socketService } from "../services/socketService.js";
import { Utils } from "../services/utils.service.js";
export default {
  data() {
    return {
      msg: {
        txt: "",
      },
      msgs: [
        {
          from: "Me",
          txt: "Hi",
        },
      ],
      botMsgs: [
        { txt: "Hello" },
        { txt: "How can I help you?" },
        { txt: "You Are Amazing" },
        { txt: "How is your day?" },
      ],
    };
  },
  created() {
    socketService.setup();
    socketService.on("chat addMsg", this.addMsg);
  },
  mounted() {
    socketService.emit("chat topic", this.topic);
  },
  beforeDestroy() {
    socketService.off("chat addMsg", this.addMsg);
    socketService.terminate();
    clearTimeout(this.timout);
  },
  methods: {
    sendMsg() {
      const from = "Me";
      socketService.emit("chat newMsg", { from, txt: this.msg.txt });
    },
    addMsg(newMsg) {
      this.msgs.push(newMsg);
      this.sendBotResponse();
    },
    sendBotResponse() {
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        let msg = {
          from: "Bot",
          txt: this.botMsgs[Utils.getRandomInt(0, 3)].txt,
        };
        this.msgs.push(msg);
      }, 1500);
      this.msg = {};
    },
  },
};
</script>

