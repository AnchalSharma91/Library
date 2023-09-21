import {useState} from 'react';
import {getBooks} from './books-mock';

export function BookFilters(props) {
  const bookData = getBooks();
  const [selectedGenre, setSelectedGenre] = useState('NoFilter');
  //const filteredBooks = selectedGenre === 'NoFilter' ? bookData : bookData.filter(book => book.genre === selectedGenre);
  const genres = [...new Set(bookData.map((book) => book.genre))];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    
  };
  return (
    <div>
      <label htmlFor="genreFilter">Filter by Genre: </label>
      <select
        id="genreFilter"
        onChange={handleGenreChange}
        value={selectedGenre}
      >
        <option value="No Filter">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}