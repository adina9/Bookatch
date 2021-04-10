<template>
  <section class="book-preview">
    <div class="btns">
      <button @click.stop="remove">X</button>
    </div>
    <article>
      <h1 class="book-title">{{ book.title }}</h1>
      <router-link :to="`/book/${book.id}`">
        <img class="book-img" :src="book.thumbnail" />
      </router-link>
      <div class="price-div">
        <h1 class="book-price">{{ book.listPrice.amount }}{{ currency }}</h1>
        <div class="sale-div" v-if="book.listPrice.isOnSale">
          <img src="../assets/sale-img.png" />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    book: [String, Object],
    currency: String,
  },
  methods: {
    remove() {
      this.$emit("remove", this.book.id);
    },
  },
};
</script>
