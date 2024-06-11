import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const BookCard = ({ book, onAdd }) => {
  let coverImage;
  try {
    coverImage = `/${book.coverPhotoURL}`;
  } catch (e) {
    console.error(`Image not found: /${book.coverPhotoURL}`);
    coverImage = '';
  }

  return (
    <Card style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <CardMedia
        component="img"
        image={coverImage}
        alt={book.title}
        style={{ width: '50%', objectFit: 'cover' }}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent style={{ flexGrow: 1 }}>
          <Typography component="h5" variant="h5">
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {book.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Reading Level: {book.readingLevel}
          </Typography>
        </CardContent>
        <Button variant="contained" color="primary" onClick={() => onAdd(book)} style={{ margin: '10px' }}>
          Add to Reading List
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
