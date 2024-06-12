import React, { useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import BookCard from './BookCard';
import { v4 as uuidv4 } from 'uuid';

const BookList = ({ books, onAdd }) => {
  
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; 

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedBooks = books.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="book-list">
      <h2>BOOK LIST</h2>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {paginatedBooks.map((book) => (
          <Grid item xs={12} sm={6} key={uuidv4()}>
            <BookCard book={book} onAdd={onAdd} />
          </Grid>
        ))}
      </Grid>
      <div className='pagination'>
        <Pagination
          count={Math.ceil(books.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default BookList;
