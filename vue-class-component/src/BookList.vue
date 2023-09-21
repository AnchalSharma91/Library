<template>
  <div class="column">
    <h2>Books</h2>
    <ul class="styled-list">
      <li v-for="book in computeBooks" 
          :key="book.id" 
          @click="toggleBookSelect(book)"
          :class="{ activeBook: book.selected }"
      >{{ book.title }}</li>
    </ul>
    
    <SelectableBooks :selectedBooks="selectedBooks"></SelectableBooks>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IBook } from './IBook.interface';
import SelectableBooks from './SelectableBooks.vue';

@Component({
  components: {
    SelectableBooks
  }
})
export default class BookList extends Vue {
   @Prop() private books!: IBook[];
   @Prop() private selectedGenre!: string;

   get computeBooks() {
    this.selectedBooks = [];
    this.books.forEach((book) => book.selected = false);
    return this.books;
  }

   selectedBooks: IBook[]= [];

   private toggleBookSelect(selectedBook) {
    
    const bookIndex = this.selectedBooks.findIndex(book => book.id === selectedBook.id);

    if (bookIndex === -1) {
      // Book not found in selectedBooks, add it
      this.selectedBooks.push(selectedBook);
    } else {
      // Book already exists in selectedBooks, remove it
      this.selectedBooks.splice(bookIndex, 1);
    }

    // Toggle the selected property in filteredBooks
    const filteredBook = this.books.find((book) => book.id === selectedBook.id);
    if (filteredBook) {
      filteredBook.selected = !filteredBook.selected;
    }
  }
  
}
</script>

<style scoped>
.styled-list {
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.styled-list li {
  margin-bottom: 10px;
  font-size: 16px;
}

.activeBook {
  background-color: rgb(161, 249, 161);
}
</style>