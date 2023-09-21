import { useState } from 'react';
import './App.css';
import { getBooks } from './books-mock';
import { BookFilters } from './BookFilters';
import { SelectableBooks } from './SelectableBooks';

function App() {
  const bookData = getBooks()
    const [filteredBooks, setFilteredBooks] = useState(bookData);
  
    const handleGenreFilter = (selectedGenre) => {
      if (selectedGenre === 'All') {
        setFilteredBooks(bookData);
      } else {
        const filtered = bookData.filter((book) => book.genre === selectedGenre);
        setFilteredBooks(filtered);
      }
    };
  
    return (
      <div>
        <h1>Book List</h1>
        <BookFilters books={getBooks()} onGenreFilter={handleGenreFilter} />
  

      <SelectableBooks></SelectableBooks>
  
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Number of Pages: {book.numberOfPages}</p>
              <p>Genre: {book.genre}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default App;
