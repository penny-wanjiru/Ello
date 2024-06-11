import React from 'react';
import { Grid, Typography } from '@mui/material';
import BookCard from './BookCard';
import { v4 as uuidv4 } from 'uuid';

const BookList = ({ books, onAdd }) => {
  if (books.length === 0) {
    return (
      <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
        No books found. Please try another search.
      </Typography>
    );
  }

  return (
    <div className="book-list">
      <h2>BOOK LIST</h2>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} key={uuidv4()}>
            <BookCard book={book} onAdd={onAdd} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
