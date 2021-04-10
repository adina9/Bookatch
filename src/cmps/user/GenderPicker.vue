<template>
  <div class="gender-container">
    <select name="gender" id="gender">
      <option value="male">Male</option>
      <option value="female">Femail</option>
      <option value="unknown">I'd rather not say</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    setGender() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style>
</style>