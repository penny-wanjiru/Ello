import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BookCard = ({ book, onAdd }) => {
  const theme = useTheme()
  let coverImage;
  try {
    coverImage = `/${book.coverPhotoURL}`;
  } catch (e) {
    console.error(`Image not found: /${book.coverPhotoURL}`);
    coverImage = '';
  }

  return (
    <Card className="book-card">
      <CardMedia
        component="img"
        image={coverImage}
        alt={book.title}
        className='book-card-image'
      />
      <div  className="book-card-content">
        <CardContent style={{ flexGrow: 1, width: '80%' }}>
          <Typography component="h5" variant="h5" style={{ fontWeight: 600}}>
            {book.title}
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '3px' }}>
            <Typography variant="subtitle1" color="textSecondary">
              {book.author}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Reading Level: {book.readingLevel}
            </Typography>
          </div>
        </CardContent>
        <Button
          variant="contained"
          className='book-card-button'
          style={{ backgroundColor: theme.palette.primary.yellow, color: theme.palette.primary.pastel }}
          onClick={() => onAdd(book)}
        >
          Add to Reading List
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
