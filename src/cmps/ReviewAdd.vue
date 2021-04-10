<template>
  <div class="review">
    <div class="form">
      <form
        action=""
        @submit.prevent="saveReview"
        v-if="isFormShown && !isRTSClicked"
      >
        <div class="flex info">
          <input
            type="text"
            v-focus
            placeholder="Your Name"
            v-model="review.fullName"
          />
          <div class="more">
            <select
              name="rate"
              id="rate"
              aria-placeholder="#1"
              v-model="review.rate"
              class="select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="date" name="" id="" v-model="review.date" />
          </div>
        </div>
        <textarea
          class="text-area"
          name=""
          id=""
          cols="25"
          rows="5"
          placeholder="Your Review"
          v-model="review.txt"
        ></textarea>
        <button class="save-r-btn">Save Review</button>
      </form>
    </div>
    <div class="reviews-div" v-if="!isFormShown && !isRTSClicked">
      <p><b>Reviews</b></p>
      <ul class="reviews-list" v-if="book.reviews && book.reviews.length">
        <li class="review" v-for="review in book.reviews" :key="review.id">
          <p v-if="review.rate"><b>Rate:</b> {{ review.rate }}</p>
          <p v-if="review.txt">{{ review.txt }}</p>
          <div class="review-btns">
            <span @click="showReview(review)">❔</span>
            <button @click.stop="deleteReview(review.id)">X</button>
          </div>
        </li>
      </ul>
      <p v-else>This book has no reviews yet...</p>
    </div>
    <button
      class="btn-add"
      v-if="!isFormShown && !isRTSClicked"
      @click="isFormShown = true"
    >
      Add Review
    </button>
    <div class="review-preview" v-if="isRTSClicked">
      <div class="review-back-btn">
        <button @click.stop="isRTSClicked = false">←</button>
      </div>
      <div class="review-info">
        <p>
          <b>At: </b
          ><span v-if="review.date">{{ reviewToShow.createdAt }}</span>
        </p>
        <p>
          <b>From: </b
          ><span v-if="review.fullName">{{ reviewToShow.fullName }}</span>
        </p>
        <p>
          <b>Rate: </b><span v-if="review.rate">{{ reviewToShow.rate }}</span>
        </p>
        <p>
          <b>Context: </b><span v-if="review.txtx"> {{ reTxt }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import bookService from "../services/book.service.js";
import { Utils } from "../services/utils.service.js";
export default {
  props: {
    book: [String, Object],
  },
  data() {
    return {
      review: {
        fullName: "",
        rate: "",
        date: "",
        txt: "",
      },
      reviewList: null,
      isFormShown: false,
      reviewToShow: "",
      isRTSClicked: false,
    };
  },
  created() {
    console.log(this.book);
  },
  methods: {
    async saveReview() {
      const finalReview = {
        ...this.review,
        id: Utils.getRandomId(),
        createdAt: new Date(Date.now()).toDateString(),
      };

      if (!this.book.reviews) {
        this.book.reviews = [];
        this.book.reviews.push({ ...finalReview });
      } else this.book.reviews.push({ ...finalReview });

      var savedBook = await bookService.addReview(this.book.id, finalReview);
      console.log("savedBook:", savedBook);
      (this.review.txt = ""),
        (this.review.rate = 1),
        (this.isFormShown = false);
    },
    async deleteReview(reviewId) {
      let idx = this.book.reviews.findIndex(
        (currReview) => currReview.id === reviewId
      );
      this.book.reviews.splice(idx, 1);
      await bookService.removeReview(this.book.id, reviewId);
    },
    showReview(review) {
      this.reviewToShow = { ...review };
      this.isRTSClicked = true;
    },
  },
  computed: {
    reTxt() {
      return this.reviewToShow.txt.substr(0, 20);
    },
  },
};
</script>

<style>
</style>