<template>
<div v-if = "selectedBooks.length > 0" >
 <h2>Selected Books Summary</h2>
    <table class="borderless-table styled-table">
      <thead>
        <tr>
          <th>Selected Titles</th>
          <th>Selected IDs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in selectedBooks" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.id }}</td>
        </tr>
      </tbody>
    </table>
    <div> Total number of pages in selected books: {{totalNumberOfPages}} </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {IBook} from './IBook.interface';

@Component({})
export default class SelectableBooks extends Vue {
    @Prop(Array) readonly selectedBooks!: IBook[];

    get totalNumberOfPages(): number {
        return this.selectedBooks.reduce((total, book) => total + book.numberOfPages, 0);
    }
    
}
</script>
<style>
.styled-table {
  width: 100%;
  border-collapse: collapse; /* Collapse cell borders */
}

.styled-table th,
.styled-table td {
  padding: 10px; /* Add padding for cell content */
  border: 1px solid #ddd; /* Add a border to the cells */
}

.styled-table th {
  background-color: #f2f2f2; /* Add a background color to header cells */
  font-weight: bold; /* Make the header cells bold */
}
</style>
