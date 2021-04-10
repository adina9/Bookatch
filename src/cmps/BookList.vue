<template>
  <section class="book-list">
    <book-preview
      v-for="book in books"
      :book="book"
      :currency="getCurrency(book.listPrice.currencyCode)"
      :key="book.id"
      @remove="remove"
    />
  </section>
</template>

<script>
import BookPreview from "../cmps/BookPreview";
export default {
  props: {
    books: Array,
  },
  data() {
    return {
      currency: null,
    };
  },
  methods: {
    remove(bookId) {
      this.$emit("remove", bookId);
    },
    getCurrency(currency) {
      switch (currency) {
        case "ILS":
          return "₪";
        case "USD":
          return "$";
        case "EUR":
          return "£";
      }
    },
  },
  components: {
    BookPreview,
  },
};
</script>
