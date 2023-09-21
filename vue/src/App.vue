<template>
  <div id="app" class="app-container">
    <h1>The Library</h1>
    <BookFilters @filter="filterBooks"></BookFilters>
    <SelectableBooks :books="filteredBooks"></SelectableBooks>
    <h2>Selected Books Summary</h2>
    <div>
      <div class="columns">
        <div class="column">
          <h2>Modernism Books</h2>
          <ul>
            <li v-for="book in filteredBooks.Modernism" :key="book.id">
              {{ book.title }}
            </li>
          </ul>
        </div>
        <div class="column">
          <h2>Realism Books</h2>
          <ul>
            <li v-for="book in filteredBooks.Realism" :
              key="book.id"
              @click="toggleSelect(book)"
              :class="{ active: book.selected }"
              >
              {{ book.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SelectableBooks from './SelectableBooks.vue';
import BookFilters from './BookFilters.vue';
import { bookData } from './bookData';
import { IBook, Genre } from './IBook.interface';

export default Vue.extend({
  components: {
    BookFilters,
    SelectableBooks,
  },
  data() {
    return {
      books: bookData() as IBook[], // Add type annotation here
      selectedGenres: {
        Modernism: false,
        Realism: false,
      } as Record<Genre, boolean>, // Add type annotation here
    };
  },
  computed: {
    filteredBooks() {
      const filtered = {
        Modernism: [] as IBook[],
        Realism: [] as IBook[],
      };

      // Loop through the books and filter them based on selected genres
      this.books.forEach((book) => {
        if (this.selectedGenres[book.genre]) {
          filtered[book.genre].push(book);
        }
      });

      return filtered;
    },
  },
  methods: {
    filterBooks() {
      // No need to implement this method, as filtering is done in the computed property.
    },
  },
  mounted() {
    // Set all genres to true on component mount
    for (const genre in this.selectedGenres) {
      if (Object.hasOwnProperty.call(this.selectedGenres, genre)) {
        this.selectedGenres[genre] = true;
      }
    }
  },
});
</script>

<style>
.app-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.active {
  color: blue; /* Style the active text differently if needed */
  cursor: pointer; /* Change cursor to pointer on hover for better UX */
}
</style>
