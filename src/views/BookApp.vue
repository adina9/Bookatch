<template>
  <section class="app-main">
    <book-add />
    <template>
      <book-filter @filtered="setFilter" />
      <book-list :books="booksForDisplay" @remove="removeBook" />
    </template>
  </section>
</template>
<script>
import BookList from "../cmps/BookList";
import BookDetails from "../views/BookDetails";
import BookFilter from "../cmps/BookFilter";
import BookAdd from "../cmps/BookAdd";
export default {
  name: "app",
  created() {
    this.loadBooks();
  },
  data() {
    return {
      selectedBook: null,
    };
  },
  methods: {
    async loadBooks() {
      await this.$store.dispatch({ type: "loadBooks" });
    },
    async removeBook(bookId) {
      await this.$store.dispatch({ type: "removeBook", bookId });
    },
    closeDetails() {
      this.selectedBook = null;
    },
    setFilter(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
    },
  },
  computed: {
    booksForDisplay() {
      console.log("books:", this.$store.getters.booksForDisplay);
      return this.$store.getters.booksForDisplay;
    },
  },
  components: {
    BookDetails,
    BookFilter,
    BookList,
    BookAdd,
  },
};
</script>
