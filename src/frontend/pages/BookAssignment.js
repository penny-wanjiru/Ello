import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import ReadingList from '../components/ReadingList';
import useBooks from '../hooks/useBooks';
import '../styles/styles.css';

const BookAssignmentView = () => {
  const { books, searchBooks } = useBooks();
  const [readingList, setReadingList] = useState([]);

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeFromReadingList = (title) => {
    setReadingList(readingList.filter(book => book.title !== title));
  };

  return (
    <div className='book-assignment-view'>
      <div className="header">
        <h1>Assign Books to Your<br/>Reading List</h1>
        <h2>Search, select, and manage books for your students' reading enjoyment</h2>
        <SearchBar onSearch={searchBooks} />
      </div>
      <div className="lists-container">
        <BookList books={books} onAdd={addToReadingList} />
        <ReadingList books={readingList} onRemove={removeFromReadingList} />
      </div>
    </div>
  );
};

export default BookAssignmentView;
