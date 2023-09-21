<template>
  <div id="app" class="app-container">
    <h1>The Library</h1>
    <BookFilters
    @toggleGenre="toggleGenre($event)">
    </BookFilters>

    <BookList
    :books="selectedGenreBooks"
    :selectedGenre="selectedGenre"
    >
    </BookList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BookFilters from './BookFilters.vue';
import BookList from './BookList.vue';
import { IBook, Genre } from './IBook.interface';
import { bookData } from './bookData';

@Component({
  components: {
    BookFilters,
    BookList
  }
})
export default class App extends Vue {
  private originalBooks: IBook[] = bookData();
  private selectedGenreBooks: IBook[];
  private selectedGenre: string;
  
  created(){
    this.toggleGenre(null);
  }

  private toggleGenre(genre: Genre) {
    this.selectedGenre = genre;
    this.selectedGenreBooks = genre === null ? this.originalBooks : this.originalBooks.filter((book) => book.genre === genre);
    this.$forceUpdate();
  }
}
</script>

<style>
.app-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.activeBook{
  background-color: green;
}

.styled-list {
  list-style: none; /* Remove default list bullets */
  padding: 0; 
  margin: 0; 
  cursor: pointer;
}

.styled-list li {
  margin-bottom: 10px; /* Add margin between list items */
  font-size: 16px; 
}
</style>
