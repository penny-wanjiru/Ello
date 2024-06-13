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
        style={{ width: '20%', objectFit: 'cover', borderRadius: 20, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '15px'}}>
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
          style={{ backgroundColor: theme.palette.primary.yellow, color: theme.palette.primary.pastel, margin: '10px', width: '85%'  }}
          onClick={() => onAdd(book)}
        >
          Add to Reading List
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
