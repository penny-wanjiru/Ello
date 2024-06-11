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
    <Card style={{ display: 'flex', flexDirection: 'row', height: 200, width: 600, borderRadius: 20, backgroundColor: theme.palette.secondary.white}}>
      <CardMedia
        component="img"
        image={coverImage}
        alt={book.title}
        style={{ width: '20%', objectFit: 'cover', borderRadius: 20 }}
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
        <Button
          variant="contained"
          style={{ backgroundColor: theme.palette.primary.yellow, color: theme.palette.primary.white, margin: '10px' }}
          onClick={() => onAdd(book)}
        >
          Add to Reading List
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
