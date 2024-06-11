import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useBooks = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
      setFilteredBooks(data.books);
    }
  }, [data]);

  const searchBooks = (query) => {
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())));
  };

  return {
    books: filteredBooks,
    searchBooks,
  };
};

export default useBooks;
