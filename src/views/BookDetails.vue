<template>
  <section>
    <section class="book-details" v-if="book">
      <div class="img-title">
        <button class="back-btn" @click="back">Back</button>
        <p>{{ book.title }}</p>
        <img :src="book.thumbnail" />
      </div>
      <div class="info">
        <div class="sub-title">
          <small>{{ book.subtitle }}</small>
        </div>
        <div class="more-info">
          <div class="sale-div" v-if="book.listPrice.isOnSale">
            <img src="../assets/sale-img.png" />
          </div>
          <p class="marg">
            <b>Pages: </b> {{ book.pageCount }} - {{ getPageCountDesc }}
          </p>
          <p>
            <b>Published-At: </b> {{ book.publishedDate }} -
            {{ getBublishedDesc }}
          </p>

          <p :style="priceStyle" class="marg">
            <b>Price: </b> {{ book.listPrice.amount }} {{ getCurrency }}
          </p>

          <ul class="clean-list marg authors">
            <p><b>Authors:</b></p>
            <li v-for="author in book.authors" :key="author">
              <p>{{ author }}</p>
            </li>
          </ul>
          <div class="book-desc marg">
            <p><b>Description: </b> Description: {{ setDescLength }}</p>
            <button class="show-desc-btn" @click="toggleTxtShown">
              {{ btnValue }}
            </button>
          </div>
        </div>
      </div>
      <review-add :book="book" />
    </section>
    <div v-else>
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import ReviewAdd from "../cmps/ReviewAdd.vue";
import bookService from "../services/book.service";
export default {
  components: { ReviewAdd },
  data() {
    return {
      book: null,
      bookId: null,
      pageCountDesc: "",
      publishDesc: "",
      text: "",
      isLongTxtShown: false,
      btnValue: "show more",
      currency: null,
      goNext: "",
    };
  },
  async created() {
    this.bookId = this.$route.params.bookId;
    await this.loadBook(this.bookId);
  },
  methods: {
    async loadBook() {
      this.book = await bookService.get(this.bookId);
    },
    toggleTxtShown() {
      if (this.isLongTxtShown) {
        this.isLongTxtShown = false;
        this.btnValue = "show more";
        this.text = this.book.description;
      } else {
        this.isLongTxtShown = true;
        this.btnValue = "show less";
        this.text = this.book.description.substring(0, 50) + "...";
      }
    },

    back() {
      this.$router.push("/book");
    },
    async removeReview(reviewId) {
      console.log('remove it');
      let filteredReviews = this.book.reviews.filter(
        (review) => review.id !== reviewId
      );
      let bookToSave = { ...this.book };
      bookToSave.reviews = filteredReviews;
      bookService.save(bookToSave);
      await this.loadBook();
    },
  },
  computed: {
    priceStyle() {
      let currPrice = this.book.listPrice.amount;
      if (currPrice > 150) return { color: "red" };
      else if (currPrice < 150)
        if (currPrice > 20) return { color: "purple" };
        else return { color: "green" };
    },
    getPageCountDesc() {
      let { pageCount } = this.book;
      //could be better with switch
      if (pageCount < 100) return "Light Reading";
      else if (pageCount > 200 && pageCount < 500) return "Decent Reading";
      else if (pageCount > 500) return "Long Reading";
    },
    getBublishedDesc() {
      let { publishedDate } = this.book;
      if (publishedDate > 2019) return "New!";
      else if (publishedDate > 2010 && publishedDate < 2019) return "Quite Old";
      else return "Veteran Book";
    },
    setDescLength() {
      let bookDesc = this.book.description;
      if (this.isLongTxtShown) return bookDesc;
      return bookDesc.substring(0, 50) + "...";
    },
    getCurrency() {
      let { currencyCode } = this.book.listPrice;
      switch (currencyCode) {
        case "ILS":
          return "₪";
        case "USD":
          return "$";
        case "EUR":
          return "£";
      }
    },
  },
  watch: {
    "$route.params.id"(newVal, oldVal) {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
    },
  },
};
</script>
