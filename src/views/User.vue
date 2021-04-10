<template>
  <section class="user-section">
    <form action="">
      <!-- <select name="gender" id="gender" v-model="user.gender">
        <option value="male">Male</option>
        <option value="female">Femail</option>
        <option value="unknown">I'd rather not say</option>
      </select> -->
    </form>
    <gender-picker v-model="user.gender" />
    <time-picker v-model="user.time" />
    <color-picker v-model="user.color" />
  </section>
</template>

<script>
import GenderPicker from "../cmps/user/GenderPicker.vue";
import ColorPicker from "../cmps/user/ColorPicker.vue";
import TimePicker from "../cmps/user/TimePicker.vue";
export default {
  data() {
    return {
      user: {
        gender: "male",
        time: new Date(),
        color: "red",
      },
    };
  },
  components: { ColorPicker, GenderPicker, TimePicker },
};
</script>

