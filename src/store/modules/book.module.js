import bookService from '@/services/book.service.js'

export default {
    state: {
        books: null,
        filterBy: null,
        selectedBook: null
    },
    getters: {
        booksForDisplay(state) {
            const { books } = state;
            if (!state.filterBy || state.filterBy.txt === "") return books;
            return books.filter(book => {
                const regex = new RegExp(state.filterBy.txt, "ig");
                const minPrice = state.filterBy.minPrice || 0
                const maxPrice = state.filterBy.maxPrice || Number.MAX_SAFE_INTEGER
                return regex.test(book.title) && book.listPrice.amount > minPrice && book.listPrice.amount < maxPrice
            })
        },
    },
    mutations: {
        setBooks(state, payload) {
            state.books = payload.books
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        remove(state, { bookId }) {
            const idx = state.books.findIndex(book => book.id === bookId)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            const idx = state.books.findIndex(currBook => currBook.id === book.id)
            if (idx === -1) state.books.push(book)
            else state.books.splice(isx, 1, book)
        },
        setSelectBook(state, { book }) {
            state.selectedBook = book
        }
    },
    actions: {
        async loadBooks(context) {
            const books = await bookService.query()
            context.commit({ type: 'setBooks', books })
        },
        async removeBook({ commit }, { bookId }) {
            await bookService.remove(bookId)
            commit({ type: 'remove', bookId })
        },
        async saveBook({ commit }, { book }) {
            const theBook = await bookService.save(book)
            commit({ type: 'saveBook', book: theBook })
        },
        async getBookById(context, { bookId }) {
            const book = await bookService.get(bookId)
            context.commit({ type: 'setSelectBook', book })
        },
        async saveReview({ commit }, { review }) {
            const theBook = await bookService.addReview(review)
            commit({ type: 'saveBook', book: theBook })
        }
    },
}