import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import ReadingList from '../components/ReadingList';
import ErrorModal from '../components/Modal';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import useBooks from '../hooks/useBooks';
import '../styles/styles.css';

const BookAssignmentView = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { books, searchBooks } = useBooks();
  const [readingList, setReadingList] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const addToReadingList = (book) => {
    if (readingList.some(b => b.title === book.title)) {
      setOpen(true);
      return;
    }
    setReadingList([...readingList, book]);
  };

  const removeFromReadingList = (title) => {
    setReadingList(readingList.filter(book => book.title !== title));
  };

  return (
    <div className='book-assignment-view'>
      <div className="header">
        <Typography variant="h1" component="h1">
          Assign Books to Your <br/> Reading List
        </Typography>
        <Typography className="header-subtitle" variant="h2">Search, select, and manage books for your students' reading enjoyment</Typography>
        <SearchBar onSearch={searchBooks} />
      </div>
      <div className="lists-container" > 
        <Grid container item spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <BookList books={books} onAdd={addToReadingList} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <ReadingList books={readingList} onRemove={removeFromReadingList} />
          </Grid>
        </Grid>
      </div>
      <ErrorModal open={open} onClose={handleClose} text="Book already in reading list" description="Please select another book." />
    </div>
  );
};

export default BookAssignmentView;
