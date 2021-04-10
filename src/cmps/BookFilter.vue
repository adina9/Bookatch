<template>
  <section class="book-filter">
    <input
      type="text"
      placeholder="Search..."
      v-model="filterBy.txt"
      v-focus
      @input="filtered"
    />
    <input
      type="number"
      placeholder="$"
      v-model="filterBy.minPrice"
      @input="filtered"
    />
    <input
      type="number"
      placeholder="to$"
      v-model="filterBy.maxPrice"
      @input="filtered"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
        minPrice: 0,
        maxPrice: Infinity,
      },
    };
  },
  methods: {
    filtered() {
      this.$emit("filtered", { ...this.filterBy });
    },
  },
};
</script>

