<template>
  <section class="book-add">
    <input
      type="text"
      class="search-book"
      placeholder="add a book"
      @input="addFromGoogle"
      v-model="inputVal"
      v-focus
    />
    <ul class="google-list" v-if="!isAdded && googleBooks && inputVal">
      <li
        class="flex space-between google-book"
        v-for="book in googleBooks"
        :key="book.id"
      >
        <p v-if="book">{{ book.volumeInfo.title }}</p>
        <button @click="addBook(book)">+</button>
      </li>
    </ul>
    <div v-if="!isAdded && !googleBooks && inputVal" class="waiting-div">
      <p>Please wait...</p>
    </div>
  </section>
</template>

<script>
import bookService from "../services/book.service";
import { Utils } from "../services/utils.service.js";
export default {
  data() {
    return {
      googleBooks: null,
      inputVal: null,
      isAdded: false,
    };
  },
  methods: {
    addFromGoogle() {
      this.getFromNet(this.inputVal);
    },
    async getFromNet(q) {
      this.googleBooks = await bookService.getNetworkBooks(q);
    },
    async addBook(book) {
      const newBook = {
        authors: book.volumeInfo.authors,
        categories: book.volumeInfo.categories,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit quia nemo qui adipisci odit atque ipsam tempora deleniti, nostrum fugit soluta ipsa eum animi molestiae, cupiditate, deserunt labore omnis!",
        language: book.volumeInfo.language,
        listPrice: {
          amount: Utils.getRandomInt(10, 200),
          currencyCode: "USD",
          isOnSale: book.saleInfo.isEbook,
        },
        pageCount: book.volumeInfo.pageCount,
        publishedDate: book.volumeInfo.publishedDate,
        subtitle: "this is gonna be the subtitle im sorry",
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
      };
      console.log("newBook", newBook);
      await this.$store.dispatch({
        type: "saveBook",
        book: { ...newBook },
      });
      this.isAdded = true;
      this.inputVal = "";
      this.$store.dispatch({
        type: "setMsg",
        msgTxt: `book ${newBook.title} was successfully added`,
        // msgBook: { ...newBook },
        // msgLnk: `/book/${newBook._id}`,
      });
    },
  },
};
</script>
